import { createAction } from "@reduxjs/toolkit";
import type { CityParams } from "@types/apiTypes";
import type { OpenWeatherGeoResponse } from "@types/CitySearchResponseTypes";

export const fetchCitiesRequest = createAction<CityParams>("city/fetchCitiesRequest");
export const fetchClearCitiesRequest = createAction<CityParams>("city/fetchClearCitiesRequest");
export const fetchCitiesSuccess = createAction<OpenWeatherGeoResponse>("city/fetchCitiesSuccess");
export const fetchCitiesFailure = createAction<string>("city/fetchCitiesFailure");
