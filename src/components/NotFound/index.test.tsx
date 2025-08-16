import { UI_CONSTANTS } from "@constants";
import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import NotFound from ".";

jest.mock("@assets/NoGeolocationBackground.webp", () => "test-image.webp");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("NotFound Component", () => {
  test("renders page title and message", () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("The page you have reached does not exist")).toBeInTheDocument();
  });

  test("renders navigation button with correct text", () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(UI_CONSTANTS.buttons.backToHomepage);
  });

  test("renders background image", () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  test("matches basic structure snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
