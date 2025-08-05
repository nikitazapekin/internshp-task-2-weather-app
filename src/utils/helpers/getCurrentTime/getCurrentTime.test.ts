import { days, months } from "@constants";
import { expect } from "@jest/globals";

import { getCurrentTime } from "./getCurrentTime";

describe("getCurrentTime function", () => {
  it("should return correct date string format", () => {
    const currentDate = new Date();
    const { dateString } = getCurrentTime();
    const expectedDayName = days[currentDate.getDay()];
    const expectedDay = currentDate.getDate();
    const expectedMonth = months[currentDate.getMonth()];
    const expectedYear = currentDate.getFullYear();
    const expectedDateString = `${expectedDayName}, ${expectedDay} ${expectedMonth} ${expectedYear}`;

    expect(dateString).toBe(expectedDateString);
  });

  it("should return an object with timeString and dateString properties", () => {
    const result = getCurrentTime();

    expect(result).toHaveProperty("timeString");
    expect(result).toHaveProperty("dateString");
    expect(typeof result.timeString).toBe("string");
    expect(typeof result.dateString).toBe("string");
  });
});
