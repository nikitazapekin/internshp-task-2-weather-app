import { combineReducers } from "redux";

import { elasticSearchReducer } from "./elasticSearchReducer";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
  weatherReducer: weatherReducer,
});

export default rootReducer;
