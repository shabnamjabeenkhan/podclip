# Podclip: AI-Powered Podcast Summarization

## Overview
Podclip is a time-saving tool that automatically converts long podcasts (1-2 hours) into concise 10-40 minute versions while preserving the original speaker voices. It's designed for busy professionals, students, and podcast enthusiasts who want to stay informed without spending hours listening.

## Core Value Proposition
Save 75% of your podcast listening time while getting all the key insights and memorable moments.

## Business Model
- Monthly subscription: £5.99/month
  - 5 episodes per day
  - 60-day episode storage
  - Customizable summary length (10-25 minutes)
  - Perfect for casual listeners
- Lifetime access: £29.99 one-time payment
  - 15 episodes per day
  - Unlimited episode storage
  - Extended summary options (10-40 minutes)
  - Ideal for power users and content creators
- Target market: Knowledge workers, students, and time-conscious podcast listeners
- Initial focus: English language podcasts only
- No free tier for MVP to maintain service quality

## MVP Core Features

1. **Podcast Processing via In-App Podcast Search**
   - Users can search for any podcast directly within the app
   - The app accesses public podcast metadata and RSS feed data for search and selection
   - System processes the selected episode and generates:
     - A condensed audio version (length based on plan)
     - A written summary of key points
   - Processing status updates in real-time
   - Results delivered via dashboard
   - Daily processing limits based on plan

2. **User Dashboard**
   - View processing status
   - Access processed podcasts
   - Download or stream condensed audio
   - Read written summaries
   - Basic account management
   - Summary length customization
   - Processing quota display
   - Storage management (for monthly users)

## Technical Implementation

1. **Audio Processing Pipeline**
   - **Transcription**: OpenAI Whisper API
     - High accuracy for podcast audio
     - Built-in speaker diarization
     - Automatic timestamp generation
     - Cost-effective ($0.006/minute)

2. **Content Analysis**
   - **GPT-4 for intelligent processing**
     - Key segment identification
     - Summary generation
     - Importance scoring (1-10)
     - Chapter marker generation

3. **Audio Engineering**
   - **FFmpeg for audio manipulation**
     - Segment extraction
     - Clip concatenation
     - Smooth transitions (fade in/out)
     - Audio normalization

4. **Podcast Source Integration**
   - **MVP Phase**: Direct MP3 download
   - **Future**: Full Spotify API integration
   - Episode caching for cost optimization

## Processing Architecture

1. **Queue System**
   - Asynchronous processing queue for multiple episodes
   - Real-time status updates
   - Priority processing for monthly subscribers
   - Estimated completion time display
   - Auto-retry on failure

2. **Storage Strategy**
   - **Hot Storage (Fast Access)**
     - Recently processed episodes
     - Currently playing episodes
     - Frequently accessed content
     - Using high-speed SSD storage
   
   - **Cold Storage (Cost Efficient)**
     - Older episodes (>30 days)
     - Rarely accessed content
     - Lifetime plan archives
     - Using cheaper object storage
   
   - **Automatic Migration**
     - Move episodes to cold storage after 30 days
     - Instant restoration when needed
     - Transparent to users

3. **Processing Optimization**
   - Parallel processing of multiple episodes
   - Caching of popular podcast episodes
   - Resource allocation based on user plan
   - Auto-scaling based on queue size

## Fair Usage Policy

1. **Processing Limits**
   - Monthly Plan:
     - 5 episodes per day
     - No duplicate processing of same episode
     - 3 concurrent processing requests
   
   - Lifetime Plan:
     - 10 episodes per day
     - No duplicate processing within 7 days
     - 5 concurrent processing requests

2. **Storage Management**
   - Monthly Plan:
     - 60-day storage limit
     - Auto-deletion warning at 55 days
     - Option to download before deletion
   
   - Lifetime Plan:
     - Unlimited storage duration
     - Automatic move to cold storage
     - No deletion of processed episodes

3. **Anti-Abuse Measures**
   - Rate limiting on API requests
   - Bot detection and prevention
   - Account sharing detection
   - IP-based request monitoring 