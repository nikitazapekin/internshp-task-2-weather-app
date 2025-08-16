import { expect } from "@jest/globals";
import type { ForecastItem } from "@types/apiTypes";

import { isForecastItem } from "./isForecastItem";

describe("isForecastItem", () => {
  const validForecastItem: ForecastItem = {
    dt: 1234567890,
    main: {
      temp: 15.5,
      feels_like: 14.2,
      temp_min: 12.0,
      temp_max: 18.0,
      pressure: 1012,
      humidity: 65,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    clouds: { all: 0 },
    wind: { speed: 3.1, deg: 120 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2025-01-01 12:00:00",
  };

  it("should return true for a valid ForecastItem", () => {
    expect(isForecastItem(validForecastItem)).toBe(true);
  });

  it("should return false for null", () => {
    expect(isForecastItem(null)).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(isForecastItem(undefined)).toBe(false);
  });

  it("should return false for a primitive value", () => {
    expect(isForecastItem(42)).toBe(false);
    expect(isForecastItem("string")).toBe(false);
    expect(isForecastItem(true)).toBe(false);
  });

  it("should return false if main.temp is not a number", () => {
    const invalidItem = { ...validForecastItem, main: { ...validForecastItem.main, temp: "15" } };

    expect(isForecastItem(invalidItem)).toBe(false);
  });

  it("should return true even if optional fields are missing", () => {
    const minimalValidItem = {
      dt: 1234567890,
      main: { temp: 15.5 },
      dt_txt: "2025-01-01 12:00:00",
    };

    expect(isForecastItem(minimalValidItem)).toBe(true);
  });
});
