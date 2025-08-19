export const GEOLOCATION_MOCK = {
  COORDS: {
    latitude: 55.7558,
    longitude: 37.6176,
  },
  ERRORS: {
    PERMISSION_DENIED: {
      code: 1,
      message: "User denied Geolocation",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    },
    POSITION_UNAVAILABLE: {
      code: 2,
      message: "Position unavailable",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    },
  },
  ERROR_MESSAGES: {
    PERMISSION_DENIED: "User denied the request for Geolocation.",
    POSITION_UNAVAILABLE: "Location information is unavailable.",
  },
};
