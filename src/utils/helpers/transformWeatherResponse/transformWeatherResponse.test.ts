import { TIMESTAMP_CONVERSION_FACTOR } from "@constants/numericalConstants";
import { days } from "@constants/time";
import { expect } from "@jest/globals";
import type { FiveDayForecastResponse, ForecastItem } from "@types/apiTypes";

import { transformWeatherData } from "./transformWeatherResponse";

describe("transformWeatherData", () => {
  const mockForecastItem = (
    dt: number,
    temp: number,
    main: string,
    description: string
  ): ForecastItem => ({
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
    dt_txt: new Date(dt * TIMESTAMP_CONVERSION_FACTOR).toISOString(),
  });

  it("should group forecasts by day and calculate average temperature", () => {
    const sameDayTimestamp1 = Math.floor(new Date("2023-01-01T12:00:00").getTime() / 1000);
    const sameDayTimestamp2 = Math.floor(new Date("2023-01-01T15:00:00").getTime() / 1000);
    const anotherDayTimestamp = Math.floor(new Date("2023-01-02T12:00:00").getTime() / 1000);

    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [
        mockForecastItem(sameDayTimestamp1, 10, "Clouds", "cloudy"),
        mockForecastItem(sameDayTimestamp2, 20, "Clouds", "cloudy"),
        mockForecastItem(anotherDayTimestamp, 15, "Rain", "rainy"),
      ],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(2);
    expect(result[0].dt).toBe(15);
    expect(result[0].day).toBe(
      days[new Date(sameDayTimestamp1 * TIMESTAMP_CONVERSION_FACTOR).getDay()]
    );
    expect(result[1].dt).toBe(15);
    expect(result[1].day).toBe(
      days[new Date(anotherDayTimestamp * TIMESTAMP_CONVERSION_FACTOR).getDay()]
    );
  });

  it("should correctly calculate weather condition probabilities", () => {
    const timestamp = Math.floor(new Date("2023-01-01T12:00:00").getTime() / 1000);

    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [
        mockForecastItem(timestamp, 10, "Rain", "light rain"),
        mockForecastItem(timestamp, 10, "Clear", "sunny"),
        mockForecastItem(timestamp, 10, "Clouds", "cloudy"),
        mockForecastItem(timestamp, 10, "Fog", "foggy"),
      ],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(1);

    expect(result[0].rainy).toBe(0.25);
    expect(result[0].sunny).toBe(0.25);
    expect(result[0].cloudy).toBe(0.25);
    expect(result[0].foggy).toBe(0.25);
  });

  it("should handle multiple language weather descriptions", () => {
    const timestamp = Math.floor(new Date("2023-01-01T12:00:00").getTime() / 1000);

    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [
        mockForecastItem(timestamp, 10, "Rain", "дождь"),
        mockForecastItem(timestamp, 10, "Clear", "ясно"),
        mockForecastItem(timestamp, 10, "Clouds", "пасмурно"),
        mockForecastItem(timestamp, 10, "Fog", "туман"),
      ],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(1);

    expect(result[0].rainy).toBe(0.25);
    expect(result[0].sunny).toBe(0.25);
    expect(result[0].cloudy).toBe(0.25);
    expect(result[0].foggy).toBe(0.25);
  });

  it("should handle empty forecast list", () => {
    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(0);
  });

  it("should correctly handle mixed weather conditions", () => {
    const timestamp = Math.floor(new Date("2023-01-01T12:00:00").getTime() / 1000);

    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [
        mockForecastItem(timestamp, 10, "Rain", "rain"),
        mockForecastItem(timestamp, 10, "Rain", "rain"),
        mockForecastItem(timestamp, 10, "Clear", "sunny"),
        mockForecastItem(timestamp, 10, "Clouds", "cloudy"),
      ],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(1);

    expect(result[0].rainy).toBe(0.5);
    expect(result[0].sunny).toBe(0.25);
    expect(result[0].cloudy).toBe(0.25);
    expect(result[0].foggy).toBe(0);
  });

  it("should preserve dt_txt from the first item of each day", () => {
    const sameDayTimestamp1 = Math.floor(new Date("2023-01-01T12:00:00").getTime() / 1000);
    const sameDayTimestamp2 = Math.floor(new Date("2023-01-01T15:00:00").getTime() / 1000);

    const mockResponse: FiveDayForecastResponse = {
      cod: "200",
      message: 0,
      cnt: 0,
      list: [
        mockForecastItem(sameDayTimestamp1, 10, "Clear", "sunny"),
        mockForecastItem(sameDayTimestamp2, 20, "Clear", "sunny"),
      ],
      city: {
        id: 0,
        name: "",
        coord: { lat: 0, lon: 0 },
        country: "",
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
      },
    };

    const result = transformWeatherData(mockResponse);

    expect(result.length).toBe(1);
    expect(result[0].dt_txt).toBe(
      new Date(sameDayTimestamp1 * TIMESTAMP_CONVERSION_FACTOR).toISOString()
    );
  });
});
