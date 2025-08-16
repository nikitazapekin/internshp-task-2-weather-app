import { theme } from "@constants/theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

import type { ButtonProps } from "./types";
import Button from ".";

describe("Button Component", () => {
  const defaultProps: ButtonProps = {
    text: "Test Button",
    handler: jest.fn(),
    isActive: false,
    isFullWidth: false,
  };

  test("renders button with correct text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    );

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  test("calls handler when clicked", async () => {
    const mockHandler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} handler={mockHandler} />
      </ThemeProvider>
    );

    await userEvent.click(screen.getByRole("button"));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("applies full width styles when isFullWidth is true", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} isFullWidth={true} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveStyle("width: 100%");
  });

  test("matches snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
