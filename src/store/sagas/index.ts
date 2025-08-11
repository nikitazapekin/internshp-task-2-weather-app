import { all } from "redux-saga/effects";

import { CalendarEventsSaga } from "./calendarEventsSaga";
import { WeatherSaga } from "./weatherSaga";

export default function* rootSaga() {
  yield all([WeatherSaga(), CalendarEventsSaga()]);
}
