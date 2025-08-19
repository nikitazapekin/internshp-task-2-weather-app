export const WEATHER_SWITCH_TEST = {
  DESCRIPTION: "Test 7",
  IT: {
    DISPLAY_HOURLY_WEATHER: "display hourly weather after search",
  },
  CONSTANTS: {
    URLS: {
      BASE_URL: "http://localhost:4000",
      GEO_DIRECT_API: "**/geo/1.0/direct*",
      CURRENT_WEATHER_API: "**/data/2.5/weather*",
      FORECAST_WEATHER_API: "**/data/2.5/forecast*",
    },
    SELECTORS: {
      INPUT: "input",
      BUTTON: "button",
    },
    HTTP: {
      STATUS_OK: 200,
      METHOD_GET: "GET",
    },
    TEXT: {
      SEARCH: "Search",
      HOURLY: "Hourly",
      DAILY: "Daily",
      MOSCOW: "Moscow",
    },
    QUERY_PARAMS: {
      COUNT: "cnt",
      COUNT_VALUE: "8",
    },
    TIMEOUTS: {
      TIME: 10000,
    },
    ALIASES: {
      GET_CITIES: "getCities",
      GET_CURRENT_WEATHER: "getCurrentWeather",
      GET_FORECAST_WEATHER: "getForecastWeather",
    },
  },
};
