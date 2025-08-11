import { combineReducers } from "redux";

import { elasticSearchReducer } from "./elasticSearchReducer";
import { calendarReducer } from "./googleCalendarReducer";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
  weatherReducer: weatherReducer,
  calendarReducer: calendarReducer,
});

export default rootReducer;
