import { createReducer } from "@reduxjs/toolkit";
import {
  fetchWeatherFailure,
  fetchWeatherRequest,
  fetchWeatherSuccess,
} from "@store/selectors/weatherSelectors";

interface WeatherState {
  loading: boolean;
  error: string | null;
  title: string | null;
}

const initialState: WeatherState = {
  loading: false,
  error: null,
  title: null,
};

export const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchWeatherRequest, (state) => {
      console.log(2, state.title);
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchWeatherSuccess, (state, action) => {
      state.loading = false;
      state.title = action.payload.title;
    })
    .addCase(fetchWeatherFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
