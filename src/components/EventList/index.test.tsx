import { Provider } from "react-redux";
import { EVENT_LIST_TEST } from "@constants";
import { theme } from "@constants/theme";
import { EVENT_LIST_MOCKS } from "@mocks/index";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import EventList from ".";

const { DESCRIPTION, IT, CONSTANTS } = EVENT_LIST_TEST;
const { RENDERS_EMPTY_LIST, RENDERS_EVENTS_LIST } = IT;
const { EMPTY_LIST_TEXT } = CONSTANTS;
const { EVENTS, FORMATTED_TIME } = EVENT_LIST_MOCKS;

jest.mock("@components/Spinner");
jest.mock("@utils/helpers/formatTime/formatTime");
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const mockStore = configureMockStore();
const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector") as jest.Mock;

describe(`${DESCRIPTION}`, () => {
  const initialState: Partial<RootState> = {
    calendarReducer: {
      loading: false,
      error: null,
      events: [],
    },
  };

  beforeEach(() => {
    useSelectorMock.mockClear();
    useSelectorMock.mockImplementation((selector) =>
      selector({
        calendarReducer: initialState.calendarReducer,
      })
    );
  });

  const renderWithProviders = (state: Partial<RootState> = initialState) => {
    const store = mockStore(state);

    useSelectorMock.mockImplementation((selector) =>
      selector({
        calendarReducer: state.calendarReducer || initialState.calendarReducer,
      })
    );

    return render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EventList />
        </ThemeProvider>
      </Provider>
    );
  };

  test(`${RENDERS_EMPTY_LIST}`, () => {
    renderWithProviders();
    expect(screen.getByText(EMPTY_LIST_TEXT)).toBeInTheDocument();
  });

  test(`${RENDERS_EVENTS_LIST}`, () => {
    const state = {
      calendarReducer: {
        ...initialState.calendarReducer,
        events: EVENTS,
      },
    };

    require("@utils/helpers/formatTime/formatTime").formatTime.mockImplementation(
      (dateTime: string) => dateTime.split("T")[1].substring(0, 5)
    );

    renderWithProviders(state);

    expect(screen.getByText(EVENTS[0].summary)).toBeInTheDocument();
    expect(screen.getByText(FORMATTED_TIME.EVENT_1)).toBeInTheDocument();
    expect(screen.getByText(EVENTS[1].summary)).toBeInTheDocument();
    expect(screen.getByText(FORMATTED_TIME.EVENT_2)).toBeInTheDocument();
  });
});
