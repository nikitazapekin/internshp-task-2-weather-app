import { createAction } from "@reduxjs/toolkit";

export const searchElasticQuery = createAction<string>("search");
