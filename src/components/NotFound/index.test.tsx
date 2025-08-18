import { NOT_FOUND_TEST } from "@constants";
import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import NotFound from ".";

const { DESCRIPTION, IT, CONSTANTS } = NOT_FOUND_TEST;
const {
  RENDERS_TITLE_AND_MESSAGE,
  RENDERS_NAVIGATION_BUTTON,
  RENDERS_BACKGROUND_IMAGE,
  MATCHES_SNAPSHOT,
} = IT;
const { TEXT, IMAGE, BUTTON } = CONSTANTS;

jest.mock("@assets/NoGeolocationBackground.webp", () => "test-image.webp");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe(`${DESCRIPTION}`, () => {
  test(`${RENDERS_TITLE_AND_MESSAGE}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    expect(screen.getByText(TEXT.PAGE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(TEXT.PAGE_MESSAGE)).toBeInTheDocument();
  });

  test(`${RENDERS_NAVIGATION_BUTTON}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(BUTTON.BACK_TO_HOMEPAGE);
  });

  test(`${RENDERS_BACKGROUND_IMAGE}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", IMAGE.MOCK_SRC);
  });

  test(`${MATCHES_SNAPSHOT}`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
