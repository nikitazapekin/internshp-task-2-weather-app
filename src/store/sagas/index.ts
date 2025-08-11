import { all } from "redux-saga/effects";

import { CalendarEventsSaga } from "./calendarEventsSaga";
import { CurrentWeatherSaga } from "./currentWeatherSaga";

export default function* rootSaga() {
  yield all([CurrentWeatherSaga(), CalendarEventsSaga()]);
}
