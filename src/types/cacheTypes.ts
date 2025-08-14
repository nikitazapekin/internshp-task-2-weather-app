export interface CacheItem {
  data: unknown;
  timestamp: number;
}

export interface CacheState {
  [key: string]: CacheItem;
}
