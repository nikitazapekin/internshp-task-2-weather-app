export const GET_CURRENT_TIME_TEST = {
  DESCRIPTION: "getCurrentTime function",
  IT: {
    RETURNS_CORRECT_DATE_FORMAT: "should return correct date string format",
    RETURNS_EXPECTED_PROPERTIES:
      "should return an object with timeString and dateString properties",
  },
  EXPECTATIONS: {
    PROPERTIES: {
      TIME_STRING: "timeString",
      DATE_STRING: "dateString",
    },
    TYPES: {
      STRING: "string",
    },
  },
};
