import { combineReducers } from "redux";

import { currentCoordinatsReducer } from "./currentCoordinatsReducer";
import { elasticSearchReducer } from "./elasticSearchReducer";
import { calendarReducer } from "./googleCalendarReducer";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
  weatherReducer: weatherReducer,
  calendarReducer: calendarReducer,
  coordinatsReducer: currentCoordinatsReducer,
});

export default rootReducer;
