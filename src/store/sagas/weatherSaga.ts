import type { AxiosResponse } from "axios";
import axios from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchWeatherFailure,
  fetchWeatherRequest,
  fetchWeatherSuccess,
} from "../actions/weatherActions";

interface WeatherResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function* fetchWeather(): SagaIterator {
  try {
    const response: AxiosResponse<WeatherResponse> = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos/1"
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
