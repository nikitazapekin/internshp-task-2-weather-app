export const BOTTOM_BANNER_TEST = {
  DESCRIPTION: "BottomOfTheBanner Component",
  IT: {
    RENDERS_SPINNER: "renders spinner when loading",
    RETURNS_NULL: "returns null when no coordinates and geolocation not denied",
    RENDERS_GEOLOCATION_OFF: "renders GeolocationIsTurnOff when geolocation denied and no search",
    RENDERS_DESKTOP_VIEW: "renders TodayWeather and Swiper in desktop view with weather data",
    RENDERS_MOBILE_VIEW:
      "renders TodayWeather and WeatherCardGrid in mobile view with weather data",
  },
  CONSTANTS: {
    TEST_IDS: {
      SPINNER: "spinner",
    },
    TEXT: {
      GEOLOCATION_OFF: "Geolocation is turned off",
      TODAY_WEATHER: "TodayWeather",
      SWIPER: "Swiper",
      WEATHER_CARD_GRID: "WeatherCardGrid",
    },
  },

  SELECTORS: {
    SELECT_WEATHER: "selectWeather",
    SELECT_CURRENT_COORDINATS: "selectCurrentCoordinats",
    SELECT_CITIES_SUGGESTIONS: "selectCitiesSuggestions",
  },
};
