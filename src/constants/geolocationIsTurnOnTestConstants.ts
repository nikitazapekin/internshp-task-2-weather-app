export const GEOLOCATION_IS_TURN_ON_TEST = {
  DESCRIPTION: "Test 5 - User approved geolocation",
  CONSTANTS: {
    URLS: {
      BASE_URL: "http://localhost:4000",
      WEATHER_API: "**/data/2.5/weather*",
      FORECAST_API: "**/data/2.5/forecast*",
      REVERSE_GEO_API: "**/geo/1.0/reverse*",
    },
    ALIASES: {
      GET_CURRENT_WEATHER: "getCurrentWeatherByCoords",
      GET_FORECAST_WEATHER: "getForecastWeatherByCoords",
      GET_CITY_BY_COORDS: "getCityByCoords",
    },
    GEOLOCATION: {
      LATITUDE: 55.7558,
      LONGITUDE: 37.6173,
      ACCURACY: 10,
      DELAY: 100,
    },
    HTTP: {
      STATUS_OK: 200,
    },
    MOCK_DATA: {
      CURRENT_WEATHER: "CURRENT_WEATHER_MOCK",
      FORECAST_WEATHER: "FORECAST_WEATHER_MOCK",
      CITY_DATA: "CITY_DATA_MOCK",
    },
  },
};
