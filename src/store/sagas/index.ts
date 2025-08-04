import { all } from "redux-saga/effects";

import { WeatherSaga } from "./weatherSaga";

export default function* rootSaga() {
  yield all([WeatherSaga()]);
}
