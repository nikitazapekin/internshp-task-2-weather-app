import { Provider } from "react-redux";
import { theme } from "@constants/theme";
import { UI_CONSTANTS } from "@constants/UI";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import EventList from ".";

jest.mock("@components/Spinner");
jest.mock("@utils/helpers/formatTime/formatTime");
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const mockStore = configureMockStore();
const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector") as jest.Mock;

describe("EventList Component", () => {
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

  test("renders empty list message when no events", () => {
    renderWithProviders();
    expect(screen.getByText(UI_CONSTANTS.emptyList)).toBeInTheDocument();
  });

  test("renders list of events with dateTime", () => {
    const mockEvents = [
      {
        id: "1",
        summary: "Test Event 1",
        start: { dateTime: "2025-01-01T10:00:00" },
        end: { dateTime: "2025-01-01T11:00:00" },
        description: "Description 1",
      },
      {
        id: "2",
        summary: "Test Event 2",
        start: { dateTime: "2025-01-02T11:00:00" },
        end: { dateTime: "2025-01-02T12:00:00" },
        description: "Description 2",
      },
    ];

    const state = {
      calendarReducer: {
        ...initialState.calendarReducer,
        events: mockEvents,
      },
    };

    require("@utils/helpers/formatTime/formatTime").formatTime.mockImplementation(
      (dateTime: string) => dateTime.split("T")[1].substring(0, 5)
    );

    renderWithProviders(state);

    expect(screen.getByText("Test Event 1")).toBeInTheDocument();
    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("Test Event 2")).toBeInTheDocument();
    expect(screen.getByText("11:00")).toBeInTheDocument();
  });
});
