import type { ForecastItem } from "@types/apiTypes";
import type { WeatherDaySummary } from "@types/weatherDaySummaryTypes";

export function getWeatherCondition(
  weatherElement: WeatherDaySummary | ForecastItem
): "foggy" | "sunny" | "rainy" | "cloudy" {
  if ("foggy" in weatherElement) {
    const { foggy, rainy, sunny, cloudy } = weatherElement;
    const maxValue = Math.max(foggy, rainy, sunny, cloudy);

    if (maxValue === foggy) return "foggy";

    if (maxValue === rainy) return "rainy";

    if (maxValue === sunny) return "sunny";

    if (maxValue === cloudy) return "cloudy";

    return "sunny";
  } else {
    const mainCondition = weatherElement.weather[0]?.main.toLowerCase();

    if (mainCondition.includes("fog") || mainCondition.includes("mist")) return "foggy";

    if (mainCondition.includes("rain") || mainCondition.includes("drizzle")) return "rainy";

    if (mainCondition.includes("clear") || mainCondition.includes("sun")) return "sunny";

    if (mainCondition.includes("cloud")) return "cloudy";

    return "sunny";
  }
}
