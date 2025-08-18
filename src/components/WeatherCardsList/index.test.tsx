import { Provider } from "react-redux";
import * as SpinnerModule from "@components/Spinner";
import * as WeatherCardModule from "@components/WeatherCard";
import { WEATHER_CARD_GRID_TEST } from "@constants";
import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import type { FiveDayForecastResponse } from "@types/apiTypes";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import WeatherCardGrid from ".";

const { DESCRIPTION, IT, CONSTANTS, INITIAL_STATE, SELECTORS } = WEATHER_CARD_GRID_TEST;
const { RENDERS_SPINNER, RENDERS_HOURLY_CARDS, RENDERS_WEEKLY_CARDS } = IT;
const { TEST_IDS, TIME_OF_WEATHER, WEATHER_DATA } = CONSTANTS;
const { SELECT_WEATHER } = SELECTORS;

jest.mock("@components/Spinner", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@components/WeatherCard", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@utils/helpers/transformWeatherResponse/transformWeatherResponse", () => ({
  __esModule: true,
  transformWeatherData: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const mockStore = configureMockStore<Partial<RootState>>();
const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector") as jest.Mock;

describe(`${DESCRIPTION}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (SpinnerModule.default as jest.Mock).mockImplementation(() => (
      <div data-testid={TEST_IDS.SPINNER} />
    ));

    (WeatherCardModule.default as jest.Mock).mockImplementation(
      ({ weatherElement }: { weatherElement: { dt_txt: string } }) => (
        <div data-testid={TEST_IDS.WEATHER_CARD}>{weatherElement.dt_txt}</div>
      )
    );

    (
      require("@utils/helpers/transformWeatherResponse/transformWeatherResponse")
        .transformWeatherData as jest.Mock
    ).mockImplementation((data) => data.list);
  });

  const renderWithProviders = (
    state: Partial<RootState> = INITIAL_STATE,
    weatherElements: FiveDayForecastResponse | null = null
  ) => {
    const store = mockStore(state);

    useSelectorMock.mockImplementation((selector) => {
      if (selector.name === SELECT_WEATHER) {
        return {
          timeOfWeather: state.weatherReducer?.timeOfWeather,
        };
      }

      return selector(state);
    });

    return render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <WeatherCardGrid weatherElements={weatherElements} />
        </ThemeProvider>
      </Provider>
    );
  };

  test(`${RENDERS_SPINNER}`, () => {
    renderWithProviders();
    expect(screen.getByTestId(TEST_IDS.SPINNER)).toBeInTheDocument();
  });

  test(`${RENDERS_HOURLY_CARDS}`, () => {
    const state: Partial<RootState> = {
      weatherReducer: {
        ...INITIAL_STATE.weatherReducer!,
        timeOfWeather: TIME_OF_WEATHER.HOURLY as "hourly",
        data: WEATHER_DATA,
      },
    };

    renderWithProviders(state, WEATHER_DATA);

    expect(screen.getByText(WEATHER_DATA.list[0].dt_txt)).toBeInTheDocument();
    expect(screen.getAllByTestId(TEST_IDS.WEATHER_CARD)).toHaveLength(1);
  });

  test(`${RENDERS_WEEKLY_CARDS}`, () => {
    const state: Partial<RootState> = {
      weatherReducer: {
        ...INITIAL_STATE.weatherReducer!,
        timeOfWeather: TIME_OF_WEATHER.WEEKLY as "weekly",
        data: WEATHER_DATA,
      },
    };

    renderWithProviders(state, WEATHER_DATA);

    expect(
      require("@utils/helpers/transformWeatherResponse/transformWeatherResponse")
        .transformWeatherData
    ).toHaveBeenCalled();
    expect(screen.getAllByTestId(TEST_IDS.WEATHER_CARD)).toHaveLength(1);
  });
});
