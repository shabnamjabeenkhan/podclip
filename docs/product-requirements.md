# Product Requirements Document (PRD)

## Introduction
### Problem Statement
Time-constrained individuals struggle to keep up with long-form podcasts (1-2 hours), leading to information overload and reduced content consumption.

### Product Vision
Podclip transforms long podcasts into digestible summaries while preserving the original speaker voices, helping users stay informed in less time.

## Objectives & Goals
1. Primary Goal
   - Reduce podcast listening time by 75% while maintaining key content
   - Preserve original speaker voices and audio quality

2. Success Metrics
   - User retention rate > 80%
   - Processing completion rate > 99%
   - User satisfaction score > 4.5/5
   - Average time saved per user > 5 hours/month

## Target Users & Roles

### Primary Users
1. **Knowledge Workers**
   - Professionals seeking efficient information consumption
   - Limited time for full podcast episodes
   - Value high-quality summaries

2. **Students/Researchers**
   - Need to process multiple information sources
   - Focus on specific topic segments
   - Require accurate content preservation

3. **Content Creators**
   - Process multiple episodes for research
   - Extract key segments for content creation
   - Need high-quality audio output

## Core Features (MVP)

### 1. Podcast Processing
- **Input Methods**
  - Spotify URL submission
  - Processing status indicator
  - Customizable summary length (10-40 minutes)

- **Output Formats**
  - Condensed audio with original voices
  - Written summary of key points
  - Chapter markers for navigation

### 2. User Dashboard
- **Processing Management**
  - Queue status display
  - Processing history
  - Daily quota tracking

- **Content Access**
  - Audio player with speed control
  - Written summary view
  - Download capabilities

### 3. Account Management
- **Subscription Tiers**
  - Monthly (£5.99)
    - 5 episodes/day
    - 60-day storage
    - 10-25 minute summaries
  
  - Lifetime (£29.99)
    - 15 episodes/day
    - Unlimited storage
    - 10-40 minute summaries

## Future Scope
Features planned for post-MVP releases:

1. **Enhanced Processing**
   - Multiple language support
   - Batch processing
   - Custom AI models for better accuracy

2. **Content Features**
   - Favorite segments
   - Share clips
   - Collaborative playlists

3. **Integration**
   - More podcast platforms
   - Mobile apps
   - API access

## User Journey

### New User Flow
1. Landing page visit
2. Sign up/payment
3. Dashboard introduction
4. First podcast submission
5. View processing status
6. Access completed summary

### Regular User Flow
1. Login to dashboard
2. Submit new podcast
3. Queue management
4. Access processed content
5. Download/share options

## Tech Stack
- **Frontend**: Next.js, React
- **Backend**: Node.js
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Storage**: 
  - Hot: SSD Storage
  - Cold: Object Storage
- **Processing**:
  - OpenAI Whisper API
  - GPT-4 API
  - FFmpeg
- **Deployment**: Vercel

## Success Criteria
1. Technical
   - Processing time < 10 minutes
   - 99.9% uptime
   - < 1s page load time

2. Business
   - 20% monthly growth
   - < 5% churn rate
   - Positive unit economics

3. User
   - > 90% summary accuracy
   - < 2% error rate
   - > 4.5/5 user satisfaction 