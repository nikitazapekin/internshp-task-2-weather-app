import type { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import {
  fetchHourlyWeatherByCityRequest,
  fetchHourlyWeatherByCoordsRequest,
  fetchWeeklyWeatherByCityRequest,
  fetchWeeklyWeatherByCoordsRequest,
} from "../actions/weatherActions";

import { fetchHourlyWeatherByCity } from "./hourlyWeatherByCitySaga";
import { fetchHourlyWeatherByCoords } from "./hourlyWeatherByCoordinatsSaga";
import { fetchWeeklyWeatherByCity } from "./weeklyWeatherByCitySaga";
import { fetchWeeklyWeatherByCoords } from "./weeklyWeatherByCoordinatsSaga";

export function* WeatherSagas(): SagaIterator {
  yield takeLatest(fetchWeeklyWeatherByCoordsRequest.type, fetchWeeklyWeatherByCoords);
  yield takeLatest(fetchWeeklyWeatherByCityRequest.type, fetchWeeklyWeatherByCity);
  yield takeLatest(fetchHourlyWeatherByCoordsRequest.type, fetchHourlyWeatherByCoords);
  yield takeLatest(fetchHourlyWeatherByCityRequest.type, fetchHourlyWeatherByCity);
}
