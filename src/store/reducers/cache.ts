import { createReducer } from "@reduxjs/toolkit";
import type { CacheState } from "@types/cacheTypes";

import { clearCache, setCacheItem } from "@store/actions/cache";

const initialState: CacheState = {};

export const cacheReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCacheItem, (state, action) => {
      const { key, data } = action.payload;

      state[key] = {
        data,
        timestamp: Date.now(),
      };
    })
    .addCase(clearCache, () => initialState);
});
