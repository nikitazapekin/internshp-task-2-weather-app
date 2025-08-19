export const CALENDAR_EVENTS_TEST = {
  DESCRIPTION: "Calendar Events Test",
  IT: {
    SHOULD_MANIPULATE_REDUX_AFTER_CLICK: "should directly manipulate Redux store after click",
  },
  CONSTANTS: {
    URLS: {
      BASE_URL: "http://localhost:4000",
      GOOGLE_APIS: "https://www.googleapis.com/**",
      GOOGLE_ACCOUNTS: "https://accounts.google.com/**",
    },
    TEST_IDS: {
      EVENT_LIST: "event-list",
      EVENT: "event",
    },
    SELECTORS: {
      BUTTON: "button",
    },
    TEXT: {
      SIGN_IN: "Sign in",
      EVENT_TITLE: "JS internships Daily Meeting",
      EVENT_TIME: "10:00",
    },
    ACTIONS: {
      CALENDAR_FETCH_SUCCESS: "calendar/fetchSuccess",
    },
    TIMEOUTS: {
      EVENT_VISIBILITY: 5000,
    },
    LOG_MESSAGES: {
      FOUND_STORE: "Found Redux store, will use it after click",
      STORE_NOT_FOUND: "Store not found, using DOM manipulation",
    },
  },
};
