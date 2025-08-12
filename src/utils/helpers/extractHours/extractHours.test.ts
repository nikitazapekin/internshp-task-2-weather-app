import { expect } from "@jest/globals";

import { extractTime } from "./extractHours";

describe("extractTime function", () => {
  it("should return time in HH:MM format", () => {
    const testDate1 = "2025-05-15T14:30:00Z";
    const result1 = extractTime(testDate1);

    expect(result1).toBe("17:30");

    const testDate3 = "2025-05-15T00:00:00Z";
    const result3 = extractTime(testDate3);

    expect(result3).toBe("3:00");
  });

  it("should return string type", () => {
    const testDate = "2025-05-15T12:34:00Z";
    const result = extractTime(testDate);

    expect(typeof result).toBe("string");
  });
});
