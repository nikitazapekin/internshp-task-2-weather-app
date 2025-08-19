export const GEOLOCATION_IS_TURN_ON_MOCK = {
  CURRENT_WEATHER_MOCK: {
    coord: {
      lon: 37.6173,
      lat: 55.7558,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "ясно",
        icon: "01d",
      },
    ],
    main: {
      temp: 20.5,
      feels_like: 20.2,
      temp_min: 18.0,
      temp_max: 22.0,
      pressure: 1015,
      humidity: 60,
    },
    name: "Moscow",
  },

  FORECAST_WEATHER_MOCK: {
    list: [
      {
        dt: Date.now(),
        main: { temp: 20.5 },
        weather: [{ icon: "01d" }],
      },
    ],
  },

  CITY_DATA_MOCK: [
    {
      name: "Moscow",
      country: "RU",
      lat: 55.7558,
      lon: 37.6173,
      state: "Moscow",
    },
  ],
};
