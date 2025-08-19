export const BOTTOM_OF_THE_BANNER_MOCK = {
  WEATHER_DATA: {
    coord: { lon: 30, lat: 59 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 50 },
    visibility: 10000,
    wind: { speed: 3, deg: 180 },
    clouds: { all: 0 },
    dt: 162,
    sys: { country: "RU", sunrise: 162, sunset: 162 },
    timezone: 108,
    id: 498817,
    name: "Saint Petersburg",
    cod: 200,
  },

  RESIZE: {
    DESKTOP: { isMobileView: false },
    MOBILE: { isMobileView: true },
  },
};
