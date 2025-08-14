import { createReducer } from "@reduxjs/toolkit";

import { searchElasticQuery } from "@store/actions/elasticSearch";

interface ElasticSearchState {
  query: string;
}

const initialState: ElasticSearchState = {
  query: "",
};

export const elasticSearch = createReducer(initialState, (builder) => {
  builder.addCase(searchElasticQuery, (state, action) => {
    state.query = action.payload;
  });
});
