import { expect } from "@jest/globals";

import { getErrorMessage } from "./getErrorMessage";

describe("getErrorMessage function", () => {
  it("should return error message when Error instance is passed", () => {
    const error = new Error("Test error message");
    const result = getErrorMessage(error);

    expect(result).toBe("Test error message");
  });

  it("should return the string when string is passed", () => {
    const error = "Simple error string";
    const result = getErrorMessage(error);

    expect(result).toBe("Simple error string");
  });

  it("should return default message for unknown error types", () => {
    const error = { some: "object" };
    const result = getErrorMessage(error);

    expect(result).toBe("Unknown error occurred");

    const error2 = 123;
    const result2 = getErrorMessage(error2);

    expect(result2).toBe("Unknown error occurred");
  });
});
