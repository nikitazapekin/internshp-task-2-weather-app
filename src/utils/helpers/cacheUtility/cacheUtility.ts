import { CACHE_PREFIX, CACHE_TTL } from "@constants";
import type { CachedResponse } from "@types/cachedResponse";

import { LocalstorageUtils } from "../localstorageUtility/localstorageUtility";

export class CacheUtility {
  static getCacheKey(url: string, params: URLSearchParams): string {
    return `${CACHE_PREFIX}${url}?${params.toString()}`;
  }

  static getFromCache(key: string): unknown | null {
    try {
      const cached = LocalstorageUtils.getItem(key);

      if (!cached || typeof cached != "string") return null;

      const response: CachedResponse = JSON.parse(cached);
      const isExpired = Date.now() - response.timestamp >= CACHE_TTL;

      if (isExpired) {
        LocalstorageUtils.removeItem(key);

        return null;
      }

      return response.data;
    } catch {
      return null;
    }
  }
  static setToCache(key: string, data: unknown): void {
    try {
      const item: CachedResponse = {
        timestamp: Date.now(),
        data,
      };

      LocalstorageUtils.setItem(key, JSON.stringify(item));
    } catch {
      return null;
    }
  }
}
