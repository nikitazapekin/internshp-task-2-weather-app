import { expect } from "@jest/globals";

import { formatTime } from "./formatTime";

describe("formatTime function", () => {
  it("should format time correctly ru", () => {
    const testDate = new Date("2025-05-15T14:30:00");
    const expectedTime = "14:30";
    const result = formatTime(testDate.toISOString(), "ru-RU");

    expect(result).toBe(expectedTime);
  });

  it("should format time correctly en", () => {
    const testDate = new Date("2025-05-15T14:30:00");
    const expectedTime = "14:30";
    const result = formatTime(testDate.toISOString(), "en-US");

    expect(result).toBe(expectedTime);
  });

  it("should return empty string for invalid date", () => {
    const result = formatTime("invalid-date-string");

    expect(result).toBe("");
  });

  it("should return None when error occurs", () => {
    const originalIntl = global.Intl;

    global.Intl = {
      DateTimeFormat: jest.fn(() => {
        throw new Error("Test error");
      }),
    } as any;

    const testDate = new Date("2025-05-15T14:30:00");
    const result = formatTime(testDate.toISOString());

    expect(result).toBe("None");

    global.Intl = originalIntl;
  });

  it("should use 24-hour format", () => {
    const testDatePM = new Date("2025-05-15T22:15:00");
    const resultPM = formatTime(testDatePM.toISOString());

    expect(resultPM).toBe("22:15");

    const testDateAM = new Date("2025-05-15T08:45:00");
    const resultAM = formatTime(testDateAM.toISOString());

    expect(resultAM).toBe("08:45");
  });

  it("should handle midnight correctly", () => {
    const testDate = new Date("2025-05-15T00:00:00");
    const result = formatTime(testDate.toISOString());

    expect(result).toBe("00:00");
  });
});
