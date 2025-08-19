import { Provider } from "react-redux";
import * as GeolocationModule from "@components/GeolocationIsTurnOff";
import * as SpinnerModule from "@components/Spinner";
import * as SwiperModule from "@components/Swiper";
import * as TodayWeatherModule from "@components/TodayWeather";
import * as WeatherCardGridModule from "@components/WeatherCardsList";
import { BOTTOM_BANNER_TEST } from "@constants";
import { theme } from "@constants/theme";
import { BOTTOM_OF_THE_BANNER_MOCK } from "@mocks/index";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";

import type { RootState } from "@store/index";

import BottomOfTheBanner from ".";

const { DESCRIPTION, IT, CONSTANTS, SELECTORS } = BOTTOM_BANNER_TEST;
const {
  RENDERS_SPINNER,
  RETURNS_NULL,
  RENDERS_GEOLOCATION_OFF,
  RENDERS_DESKTOP_VIEW,
  RENDERS_MOBILE_VIEW,
} = IT;
const { TEST_IDS, TEXT } = CONSTANTS;
const { WEATHER_DATA, RESIZE } = BOTTOM_OF_THE_BANNER_MOCK;
const { SELECT_CITIES_SUGGESTIONS, SELECT_CURRENT_COORDINATS, SELECT_WEATHER } = SELECTORS;

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

describe(`${DESCRIPTION}`, () => {
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

    (SpinnerModule.default as jest.Mock).mockImplementation(() => (
      <div data-testid={TEST_IDS.SPINNER} />
    ));
    (GeolocationModule.default as jest.Mock).mockImplementation(() => (
      <div>{TEXT.GEOLOCATION_OFF}</div>
    ));
    (TodayWeatherModule.default as jest.Mock).mockImplementation(() => (
      <div>{TEXT.TODAY_WEATHER}</div>
    ));
    (WeatherCardGridModule.default as jest.Mock).mockImplementation(() => (
      <div>{TEXT.WEATHER_CARD_GRID}</div>
    ));
    (SwiperModule.default as jest.Mock).mockImplementation(() => <div>{TEXT.SWIPER}</div>);
    (require("@hooks/useResize").default as jest.Mock).mockReturnValue(RESIZE.DESKTOP);
  });

  const renderWithProviders = (state: Partial<RootState> = initialState) => {
    const store = mockStore(state);

    useSelectorMock.mockImplementation((selector) => {
      if (selector.name === SELECT_WEATHER) {
        return {
          data: state.currentWeatherReducer?.data,
          loading: state.currentWeatherReducer?.loading,
        };
      }

      if (selector.name === SELECT_CURRENT_COORDINATS) {
        return {
          latitude: state.coordinatsReducer?.latitude,
          longitude: state.coordinatsReducer?.longitude,
          isGeolocationDenied: state.coordinatsReducer?.isGeolocationDenied,
        };
      }

      if (selector.name === SELECT_CITIES_SUGGESTIONS) {
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

  test(`${RENDERS_SPINNER}`, () => {
    renderWithProviders();
    expect(screen.getByTestId(TEST_IDS.SPINNER)).toBeInTheDocument();
  });

  test(`${RETURNS_NULL}`, () => {
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

  test(`${RENDERS_GEOLOCATION_OFF}`, () => {
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
    expect(screen.getByText(TEXT.GEOLOCATION_OFF)).toBeInTheDocument();
  });

  test(`${RENDERS_DESKTOP_VIEW}`, () => {
    const state = {
      ...initialState,
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
        data: WEATHER_DATA,
      },
      coordinatsReducer: {
        latitude: 59,
        longitude: 30,
        isGeolocationDenied: false,
      },
    };

    renderWithProviders(state);
    expect(screen.getByText(TEXT.TODAY_WEATHER)).toBeInTheDocument();
    expect(screen.getByText(TEXT.SWIPER)).toBeInTheDocument();
  });

  test(`${RENDERS_MOBILE_VIEW}`, () => {
    (require("@hooks/useResize").default as jest.Mock).mockReturnValue(RESIZE.MOBILE);

    const state = {
      ...initialState,
      currentWeatherReducer: {
        ...initialState.currentWeatherReducer,
        loading: false,
        data: WEATHER_DATA,
      },
      coordinatsReducer: {
        latitude: 59,
        longitude: 30,
        isGeolocationDenied: false,
      },
    };

    renderWithProviders(state);
    expect(screen.getByText(TEXT.TODAY_WEATHER)).toBeInTheDocument();
    expect(screen.getByText(TEXT.WEATHER_CARD_GRID)).toBeInTheDocument();
  });
});
