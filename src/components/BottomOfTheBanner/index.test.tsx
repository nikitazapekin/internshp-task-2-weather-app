import { Provider } from "react-redux";
import * as GeolocationModule from "@components/GeolocationIsTurnOff";
import * as SpinnerModule from "@components/Spinner";
import * as SwiperModule from "@components/Swiper";
import * as TodayWeatherModule from "@components/TodayWeather";
import * as WeatherCardGridModule from "@components/WeatherCardsList";
import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import BottomOfTheBanner from ".";

jest.mock("@components/Spinner", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@components/GeolocationIsTurnOff", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@components/TodayWeather", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@components/WeatherCardsList", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@components/Swiper", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@hooks/useResize", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const mockStore = configureMockStore();
const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector") as jest.Mock;

describe("BottomOfTheBanner Component", () => {
  const initialState: Partial<RootState> = {
    currentWeatherReducer: {
      loading: true,
      error: null,
      data: null,
      lastRequestType: null,
    },
    coordinatsReducer: {
      latitude: null,
      longitude: null,
      isGeolocationDenied: false,
    },
    elasticReducer: {
      data: null,
      loading: false,
      error: null,
      isElasticActive: false,
      coordinats: { latitude: null, longitude: null },
      hasLastSearch: false,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (SpinnerModule.default as jest.Mock).mockImplementation(() => <div data-testid="spinner" />);

    (GeolocationModule.default as jest.Mock).mockImplementation(() => (
      <div>Geolocation is turned off</div>
    ));

    (TodayWeatherModule.default as jest.Mock).mockImplementation(() => <div>TodayWeather</div>);

    (WeatherCardGridModule.default as jest.Mock).mockImplementation(() => (
      <div>WeatherCardGrid</div>
    ));

    (SwiperModule.default as jest.Mock).mockImplementation(() => <div>Swiper</div>);

    (require("@hooks/useResize").default as jest.Mock).mockReturnValue({
      isMobileView: false,
    });
  });

  const renderWithProviders = (state: Partial<RootState> = initialState) => {
    const store = mockStore(state);

    useSelectorMock.mockImplementation((selector) => {
      if (selector.name === "selectWeather") {
        return {
          data: state.currentWeatherReducer?.data,
          loading: state.currentWeatherReducer?.loading,
        };
      }

      if (selector.name === "selectCurrentCoordinats") {
        return {
          latitude: state.coordinatsReducer?.latitude,
          longitude: state.coordinatsReducer?.longitude,
          isGeolocationDenied: state.coordinatsReducer?.isGeolocationDenied,
        };
      }

      if (selector.name === "selectCitiesSuggestions") {
        return {
          isElasticActive: state.elasticReducer?.isElasticActive,
          hasLastSearch: state.elasticReducer?.hasLastSearch,
        };
      }

      return selector(state);
    });

    return render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BottomOfTheBanner />
        </ThemeProvider>
      </Provider>
    );
  };

  test("renders spinner when loading", () => {
    renderWithProviders();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("returns null when no coordinates and geolocation not denied", () => {
    const state = {
      ...initialState,
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
      },
    };
    const { container } = renderWithProviders(state);

    expect(container.firstChild).toBeNull();
  });

  test("renders GeolocationIsTurnOff when geolocation denied and no search", () => {
    const state = {
      ...initialState,
      coordinatsReducer: {
        ...initialState.coordinatsReducer,
        isGeolocationDenied: true,
      },
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
      },
    };

    renderWithProviders(state);
    expect(screen.getByText("Geolocation is turned off")).toBeInTheDocument();
  });

  test("renders TodayWeather and Swiper in desktop view with weather data", () => {
    const mockWeatherData = {
      coord: { lon: 30, lat: 59 },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 50 },
      visibility: 10000,
      wind: { speed: 3, deg: 180 },
      clouds: { all: 0 },
      dt: 162,
      sys: { country: "RU", sunrise: 162, sunset: 162 },
      timezone: 108,
      id: 498817,
      name: "Saint Petersburg",
      cod: 200,
    };

    const state = {
      ...initialState,
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
        data: mockWeatherData,
      },
      coordinatsReducer: {
        latitude: 59,
        longitude: 30,
        isGeolocationDenied: false,
      },
    };

    renderWithProviders(state);
    expect(screen.getByText("TodayWeather")).toBeInTheDocument();
    expect(screen.getByText("Swiper")).toBeInTheDocument();
  });

  test("renders TodayWeather and WeatherCardGrid in mobile view with weather data", () => {
    (require("@hooks/useResize").default as jest.Mock).mockReturnValue({
      isMobileView: true,
    });

    const mockWeatherData = {
      coord: { lon: 30, lat: 59 },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 50 },
      visibility: 10000,
      wind: { speed: 3, deg: 180 },
      clouds: { all: 0 },
      dt: 162,
      sys: { country: "RU", sunrise: 162, sunset: 162 },
      timezone: 108,
      id: 498817,
      name: "Saint Petersburg",
      cod: 200,
    };

    const state = {
      ...initialState,
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
        data: mockWeatherData,
      },
      coordinatsReducer: {
        latitude: 59,
        longitude: 30,
        isGeolocationDenied: false,
      },
    };

    renderWithProviders(state);
    expect(screen.getByText("TodayWeather")).toBeInTheDocument();
    expect(screen.getByText("WeatherCardGrid")).toBeInTheDocument();
  });
});
