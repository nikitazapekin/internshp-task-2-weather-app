import type { RootState } from "../";

export const selectElasticSearch = (state: RootState) => state.elasticSearch.query;
