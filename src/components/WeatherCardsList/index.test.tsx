import { Provider } from "react-redux";
import * as SpinnerModule from "@components/Spinner";
import * as WeatherCardModule from "@components/WeatherCard";
import { theme } from "@constants/theme";
import { TimeOfWeather } from "@constants/weatherConstants";
import { render, screen } from "@testing-library/react";
import type { FiveDayForecastResponse } from "@types/apiTypes";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import WeatherCardGrid from ".";

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

describe("WeatherCardGrid Component", () => {
  const mockWeatherData: FiveDayForecastResponse = {
    cod: "200",
    message: 0,
    cnt: 2,
    list: [
      {
        dt: 1620000000,
        main: {
          temp: 22.5,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
        },
        weather: [
          {
            main: "Clear",
            id: 0,
            description: "",
            icon: "",
          },
        ],
        clouds: { all: 0 },
        wind: { speed: 3.2, deg: 180 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2025-05-03 12:00:00",
      },
    ],
    city: {
      id: 524901,
      name: "Moscow",
      coord: { lat: 55.7558, lon: 37.6176 },
      country: "RU",
      population: 12655050,
      timezone: 10800,
      sunrise: 1619999999,
      sunset: 1620050400,
    },
  };

  const initialState: Partial<RootState> = {
    weatherReducer: {
      loading: false,
      error: null,
      data: null,
      lastRequestType: null,
      timeOfWeather: null,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (SpinnerModule.default as jest.Mock).mockImplementation(() => <div data-testid="spinner" />);

    (WeatherCardModule.default as jest.Mock).mockImplementation(
      ({ weatherElement }: { weatherElement: { dt_txt: string } }) => (
        <div data-testid="weather-card">{weatherElement.dt_txt}</div>
      )
    );

    (
      require("@utils/helpers/transformWeatherResponse/transformWeatherResponse")
        .transformWeatherData as jest.Mock
    ).mockImplementation((data) => data.list);
  });

  const renderWithProviders = (
    state: Partial<RootState> = initialState,
    weatherElements: FiveDayForecastResponse | null = null
  ) => {
    const store = mockStore(state);

    useSelectorMock.mockImplementation((selector) => {
      if (selector.name === "selectWeather") {
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

  test("renders spinner when no weather data", () => {
    renderWithProviders();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("renders WeatherCards for hourly forecast", () => {
    const state: Partial<RootState> = {
      weatherReducer: {
        ...initialState.weatherReducer!,
        timeOfWeather: TimeOfWeather.HOURLY,
        data: mockWeatherData,
      },
    };

    renderWithProviders(state, mockWeatherData);

    expect(screen.getByText("2025-05-03 12:00:00")).toBeInTheDocument();
    expect(screen.getAllByTestId("weather-card")).toHaveLength(1);
  });

  test("renders transformed WeatherCards for weekly forecast", () => {
    const state: Partial<RootState> = {
      weatherReducer: {
        ...initialState.weatherReducer!,
        timeOfWeather: TimeOfWeather.WEEKLY,
        data: mockWeatherData,
      },
    };

    renderWithProviders(state, mockWeatherData);

    expect(
      require("@utils/helpers/transformWeatherResponse/transformWeatherResponse")
        .transformWeatherData
    ).toHaveBeenCalled();
    expect(screen.getAllByTestId("weather-card")).toHaveLength(1);
  });
});
