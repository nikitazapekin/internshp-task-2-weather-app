import { createAction } from "@reduxjs/toolkit";

interface WeatherSuccessPayload {
  title: string;
}

export const fetchWeatherRequest = createAction("weather/fetchRequest");
export const fetchWeatherSuccess = createAction<WeatherSuccessPayload>("weather/fetchSuccess");
export const fetchWeatherFailure = createAction<string>("weather/fetchFailure");
