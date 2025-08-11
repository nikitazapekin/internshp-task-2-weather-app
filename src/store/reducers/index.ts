import { combineReducers } from "redux";

import { currentCoordinatsReducer } from "./currentCoordinatsReducer";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { elasticSearchReducer } from "./elasticSearchReducer";
import { calendarReducer } from "./googleCalendarReducer";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
  currentWeatherReducer: currentWeatherReducer,
  calendarReducer: calendarReducer,
  coordinatsReducer: currentCoordinatsReducer,
});

export default rootReducer;
