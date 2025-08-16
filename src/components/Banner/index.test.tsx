import { theme } from "@constants/theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Banner from ".";

jest.mock("@components/BottomOfTheBanner", () => () => <div data-testid="bottom-banner" />);
jest.mock("@components/CenterOfBanner", () => () => <div data-testid="center-banner" />);
jest.mock("@components/TopOfTheBanner", () => () => <div data-testid="top-banner" />);
describe("Banner Component", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Banner />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
