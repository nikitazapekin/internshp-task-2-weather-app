import { combineReducers } from "redux";

import { currentCity } from "./currentCity";
import { currentCoordinats } from "./currentCoordinats";
import { currentWeather } from "./currentWeather";
import { elasticSearch } from "./elasticSearch";
import { calendar } from "./googleCalendar";
import { weather } from "./weather";

const rootReducer = combineReducers({
  elasticSearch: elasticSearch,
  currentWeatherReducer: currentWeather,
  calendarReducer: calendar,
  coordinatsReducer: currentCoordinats,
  weatherReducer: weather,
  elasticReducer: elasticSearch,
  currentCitReducer: currentCity,
});

export default rootReducer;
