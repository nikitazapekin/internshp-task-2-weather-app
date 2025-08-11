import { MAIN_PAGE, MAIN_PAGE_CITY, NOT_FOUND_PAGE } from "@constants";
import NotFoundPage from "@pages/NotFoundPage";
import WeatherPage from "@pages/WeatherPage";

export const routes = [
  {
    path: MAIN_PAGE,
    Component: WeatherPage,
  },
  {
    path: MAIN_PAGE_CITY,
    Component: WeatherPage,
  },
  {
    path: NOT_FOUND_PAGE,
    Component: NotFoundPage,
  },
];
