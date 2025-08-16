import { Provider } from "react-redux";
import Spinner from "@components/Spinner";
import Swiper from "@components/Swiper";
import SwiperItem from "@components/SwiperItem";
import { TimeOfWeather } from "@constants";
import { theme } from "@constants/index";
import { useSwiper } from "@hooks/useSwiper";
import { render, screen } from "@testing-library/react";
import type { FiveDayForecastResponse } from "@types/apiTypes";
import { ThemeProvider } from "styled-components";

import { store } from "@store/index";

jest.mock("@components/Spinner", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="spinner" />),
}));

jest.mock("@components/SwiperItem", () => ({
  __esModule: true,
  default: jest.fn(({ weatherElement }) => (
    <div data-testid="swiper-item">{weatherElement.dt_txt}</div>
  )),
}));

jest.mock("@hooks/useSwiper", () => ({
  __esModule: true,
  useSwiper: jest.fn(),
}));

jest.mock("@utils/helpers/transformWeatherResponse/transformWeatherResponse", () => ({
  __esModule: true,
  transformWeatherData: jest.fn((data) => data.list),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector");

describe("Swiper Component", () => {
  const mockWeatherData: FiveDayForecastResponse = {
    cod: "200",
    message: 0,
    cnt: 2,
    list: [
      {
        dt: 1620000000,
        main: {
          temp: 22.5,
          feels_like: 21.3,
          temp_min: 20.1,
          temp_max: 24.8,
          pressure: 1012,
          humidity: 65,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "ясно",
            icon: "01d",
          },
        ],
        clouds: { all: 0 },
        wind: { speed: 3.2, deg: 180 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2025-05-03 12:00:00",
      },
      {
        dt: 1620010800,
        main: {
          temp: 18.7,
          feels_like: 17.2,
          temp_min: 17.5,
          temp_max: 20.1,
          pressure: 1013,
          humidity: 70,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "легкий дождь",
            icon: "10n",
          },
        ],
        clouds: { all: 75 },
        wind: { speed: 2.1, deg: 210 },
        visibility: 8000,
        pop: 0.4,
        sys: { pod: "n" },
        dt_txt: "2025-05-03 15:00:00",
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

  beforeEach(() => {
    jest.clearAllMocks();

    (Spinner as jest.Mock).mockImplementation(() => <div data-testid="spinner" />);
    (SwiperItem as jest.Mock).mockImplementation(({ weatherElement }) => (
      <div data-testid="swiper-item">{weatherElement.dt_txt}</div>
    ));
    (useSwiper as jest.Mock).mockReturnValue({
      containerRef: { current: null },
      handleStart: jest.fn(),
      handleEnd: jest.fn(),
      setIsDragging: jest.fn(),
    });
  });

  test("renders Spinner when no weatherElements", () => {
    useSelectorMock.mockReturnValue({ timeOfWeather: TimeOfWeather.DAILY });
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Swiper weatherElements={null} />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("renders SwiperItems with correct data", () => {
    useSelectorMock.mockReturnValue({ timeOfWeather: TimeOfWeather.DAILY });
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Swiper weatherElements={mockWeatherData} />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("2025-05-03 12:00:00")).toBeInTheDocument();
    expect(screen.getByText("2025-05-03 15:00:00")).toBeInTheDocument();
    expect(screen.getAllByTestId("swiper-item")).toHaveLength(2);
  });
});
