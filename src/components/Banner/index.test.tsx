import { theme } from "@constants/theme";
import { BANNER_TEST } from "@mocks";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Banner from ".";

const { DESCRIPTION, IT, CONSTANTS } = BANNER_TEST;
const { SHOULD_MATCH_SNAPSHOT } = IT;
const { TEST_IDS } = CONSTANTS;

jest.mock("@components/BottomOfTheBanner", () => () => (
  <div data-testid={TEST_IDS.BOTTOM_BANNER} />
));
jest.mock("@components/CenterOfBanner", () => () => <div data-testid={TEST_IDS.CENTER_BANNER} />);
jest.mock("@components/TopOfTheBanner", () => () => <div data-testid={TEST_IDS.TOP_BANNER} />);

describe(`${DESCRIPTION}`, () => {
  test(`${SHOULD_MATCH_SNAPSHOT}`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Banner />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
