import { SPINNER_TEST } from "@constants";
import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Spinner from ".";

const { DESCRIPTION, IT, CONSTANTS } = SPINNER_TEST;
const { RENDERS_CORRECTLY, APPLIES_POSITION_STYLE, HAS_DEFAULT_STYLES, MATCHES_SNAPSHOT } = IT;
const { TEST_IDS, POSITIONS, STYLES } = CONSTANTS;

describe(`${DESCRIPTION}`, () => {
  test(`${RENDERS_CORRECTLY}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner position={POSITIONS.ABSOLUTE as "absolute"} />
      </ThemeProvider>
    );
    const spinner = screen.getByTestId(TEST_IDS.SPINNER);

    expect(spinner).toBeInTheDocument();
  });

  test(`${APPLIES_POSITION_STYLE}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner position={POSITIONS.RELATIVE as "relative"} />
      </ThemeProvider>
    );

    const spinner = screen.getByTestId(TEST_IDS.SPINNER);

    expect(spinner).toHaveStyle(`position: ${POSITIONS.RELATIVE}`);
  });

  test(`${HAS_DEFAULT_STYLES}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner position={POSITIONS.ABSOLUTE as "absolute"} />
      </ThemeProvider>
    );

    const spinner = screen.getByTestId(TEST_IDS.SPINNER);

    expect(spinner).toHaveStyle(`width: ${STYLES.WIDTH}`);
    expect(spinner).toHaveStyle(`height: ${STYLES.HEIGHT}`);
  });

  test(`${MATCHES_SNAPSHOT}`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Spinner position={POSITIONS.ABSOLUTE as "absolute"} />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
