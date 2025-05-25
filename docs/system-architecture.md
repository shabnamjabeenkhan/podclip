# System Architecture

```mermaid
graph TD
    User[User Browser] --> Frontend[Next.js Frontend]
    Frontend --> API[API Routes]
    API --> Auth[Supabase Auth]
    API --> Queue[Processing Queue]
    Queue --> Processor[Podcast Processor]
    
    Processor --> Whisper[OpenAI Whisper]
    Processor --> GPT4[GPT-4 Analysis]
    Processor --> FFmpeg[FFmpeg Audio]
    
    Processor --> HotStorage[Hot Storage - SSD]
    Processor --> ColdStorage[Cold Storage - Object Store]
    
    subgraph Database
        Auth --> DB[(Supabase DB)]
        API --> DB
    end
    
    subgraph Storage
        HotStorage
        ColdStorage
    end
```

This diagram shows:
1. User interaction flow
2. Processing pipeline
3. Storage strategy
4. Database connections

When we start coding, we'll implement each of these components in actual code. 