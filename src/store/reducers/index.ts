import { combineReducers } from "redux";

import { elasticSearchReducer } from "./elasticSearchReducer";

const rootReducer = combineReducers({
  elasticSearch: elasticSearchReducer,
});

export default rootReducer;
