import { createReducer } from "@reduxjs/toolkit";
import type { FiveDayForecastResponse, OneCallResponse } from "@types/apiTypes";

import {
  fetchHourlyWeatherByCityRequest,
  fetchHourlyWeatherByCoordsRequest,
  fetchHourlyWeatherFailure,
  fetchHourlyWeatherSuccess,
  fetchWeeklyWeatherByCityRequest,
  fetchWeeklyWeatherByCoordsRequest,
  fetchWeeklyWeatherFailure,
  fetchWeeklyWeatherSuccess,
} from "../actions/weatherActions";

interface WeatherState<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
  lastRequestType: "city" | "coords" | null;
}

const createInitialWeatherState = <T>(): WeatherState<T> => ({
  loading: false,
  error: null,
  data: null,
  lastRequestType: null,
});

export const weeklyWeatherReducer = createReducer<WeatherState<OneCallResponse>>(
  createInitialWeatherState<OneCallResponse>(),
  (builder) => {
    builder
      .addCase(fetchWeeklyWeatherByCoordsRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.lastRequestType = "coords";
      })
      .addCase(fetchWeeklyWeatherByCityRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.lastRequestType = "city";
      })
      .addCase(fetchWeeklyWeatherSuccess, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeeklyWeatherFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);

export const hourlyWeatherReducer = createReducer<WeatherState<FiveDayForecastResponse>>(
  createInitialWeatherState<FiveDayForecastResponse>(),
  (builder) => {
    builder
      .addCase(fetchHourlyWeatherByCoordsRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.lastRequestType = "coords";
      })
      .addCase(fetchHourlyWeatherByCityRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.lastRequestType = "city";
      })
      .addCase(fetchHourlyWeatherSuccess, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHourlyWeatherFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);
