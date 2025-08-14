import type { ForecastItem } from "@types/apiTypes";
import type { CurrentWeatherResponse } from "@types/apiTypes";
import type { DailyForecastItem } from "@types/apiTypes";
import type { WeatherDaySummary } from "@types/weatherDaySummaryTypes";

type WeatherCondition = "foggy" | "sunny" | "rainy" | "cloudy";
type WeatherData = WeatherDaySummary | CurrentWeatherResponse | ForecastItem | DailyForecastItem;

export function getWeatherCondition(weatherElement: WeatherData): {
  condition: WeatherCondition;
  description: string;
} {
  if ("foggy" in weatherElement && typeof weatherElement.foggy === "number") {
    const { foggy, rainy, sunny, cloudy } = weatherElement;
    const maxValue = Math.max(foggy, rainy, sunny, cloudy);

    if (maxValue === foggy) return { condition: "foggy", description: "Foggy" };

    if (maxValue === rainy) return { condition: "rainy", description: "Rainy" };

    if (maxValue === sunny) return { condition: "sunny", description: "Sunny" };

    if (maxValue === cloudy) return { condition: "cloudy", description: "Cloudy" };

    return { condition: "sunny", description: "Sunny" };
  }

  if ("weather" in weatherElement && Array.isArray(weatherElement.weather)) {
    const weatherDescription = weatherElement.weather[0];
    const mainCondition = weatherDescription?.main.toLowerCase() || "";
    const description = weatherDescription?.description || "";

    if (mainCondition.includes("fog") || mainCondition.includes("mist")) {
      return { condition: "foggy", description };
    }

    if (
      mainCondition.includes("rain") ||
      mainCondition.includes("drizzle") ||
      mainCondition.includes("shower")
    ) {
      return { condition: "rainy", description };
    }

    if (mainCondition.includes("clear") || mainCondition.includes("sun")) {
      return { condition: "sunny", description };
    }

    if (mainCondition.includes("cloud") || mainCondition.includes("overcast")) {
      return { condition: "cloudy", description };
    }

    if (mainCondition.includes("snow") || mainCondition.includes("flurr")) {
      return { condition: "rainy", description };
    }

    if (mainCondition.includes("thunder") || mainCondition.includes("storm")) {
      return { condition: "rainy", description };
    }

    return { condition: "sunny", description: description || "Clear" };
  }

  return { condition: "sunny", description: "Clear" };
}
