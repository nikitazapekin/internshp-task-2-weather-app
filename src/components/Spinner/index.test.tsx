import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Spinner from ".";

describe("Spinner Component", () => {
  test("renders spinner with correct test id", () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner position="absolute" />
      </ThemeProvider>
    );
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
  });

  test("applies correct position style from props", () => {
    const testPosition = "relative";

    render(
      <ThemeProvider theme={theme}>
        <Spinner position={testPosition} />
      </ThemeProvider>
    );

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveStyle(`position: ${testPosition}`);
  });

  test("has correct default styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner position="absolute" />
      </ThemeProvider>
    );

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveStyle("width: 30px");
    expect(spinner).toHaveStyle("height: 30px");
  });

  test("matches snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Spinner position="absolute" />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
