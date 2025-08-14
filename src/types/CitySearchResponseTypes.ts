export interface CitySearchResponse {
  name: string;
  local_names?: {
    [language: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface CitySearchError {
  cod: string;
  message: string;
}

export type OpenWeatherGeoResponse = CitySearchResponse[] | CitySearchError;
