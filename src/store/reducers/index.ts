import { combineReducers } from "redux";

import { currentCoordinatsReducer } from "./currentCoordinatsReducer";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { elasticSearchReducer } from "./elasticSearchReducer";
import { calendarReducer } from "./googleCalendarReducer";
import { weatherReducer } from "./weatherReducers";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
  currentWeatherReducer: currentWeatherReducer,
  calendarReducer: calendarReducer,
  coordinatsReducer: currentCoordinatsReducer,
  weatherReducer: weatherReducer,
});

export default rootReducer;
