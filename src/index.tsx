import { App } from "@components/App/App";
import ErrorBoundary from "@components/ErrorBoundary";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { theme } from "./constants/";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
