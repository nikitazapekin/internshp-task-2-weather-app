import { theme } from "@constants/theme";
import { BUTTON_TEST } from "@mocks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

import Button from ".";

const { DESCRIPTION, IT, CONSTANTS } = BUTTON_TEST;
const { RENDERS_CORRECT_TEXT, CALLS_HANDLER, APPLIES_FULL_WIDTH, MATCHES_SNAPSHOT } = IT;
const { DEFAULT_PROPS, STYLES } = CONSTANTS;

describe(`${DESCRIPTION}`, () => {
  test(`${RENDERS_CORRECT_TEXT}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...DEFAULT_PROPS} />
      </ThemeProvider>
    );

    expect(screen.getByText(DEFAULT_PROPS.text)).toBeInTheDocument();
  });

  test(`${CALLS_HANDLER}`, async () => {
    const mockHandler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button {...DEFAULT_PROPS} handler={mockHandler} />
      </ThemeProvider>
    );

    await userEvent.click(screen.getByRole("button"));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test(`${APPLIES_FULL_WIDTH}`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...DEFAULT_PROPS} isFullWidth={true} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveStyle(STYLES.FULL_WIDTH);
  });

  test(`${MATCHES_SNAPSHOT}`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button {...DEFAULT_PROPS} />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
