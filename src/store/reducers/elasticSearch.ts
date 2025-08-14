import { createReducer } from "@reduxjs/toolkit";
import type { CityCoordinats } from "@types/cityCoordinats";
import type { OpenWeatherGeoResponse } from "@types/CitySearchResponseTypes";

import {
  fetchCitiesFailure,
  fetchCitiesRequest,
  fetchCitiesSuccess,
  fetchClearCitiesRequest,
  fetchSuggestedCityCoordinats,
} from "@store/actions/elasticSearch";

interface CityState {
  data: OpenWeatherGeoResponse | null;
  loading: boolean;
  error: string | null;
  isElasticActive: boolean;
  coordinats: CityCoordinats;
}

const initialState: CityState = {
  data: null,
  loading: false,
  error: null,
  isElasticActive: false,
  coordinats: { latitude: null, longitude: null },
};

export const elasticSearch = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCitiesRequest, (state) => {
      state.loading = true;
      state.error = null;
      state.isElasticActive = true;
    })
    .addCase(fetchClearCitiesRequest, (state) => {
      state.loading = false;
      state.data = [];
      state.isElasticActive = false;
    })
    .addCase(fetchSuggestedCityCoordinats, (state, action) => {
      state.coordinats = action.payload;
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
