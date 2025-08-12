import { all } from "redux-saga/effects";

import { CalendarEventsSaga } from "./calendarEventsSaga";
import { CurrentWeatherSaga } from "./currentWeatherSaga";
import { WeatherSagas } from "./weatherSagas";

export default function* rootSaga() {
  yield all([CurrentWeatherSaga(), CalendarEventsSaga(), WeatherSagas()]);
}
