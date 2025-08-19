export const GEOLOCATION_TEST = {
  DESCRIPTION: "getUserLocation function",
  IT: {
    RESOLVES_WITH_COORDS: "should resolve with coordinates when geolocation is successful",
    REJECTS_PERMISSION_DENIED: "should reject with correct error message when permission is denied",
    REJECTS_POSITION_UNAVAILABLE:
      "should reject with correct error message when position is unavailable",
  },
};
