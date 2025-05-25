# Database Schema

## Tables

### users
```sql
create table public.users (
  id uuid references auth.users not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Plan details
  plan_type text check (plan_type in ('monthly', 'lifetime')) not null,
  plan_status text check (plan_status in ('active', 'cancelled', 'past_due')) not null,
  daily_credits_used int default 0,
  credits_reset_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint valid_email check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indexes
create index users_email_idx on public.users (email);
create index users_plan_type_idx on public.users (plan_type);
create index users_credits_reset_idx on public.users (credits_reset_at);

-- RLS Policies
alter table public.users enable row level security;

create policy "Users can view own profile"
  on public.users for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.users for update
  using (auth.uid() = id);
```

### subscriptions
```sql
create table public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  stripe_subscription_id text unique,
  stripe_customer_id text unique,
  plan_type text check (plan_type in ('monthly', 'lifetime')) not null,
  status text check (status in ('active', 'cancelled', 'past_due')) not null,
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  cancel_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes
create index subscriptions_user_id_idx on public.subscriptions (user_id);
create index subscriptions_stripe_sub_id_idx on public.subscriptions (stripe_subscription_id);
create index subscriptions_status_idx on public.subscriptions (status);

-- RLS Policies
alter table public.subscriptions enable row level security;

create policy "Users can view own subscriptions"
  on public.subscriptions for select
  using (auth.uid() = user_id);
```

### podcasts
```sql
create table public.podcasts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  spotify_url text not null,
  title text not null,
  description text,
  original_duration int not null, -- in seconds
  target_duration int not null, -- in seconds
  status text check (status in ('queued', 'processing', 'completed', 'failed')) not null,
  error_message text,
  processed_at timestamp with time zone,
  expires_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Storage details
  storage_type text check (storage_type in ('hot', 'cold')),
  storage_path text,
  size_bytes bigint,
  
  constraint valid_spotify_url check (spotify_url ~* '^https://open\.spotify\.com/episode/[a-zA-Z0-9]+')
);

-- Indexes
create index podcasts_user_id_idx on public.podcasts (user_id);
create index podcasts_status_idx on public.podcasts (status);
create index podcasts_expires_at_idx on public.podcasts (expires_at);
create index podcasts_storage_type_idx on public.podcasts (storage_type);

-- RLS Policies
alter table public.podcasts enable row level security;

create policy "Users can view own podcasts"
  on public.podcasts for select
  using (auth.uid() = user_id);

create policy "Users can create podcasts"
  on public.podcasts for insert
  with check (auth.uid() = user_id);

create policy "Users can update own podcasts"
  on public.podcasts for update
  using (auth.uid() = user_id);
```

### summaries
```sql
create table public.summaries (
  id uuid default uuid_generate_v4() primary key,
  podcast_id uuid references public.podcasts not null,
  content text not null,
  chapters jsonb not null default '[]'::jsonb,
  keywords text[] not null default array[]::text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes
create index summaries_podcast_id_idx on public.summaries (podcast_id);
create index summaries_keywords_idx on public.summaries using gin (keywords);

-- RLS Policies
alter table public.summaries enable row level security;

create policy "Users can view own summaries"
  on public.summaries for select
  using (
    exists (
      select 1 from public.podcasts
      where id = summaries.podcast_id
      and user_id = auth.uid()
    )
  );
```

### processing_jobs
```sql
create table public.processing_jobs (
  id uuid default uuid_generate_v4() primary key,
  podcast_id uuid references public.podcasts not null,
  status text check (status in ('queued', 'processing', 'completed', 'failed')) not null,
  progress int check (progress between 0 and 100) default 0,
  error_message text,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes
create index processing_jobs_podcast_id_idx on public.processing_jobs (podcast_id);
create index processing_jobs_status_idx on public.processing_jobs (status);
create index processing_jobs_created_at_idx on public.processing_jobs (created_at);

-- RLS Policies
alter table public.processing_jobs enable row level security;

create policy "Users can view own processing jobs"
  on public.processing_jobs for select
  using (
    exists (
      select 1 from public.podcasts
      where id = processing_jobs.podcast_id
      and user_id = auth.uid()
    )
  );
```

## Functions

### Reset Daily Credits
```sql
create or replace function public.reset_daily_credits()
returns void as $$
begin
  update public.users
  set daily_credits_used = 0,
      credits_reset_at = timezone('utc'::text, now())
  where date_trunc('day', credits_reset_at) < date_trunc('day', now());
end;
$$ language plpgsql security definer;
```

### Check Processing Limits
```sql
create or replace function public.check_processing_limits(user_id uuid)
returns boolean as $$
declare
  plan_limit int;
  current_usage int;
begin
  -- Get plan limit
  select
    case when plan_type = 'monthly' then 5
         when plan_type = 'lifetime' then 15
    end into plan_limit
  from public.users
  where id = user_id;

  -- Get current usage
  select daily_credits_used into current_usage
  from public.users
  where id = user_id;

  -- Reset if needed
  if date_trunc('day', credits_reset_at) < date_trunc('day', now()) then
    update public.users
    set daily_credits_used = 0,
        credits_reset_at = timezone('utc'::text, now())
    where id = user_id;
    return true;
  end if;

  -- Check limit
  return current_usage < plan_limit;
end;
$$ language plpgsql security definer;
```

## Triggers

### Update Timestamps
```sql
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger update_users_updated_at
  before update on public.users
  for each row execute function public.update_updated_at_column();

create trigger update_subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.update_updated_at_column();

create trigger update_podcasts_updated_at
  before update on public.podcasts
  for each row execute function public.update_updated_at_column();

create trigger update_summaries_updated_at
  before update on public.summaries
  for each row execute function public.update_updated_at_column();

create trigger update_processing_jobs_updated_at
  before update on public.processing_jobs
  for each row execute function public.update_updated_at_column();
```

### Increment Daily Credits
```sql
create or replace function public.increment_daily_credits()
returns trigger as $$
begin
  update public.users
  set daily_credits_used = daily_credits_used + 1
  where id = new.user_id;
  return new;
end;
$$ language plpgsql;

create trigger increment_credits_on_podcast_create
  after insert on public.podcasts
  for each row execute function public.increment_daily_credits();
```

## Common Queries

### Get User's Active Podcasts
```sql
select 
  p.*,
  s.content as summary,
  s.chapters,
  s.keywords
from public.podcasts p
left join public.summaries s on s.podcast_id = p.id
where p.user_id = auth.uid()
and p.status = 'completed'
and p.expires_at > now()
order by p.created_at desc;
```

### Get Processing Queue Status
```sql
select 
  p.title,
  j.status,
  j.progress,
  j.error_message,
  j.started_at,
  extract(epoch from (now() - j.started_at)) as processing_time_seconds
from public.processing_jobs j
join public.podcasts p on p.id = j.podcast_id
where p.user_id = auth.uid()
and j.status in ('queued', 'processing')
order by j.created_at asc;
```

### Get Subscription Status
```sql
select 
  u.plan_type,
  u.daily_credits_used,
  s.status as subscription_status,
  s.current_period_end,
  case 
    when u.plan_type = 'lifetime' then null
    else s.cancel_at
  end as cancellation_date
from public.users u
left join public.subscriptions s on s.user_id = u.id
where u.id = auth.uid();
``` 