// src/store/sagas/weatherSagas.ts
import type { FiveDayForecastResponse, OneCallResponse } from "@types/apiTypes";
import type { AxiosResponse } from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import WeatherService from "@api/weatherService";

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

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;

  if (typeof error === "string") return error;

  return "Unknown error occurred";
}

function* fetchWeeklyWeatherByCoords(
  action: ReturnType<typeof fetchWeeklyWeatherByCoordsRequest>
): SagaIterator {
  try {
    const response: AxiosResponse<OneCallResponse> = yield call(
      WeatherService.getWeeklyWeatherByCoordinats,
      action.payload
    );

    yield put(fetchWeeklyWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeeklyWeatherFailure(getErrorMessage(error)));
  }
}

function* fetchWeeklyWeatherByCity(
  action: ReturnType<typeof fetchWeeklyWeatherByCityRequest>
): SagaIterator {
  try {
    const response: AxiosResponse<OneCallResponse> = yield call(
      WeatherService.getWeeklyWeatherByCity,
      action.payload
    );

    yield put(fetchWeeklyWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeeklyWeatherFailure(getErrorMessage(error)));
  }
}

function* fetchHourlyWeatherByCoords(
  action: ReturnType<typeof fetchHourlyWeatherByCoordsRequest>
): SagaIterator {
  try {
    const response: AxiosResponse<FiveDayForecastResponse> = yield call(
      WeatherService.getHourlyWeatherByCoordinats,
      action.payload
    );

    yield put(fetchHourlyWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchHourlyWeatherFailure(getErrorMessage(error)));
  }
}

function* fetchHourlyWeatherByCity(
  action: ReturnType<typeof fetchHourlyWeatherByCityRequest>
): SagaIterator {
  try {
    const response: AxiosResponse<FiveDayForecastResponse> = yield call(
      WeatherService.getHourlyWeatherByCity,
      action.payload
    );

    yield put(fetchHourlyWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchHourlyWeatherFailure(getErrorMessage(error)));
  }
}

export function* WeatherSagas(): SagaIterator {
  yield takeLatest(fetchWeeklyWeatherByCoordsRequest.type, fetchWeeklyWeatherByCoords);
  yield takeLatest(fetchWeeklyWeatherByCityRequest.type, fetchWeeklyWeatherByCity);
  yield takeLatest(fetchHourlyWeatherByCoordsRequest.type, fetchHourlyWeatherByCoords);
  yield takeLatest(fetchHourlyWeatherByCityRequest.type, fetchHourlyWeatherByCity);
}
