import { all } from "redux-saga/effects";

import { CalendarEvents } from "./calendarEvents";
import { CurrentWeather } from "./currentWeather";
import { Weather } from "./weather";

export default function* rootSaga() {
  yield all([CurrentWeather(), CalendarEvents(), Weather()]);
}
