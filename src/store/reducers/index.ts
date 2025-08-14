import { combineReducers } from "redux";

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
});

export default rootReducer;
