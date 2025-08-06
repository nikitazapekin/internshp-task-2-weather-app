import { expect } from "@jest/globals";

import { getCurrentTime } from "./getCurrentTime";

jest.mock("@constants/monthsAndDays", () => ({
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
}));

describe("getCurrentTime function", () => {
  it("should return correct date string format", () => {
    const currentDate = new Date();
    const { dateString } = getCurrentTime();
    const expectedDayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][currentDate.getDay()];
    const expectedDay = currentDate.getDate();
    const expectedMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][currentDate.getMonth()];
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
