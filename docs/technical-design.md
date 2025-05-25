# Technical Design Document (TDD)

## API Endpoints

### Authentication Endpoints
```typescript
// POST /api/auth/signup
interface SignupRequest {
  email: string;
  password: string;
  plan: 'monthly' | 'lifetime';
}

// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

// POST /api/auth/logout
// No payload required
```

### Podcast Processing Endpoints
```typescript
// POST /api/podcasts/process
interface ProcessRequest {
  spotifyUrl: string;
  targetDuration: number; // in minutes (10-40)
  quality: 'standard' | 'high';
}

// GET /api/podcasts/status/:jobId
interface ProcessingStatus {
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number; // 0-100
  estimatedTimeRemaining?: number; // in seconds
  error?: string;
}

// GET /api/podcasts/list
interface PodcastList {
  podcasts: Array<{
    id: string;
    title: string;
    originalDuration: number;
    summaryDuration: number;
    processedAt: string;
    status: 'processing' | 'ready' | 'error';
  }>;
  pagination: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
}
```

## Processing Pipeline

### 1. Podcast Download & Validation
```typescript
interface PodcastMetadata {
  title: string;
  description: string;
  duration: number;
  url: string;
  format: string;
}

class PodcastDownloader {
  async validate(url: string): Promise<boolean>;
  async getMetadata(url: string): Promise<PodcastMetadata>;
  async download(url: string): Promise<string>; // Returns local file path
}
```

### 2. Audio Processing
```typescript
interface AudioSegment {
  start: number;
  end: number;
  speaker: string;
  confidence: number;
  text: string;
}

class AudioProcessor {
  async transcribe(filepath: string): Promise<AudioSegment[]>;
  async extractSegments(
    filepath: string, 
    segments: AudioSegment[]
  ): Promise<string[]>;
  async concatenate(
    segments: string[], 
    targetDuration: number
  ): Promise<string>;
}
```

### 3. Content Analysis
```typescript
interface SegmentImportance {
  segment: AudioSegment;
  score: number; // 1-10
  keywords: string[];
  topics: string[];
}

class ContentAnalyzer {
  async analyzeImportance(
    segments: AudioSegment[]
  ): Promise<SegmentImportance[]>;
  async generateSummary(
    segments: AudioSegment[]
  ): Promise<string>;
  async extractChapters(
    segments: AudioSegment[]
  ): Promise<Chapter[]>;
}
```

## Storage Strategy

### Hot Storage (Redis + Local SSD)
```typescript
interface CacheConfig {
  maxSize: number; // in GB
  maxAge: number; // in seconds
  cleanupInterval: number; // in seconds
}

class HotStorage {
  async store(key: string, data: Buffer): Promise<void>;
  async retrieve(key: string): Promise<Buffer>;
  async exists(key: string): Promise<boolean>;
  async cleanup(): Promise<void>;
}
```

### Cold Storage (S3/R2)
```typescript
interface StorageConfig {
  region: string;
  bucket: string;
  prefix: string;
}

class ColdStorage {
  async store(key: string, data: Buffer): Promise<void>;
  async retrieve(key: string): Promise<Buffer>;
  async move(fromKey: string, toKey: string): Promise<void>;
  async delete(key: string): Promise<void>;
}
```

## Queue System

### Job Queue
```typescript
interface Job {
  id: string;
  type: 'process' | 'analyze' | 'concatenate';
  status: 'queued' | 'processing' | 'completed' | 'failed';
  data: any;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

class QueueManager {
  async add(job: Partial<Job>): Promise<string>;
  async process(job: Job): Promise<void>;
  async getStatus(jobId: string): Promise<Job>;
  async cleanup(): Promise<void>;
}
```

## Error Handling

### Global Error Types
```typescript
enum ErrorType {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  PROCESSING_ERROR = 'PROCESSING_ERROR',
  STORAGE_ERROR = 'STORAGE_ERROR',
  AUTH_ERROR = 'AUTH_ERROR',
  RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR'
}

interface AppError extends Error {
  type: ErrorType;
  statusCode: number;
  details?: any;
}
```

### Error Handlers
```typescript
class ErrorHandler {
  static handle(error: AppError): Response;
  static log(error: AppError): void;
  static notify(error: AppError): void;
}
```

## Security Measures

### Rate Limiting
```typescript
interface RateLimitConfig {
  window: number; // in seconds
  max: number; // max requests per window
  blacklistThreshold: number;
}

class RateLimiter {
  async check(ip: string): Promise<boolean>;
  async increment(ip: string): Promise<void>;
  async blacklist(ip: string): Promise<void>;
}
```

### Input Validation
```typescript
interface ValidationRules {
  [key: string]: {
    type: string;
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
  };
}

class InputValidator {
  static validate(data: any, rules: ValidationRules): boolean;
  static sanitize(data: any): any;
}
```

## Performance Optimizations

### Caching Strategy
```typescript
interface CacheStrategy {
  type: 'memory' | 'redis' | 'filesystem';
  ttl: number;
  maxSize: number;
}

class CacheManager {
  async get(key: string): Promise<any>;
  async set(key: string, value: any): Promise<void>;
  async invalidate(key: string): Promise<void>;
  async cleanup(): Promise<void>;
}
```

### Resource Management
```typescript
interface ResourceLimits {
  maxConcurrent: number;
  maxMemory: number;
  timeout: number;
}

class ResourceManager {
  async allocate(jobId: string): Promise<void>;
  async release(jobId: string): Promise<void>;
  async monitor(): Promise<void>;
}
```

## Third-Party Integrations

### OpenAI Integration
```typescript
interface WhisperConfig {
  model: string;
  language: string;
  temperature: number;
}

class WhisperClient {
  async transcribe(audio: Buffer): Promise<AudioSegment[]>;
  async detectLanguage(audio: Buffer): Promise<string>;
}
```

### Spotify Integration
```typescript
interface SpotifyConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

class SpotifyClient {
  async getEpisodeMetadata(url: string): Promise<PodcastMetadata>;
  async getStreamUrl(episodeId: string): Promise<string>;
  async validateUrl(url: string): Promise<boolean>;
}
```

### Payment Integration (Stripe)
```typescript
interface StripeConfig {
  publicKey: string;
  secretKey: string;
  webhookSecret: string;
}

class PaymentProcessor {
  async createSubscription(
    customerId: string, 
    plan: 'monthly' | 'lifetime'
  ): Promise<string>;
  async handleWebhook(event: any): Promise<void>;
  async cancelSubscription(subscriptionId: string): Promise<void>;
}
``` 