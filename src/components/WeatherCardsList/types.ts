import type { FiveDayForecastResponse } from "@types/apiTypes";

export interface WeatherCardsListProps {
  weatherElements: FiveDayForecastResponse | null;
}
