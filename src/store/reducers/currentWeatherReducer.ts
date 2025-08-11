import { createReducer } from "@reduxjs/toolkit";
import type { CurrentWeatherResponse } from "@types/apiTypes";

import {
  fetchWeatherByCityRequest,
  fetchWeatherByCoordsRequest,
  fetchWeatherFailure,
  fetchWeatherSuccess,
} from "../actions/currentWeatherActions";

interface WeatherState {
  loading: boolean;
  error: string | null;
  data: CurrentWeatherResponse | null;
  lastRequestType: "city" | "coords" | null;
}

const initialState: WeatherState = {
  loading: false,
  error: null,
  data: null,
  lastRequestType: null,
};

export const currentWeatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchWeatherByCoordsRequest, (state) => {
      state.loading = true;
      state.error = null;
      state.lastRequestType = "coords";
    })
    .addCase(fetchWeatherByCityRequest, (state) => {
      state.loading = true;
      state.error = null;
      state.lastRequestType = "city";
    })
    .addCase(fetchWeatherSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchWeatherFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
