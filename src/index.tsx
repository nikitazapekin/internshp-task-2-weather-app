import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { GlobalStyle } from "@styles/globals";
import { ThemeProvider } from "styled-components";

import WeekWeatherPage from "@pages/WeatherPage";

import { theme } from "./constants/";
import { store } from "./store";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WeekWeatherPage />
    </ThemeProvider>
  </Provider>
);
