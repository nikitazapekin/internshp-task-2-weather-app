import WeekWeatherPage from "@pages/WeatherPage";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { theme } from "./constants/";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <ThemeProvider theme={theme}>
    <WeekWeatherPage />
  </ThemeProvider>
);
