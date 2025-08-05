import WeatherService from "@api/weatherService";
import type { WeatherResponseType } from "@interfaces/weatherResponseType";
import {
  fetchWeatherFailure,
  fetchWeatherRequest,
  fetchWeatherSuccess,
} from "@store/actions/weatherActions";
import type { AxiosResponse } from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchWeather(): SagaIterator {
  try {
    const response: AxiosResponse<WeatherResponseType> = yield call(
      WeatherService.getWeatherForWeek
    );

    yield put(fetchWeatherSuccess({ title: response.data.title }));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    yield put(fetchWeatherFailure(message));
  }
}

export function* WeatherSaga(): SagaIterator {
  yield takeLatest(fetchWeatherRequest.type, fetchWeather);
}
