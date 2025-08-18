import { Provider } from "react-redux";
import Spinner from "@components/Spinner";
import Swiper from "@components/Swiper";
import SwiperItem from "@components/SwiperItem";
import { SWIPER_TEST } from "@constants";
import { theme } from "@constants/index";
import { useSwiper } from "@hooks/useSwiper";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { store } from "@store/index";

const { DESCRIPTION, IT, CONSTANTS, MOCKS } = SWIPER_TEST;
const { RENDERS_SPINNER, RENDERS_SWIPER_ITEMS } = IT;
const { TEST_IDS, TIME_OF_WEATHER } = CONSTANTS;
const { WEATHER_DATA } = MOCKS;

jest.mock("@components/Spinner", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid={TEST_IDS.SPINNER} />),
}));

jest.mock("@components/SwiperItem", () => ({
  __esModule: true,
  default: jest.fn(({ weatherElement }) => (
    <div data-testid={TEST_IDS.SWIPER_ITEM}>{weatherElement.dt_txt}</div>
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

describe(`${DESCRIPTION}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (Spinner as jest.Mock).mockImplementation(() => <div data-testid={TEST_IDS.SPINNER} />);
    (SwiperItem as jest.Mock).mockImplementation(({ weatherElement }) => (
      <div data-testid={TEST_IDS.SWIPER_ITEM}>{weatherElement.dt_txt}</div>
    ));

    (useSwiper as jest.Mock).mockReturnValue({
      containerRef: { current: null },
      handleStart: jest.fn(),
      handleEnd: jest.fn(),
      setIsDragging: jest.fn(),
    });
  });

  test(`${RENDERS_SPINNER}`, () => {
    useSelectorMock.mockReturnValue({ timeOfWeather: TIME_OF_WEATHER.DAILY });
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Swiper weatherElements={null} />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId(TEST_IDS.SPINNER)).toBeInTheDocument();
  });

  test(`${RENDERS_SWIPER_ITEMS}`, () => {
    useSelectorMock.mockReturnValue({ timeOfWeather: TIME_OF_WEATHER.DAILY });
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Swiper weatherElements={WEATHER_DATA} />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(WEATHER_DATA.list[0].dt_txt)).toBeInTheDocument();
    expect(screen.getByText(WEATHER_DATA.list[1].dt_txt)).toBeInTheDocument();
    expect(screen.getAllByTestId(TEST_IDS.SWIPER_ITEM)).toHaveLength(2);
  });
});
