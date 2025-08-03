import { sayHello } from "./sayHelloFunction";
import { expect } from "@jest/globals";

describe("sayHello function", () => {
  it("should return correct greeting for a given name", () => {
    const name = "John";
    const result = sayHello(name);

    expect(result).toBe("Hello John");
  });

  it("should return type string", () => {
    const result = sayHello("Test");

    expect(typeof result).toBe("string");
  });
});
