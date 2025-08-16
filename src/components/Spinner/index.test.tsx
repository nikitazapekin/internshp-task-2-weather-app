import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Spinner from ".";

test("renders spinner with correct test id", () => {
  render(
    <ThemeProvider theme={theme}>
      <Spinner position="absolute" />
    </ThemeProvider>
  );
  const spinner = screen.getByTestId("spinner");

  expect(spinner).toBeInTheDocument();
});
