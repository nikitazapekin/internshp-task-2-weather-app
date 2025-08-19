export const WEATHER_TRANSFORM_TEST = {
  DESCRIPTION: "transformWeatherData",
  TEST_DATA: {
    DATES: {
      DAY1: "2025-01-01T12:00:00",
      DAY1_ALT: "2025-01-01T15:00:00",
      DAY2: "2025-01-02T12:00:00",
    },
    WEATHER_CONDITIONS: {
      CLOUDS: { main: "Clouds", description: "cloudy" },
      RAIN: { main: "Rain", description: "rainy" },
      CLEAR: { main: "Clear", description: "sunny" },
      FOG: { main: "Fog", description: "foggy" },
      RUSSIAN: {
        RAIN: { main: "Rain", description: "дождь" },
        CLEAR: { main: "Clear", description: "ясно" },
        CLOUDS: { main: "Clouds", description: "пасмурно" },
        FOG: { main: "Fog", description: "туман" },
      },
    },
    TEMPERATURES: {
      LOW: 10,
      HIGH: 20,
      MID: 15,
    },
    PROBABILITIES: {
      SINGLE: 0.25,
      DOUBLE: 0.5,
    },
    EMPTY_CITY: {
      id: 0,
      name: "",
      coord: { lat: 0, lon: 0 },
      country: "",
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
  },
  IT: {
    SHOULD_GROUP_FORECAST_BY_DAY: "should group forecasts by day and calculate average temperature",
    SHOULD_CALCULATE_WEATHER_CONDITIONS:
      "should correctly calculate weather condition probabilities",
    SHOULD_HANDLE_MULTIPLE_LANGUAGES: "should handle multiple language weather descriptions",
    SHOULD_HANDLE_EMPTY_LIST: "should handle empty forecast list",
    SHOULD_HANDLE_WEATHER_CONDITIONS: "should correctly handle mixed weather conditions",
  },
};
