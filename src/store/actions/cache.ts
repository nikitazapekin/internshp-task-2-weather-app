import { createAction } from "@reduxjs/toolkit";
//import type { CacheItem } from "@types/cacheTypes";

export const setCacheItem = createAction<{ key: string; data: any }>("cache/setItem");
export const getCacheItem = createAction<string>("cache/getItem");
export const clearCache = createAction("cache/clear");
