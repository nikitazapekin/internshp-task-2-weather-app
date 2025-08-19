import { WEATHER_TRANSFORM_TEST } from "@constants/index";
import type { FiveDayForecastResponse, ForecastItem } from "@types/apiTypes";

export const TRANSFORM_WEATHER_MOCK = {
  forecastItem: (dt: number, temp: number, main: string, description: string): ForecastItem => ({
    dt,
    main: {
      temp,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    weather: [
      {
        id: 0,
        main,
        description,
        icon: "",
      },
    ],
    clouds: { all: 0 },
    wind: { speed: 0, deg: 0 },
    visibility: 0,
    pop: 0,
    sys: { pod: "" },
    dt_txt: "2025-01-01T11:00:00",
  }),
  baseResponse: (list: ForecastItem[]): FiveDayForecastResponse => ({
    cod: "200",
    message: 0,
    cnt: 0,
    list,
    city: WEATHER_TRANSFORM_TEST.TEST_DATA.EMPTY_CITY,
  }),
};
