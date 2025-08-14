import { ERROR_CONSTANTS } from "@constants/errors";
import type { OpenWeatherGeoResponse } from "@types/CitySearchResponseTypes";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import WeatherService from "@api/weatherService";
import {
  fetchCurrentCityFailure,
  fetchCurrentCityRequest,
  fetchCurrentCitySuccess,
} from "@store/actions/currentCity";

function* fetchCurrentCity(action: ReturnType<typeof fetchCurrentCityRequest>): SagaIterator {
  try {
    const { latitude, longitude } = action.payload;

    const response: { data: OpenWeatherGeoResponse } = yield call(
      [WeatherService, "getCityNameByCoordinats"],
      { latitude, longitude } as CurrentCoordinatsState
    );

    if (Array.isArray(response.data) && response.data.length > 0) {
      const cityName = response.data[0].name;

      yield put(fetchCurrentCitySuccess(cityName));
    } else {
      yield put(fetchCurrentCityFailure(ERROR_CONSTANTS.NO_CITY_FOUND));
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : ERROR_CONSTANTS.UNKNOWN_ERROR;

    yield put(fetchCurrentCityFailure(message));
  }
}

export function* CurrentCity(): SagaIterator {
  yield takeLatest(fetchCurrentCityRequest.type, fetchCurrentCity);
}
