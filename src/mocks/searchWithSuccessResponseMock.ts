export const MOCK_RESPONSE = [
  {
    name: "London",
    country: "GB",
    lat: 51.5074,
    lon: -0.1278,
    state: "England",
    local_names: {
      en: "London",
      ru: "Лондон",
    },
  },
];

export const MOCK_CURRENT_WEATHER = {
  coord: {
    lon: -0.1276,
    lat: 51.5073,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "пасмурно",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 20.03,
    feels_like: 19.79,
    temp_min: 19.47,
    temp_max: 21.08,
    pressure: 1018,
    humidity: 65,
    sea_level: 1018,
    grnd_level: 1014,
  },
};
