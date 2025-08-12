import { expect } from "@jest/globals";

import { extractTime } from "./extractHours";

describe("extractTime function", () => {
  it("should return string type", () => {
    const testDate = "2025-05-15T12:34:00Z";
    const result = extractTime(testDate);

    expect(typeof result).toBe("string");
  });
});
