import { createReducer } from "@reduxjs/toolkit";
import type { OpenWeatherGeoResponse } from "@types/CitySearchResponseTypes";

import {
  fetchCitiesFailure,
  fetchCitiesRequest,
  fetchCitiesSuccess,
  fetchClearCitiesRequest,
} from "@store/actions/elasticSearch";

interface CityState {
  data: OpenWeatherGeoResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: CityState = {
  data: null,
  loading: false,
  error: null,
};

export const elasticSearch = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCitiesRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchClearCitiesRequest, (state, action) => {
      state.loading = false;
      state.data = [];
    })
    .addCase(fetchCitiesSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchCitiesFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
