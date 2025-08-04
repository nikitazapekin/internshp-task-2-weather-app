import { createAction } from "@reduxjs/toolkit";

export const fetchWeatherRequest = createAction("weather/fetchRequest");
export const fetchWeatherSuccess = createAction<{ title: string }>("weather/fetchSuccess");
export const fetchWeatherFailure = createAction<string>("weather/fetchFailure");
