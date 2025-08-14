import type { ForecastItem } from "@types/apiTypes";
import type { WeatherDaySummary } from "@types/weatherDaySummaryTypes";

export interface SwiperItemTypes {
  weatherElement: WeatherDaySummary | ForecastItem;
}
