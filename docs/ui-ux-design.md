# UI/UX Design Specification

## Design System

### Typography
```css
/* Primary Font: Inter */
--font-primary: 'Inter', -apple-system, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Color Palette
```css
/* Brand Colors */
--brand-primary: #6366F1;    /* Indigo */
--brand-secondary: #8B5CF6;  /* Purple */
--brand-accent: #F43F5E;     /* Rose */

/* UI Colors */
--ui-background: #FFFFFF;
--ui-foreground: #111827;
--ui-muted: #6B7280;
--ui-border: #E5E7EB;

/* Feedback Colors */
--feedback-success: #10B981;
--feedback-error: #EF4444;
--feedback-warning: #F59E0B;
--feedback-info: #3B82F6;

/* Gradients */
--gradient-primary: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
```

### Spacing
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## Components

### 1. Navigation Bar
```jsx
<nav className="sticky top-0 z-50 bg-white border-b">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between h-16">
      <Logo />
      <MainNav />
      <UserMenu />
    </div>
  </div>
</nav>
```

### 2. Podcast Input Form
```jsx
<form className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
  <URLInput 
    placeholder="Paste Spotify podcast URL"
    validation={spotifyURLPattern}
  />
  <DurationSlider 
    min={10} 
    max={40} 
    step={5}
  />
  <SubmitButton />
</form>
```

### 3. Processing Status Card
```jsx
<div className="bg-white rounded-lg shadow p-6">
  <StatusIcon type={status} />
  <ProgressBar 
    value={progress} 
    animated={true}
  />
  <TimeRemaining seconds={timeLeft} />
  <StatusMessage />
</div>
```

### 4. Audio Player
```jsx
<div className="fixed bottom-0 w-full bg-white border-t">
  <div className="max-w-7xl mx-auto p-4">
    <AudioControls />
    <ProgressBar />
    <TimeDisplay />
    <PlaybackSpeed />
  </div>
</div>
```

### 5. Summary View
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <AudioSection>
    <WaveformVisual />
    <ChapterMarkers />
  </AudioSection>
  <TextSection>
    <TextSummary />
    <KeyPoints />
  </TextSection>
</div>
```

## Page Layouts

### 1. Dashboard Layout
```jsx
<div className="min-h-screen bg-gray-50">
  <Navigation />
  <main className="max-w-7xl mx-auto py-6 px-4">
    <header className="mb-8">
      <DashboardStats />
    </header>
    <section className="grid gap-6">
      <ProcessingQueue />
      <CompletedEpisodes />
    </section>
  </main>
</div>
```

### 2. Episode View Layout
```jsx
<div className="min-h-screen bg-gray-50">
  <Navigation />
  <main className="max-w-7xl mx-auto py-6 px-4">
    <EpisodeHeader />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <AudioPlayer className="lg:col-span-2" />
      <TextSummary />
    </div>
  </main>
</div>
```

## Responsive Design

### Breakpoints
```css
/* Tailwind Default Breakpoints */
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Mobile Adaptations
1. Single column layouts on small screens
2. Collapsible navigation menu
3. Bottom sheet for audio player
4. Simplified controls
5. Touch-friendly tap targets (min 44px)

## Loading States

### 1. Skeleton Loaders
```jsx
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4" />
  <div className="space-y-3 mt-4">
    <div className="h-4 bg-gray-200 rounded" />
    <div className="h-4 bg-gray-200 rounded" />
    <div className="h-4 bg-gray-200 rounded" />
  </div>
</div>
```

### 2. Progress Indicators
```jsx
<div className="relative">
  <div className="overflow-hidden h-2 bg-gray-200 rounded">
    <div 
      className="animate-progress bg-brand-primary h-full"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
```

## Accessibility

### ARIA Labels
```jsx
<button
  aria-label="Play episode"
  aria-pressed={isPlaying}
  onClick={togglePlay}
>
  {isPlaying ? <PauseIcon /> : <PlayIcon />}
</button>
```

### Keyboard Navigation
1. Logical tab order
2. Visible focus states
3. Skip navigation link
4. Keyboard shortcuts for player

### Color Contrast
- All text meets WCAG 2.1 AA standards
- Interactive elements have sufficient contrast
- Focus indicators are visible

## Animations

### Transitions
```css
/* Default Transition */
--transition-default: all 0.2s ease-in-out;

/* Specific Transitions */
--transition-transform: transform 0.2s ease-in-out;
--transition-opacity: opacity 0.2s ease-in-out;
```

### Micro-interactions
1. Button hover/active states
2. Form field focus
3. Loading spinners
4. Progress bars
5. Audio visualizer

## Error States

### 1. Form Validation
```jsx
<div className="space-y-2">
  <Input
    error={errors.url}
    aria-invalid={errors.url ? 'true' : 'false'}
  />
  {errors.url && (
    <p className="text-sm text-feedback-error">
      {errors.url.message}
    </p>
  )}
</div>
```

### 2. Processing Errors
```jsx
<div className="rounded-lg bg-red-50 p-4">
  <div className="flex">
    <ErrorIcon className="text-feedback-error" />
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">
        Processing Failed
      </h3>
      <div className="mt-2 text-sm text-red-700">
        <p>{error.message}</p>
      </div>
    </div>
  </div>
</div>
```

## Success States

### 1. Completion Messages
```jsx
<div className="rounded-lg bg-green-50 p-4">
  <div className="flex">
    <CheckIcon className="text-feedback-success" />
    <div className="ml-3">
      <h3 className="text-sm font-medium text-green-800">
        Processing Complete
      </h3>
      <div className="mt-2 text-sm text-green-700">
        <p>Your summary is ready!</p>
      </div>
    </div>
  </div>
</div>
```

### 2. Progress Completion
```jsx
<div className="mt-4 flex items-center justify-between">
  <CheckIcon className="text-feedback-success" />
  <span className="text-sm text-gray-500">
    Processed in {duration}
  </span>
</div>
``` 