export const ELASTIC_HOOK_TEST = {
  DESCRIPTION: "useElastic hook",
  IT: {
    RETURNS_INITIAL_VALUES: "should return initial values and functions",
    FORMATS_CITY_NAME: "should format city name correctly",
  },
  MOCKS: {
    DISPATCH: (typeof jest !== "undefined" ? jest.fn() : () => {}) as jest.Mock,
    SUGGESTIONS: {
      data: [
        {
          name: "Moscow",
          state: "Moscow",
          country: "Russia",
          lat: 55.7558,
          lon: 37.6176,
        },
      ],
      coordinats: { latitude: 55.7558, longitude: 37.6176 },
      loading: false,
    },
    CITY: {
      name: "Moscow",
      state: "Moscow",
      country: "Russia",
      lat: 55.7558,
      lon: 37.6176,
    },
    FORMATTED_CITY_NAME: "Moscow, Moscow, Russia",
  },
  INITIAL_VALUES: {
    INPUT_VALUE: "",
    SHOW_SUGGESTIONS: false,
  },
};
