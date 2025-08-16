import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { MAIN_PAGE, NOT_FOUND_PAGE } from "@constants";
import { render, screen } from "@testing-library/react";

import AppRoutes from ".";

jest.mock("@pages/WeatherPage", () => () => (
  <div data-testid="weather-page">
    <h1>Weather Page</h1>
    <button>Search</button>
  </div>
));

jest.mock("@pages/NotFoundPage", () => () => (
  <div data-testid="not-found-page">
    <h1>Page Not Found</h1>
    <p>The page you have reached does not exist</p>
  </div>
));

describe("AppRouter", () => {
  const setupRouterTest = (initialRoute = MAIN_PAGE) => {
    const router = createMemoryRouter(
      [
        {
          path: "/*",
          element: <AppRoutes />,
        },
      ],
      {
        initialEntries: [initialRoute],
      }
    );

    render(<RouterProvider router={router} />);

    return { router };
  };

  it("should render WeatherPage for main route", async () => {
    setupRouterTest(MAIN_PAGE);
    expect(await screen.findByTestId("weather-page")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should render NotFoundPage for unknown route", async () => {
    setupRouterTest("/unknown-route");
    expect(await screen.findByTestId("not-found-page")).toBeInTheDocument();
  });

  it("should render NotFoundPage for /404 route", async () => {
    setupRouterTest(NOT_FOUND_PAGE);
    expect(await screen.findByTestId("not-found-page")).toBeInTheDocument();
  });
});
