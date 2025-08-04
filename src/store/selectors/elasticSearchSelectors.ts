import type { RootState } from "../index";

export const selectElasticSearch = (state: RootState) => state.elasticSearch.query;
