import type { FiveDayForecastResponse, ForecastItem } from "@types/apiTypes";
import type { WeatherDaySummary } from "@types/weatherDaySummaryTypes";

export function transformWeatherData(forecast: FiveDayForecastResponse): WeatherDaySummary[] {
  const forecastsByDay: Record<string, ForecastItem[]> = {};

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toISOString().split("T")[0];

    if (!forecastsByDay[dayKey]) {
      forecastsByDay[dayKey] = [];
    }

    forecastsByDay[dayKey].push(item);
  });

  const result: WeatherDaySummary[] = [];
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  for (const dayKey in forecastsByDay) {
    const dayForecasts = forecastsByDay[dayKey];
    const date = new Date(dayForecasts[0].dt * 1000);
    const dayOfWeek = daysOfWeek[date.getDay()];

    const avgTemp =
      dayForecasts.reduce((sum, item) => sum + item.main.temp, 0) / dayForecasts.length;

    let foggyCount = 0;
    let rainyCount = 0;
    let sunnyCount = 0;
    let cloudyCount = 0;

    dayForecasts.forEach((item) => {
      const weatherMain = item.weather[0].main.toLowerCase();
      const weatherDesc = item.weather[0].description.toLowerCase();

      if (weatherDesc.includes("fog") || weatherDesc.includes("туман")) {
        foggyCount++;
      }

      if (weatherMain === "rain" || weatherDesc.includes("rain") || weatherDesc.includes("дожд")) {
        rainyCount++;
      }

      if (weatherMain === "clear" || weatherDesc.includes("clear") || weatherDesc.includes("ясн")) {
        sunnyCount++;
      }

      if (
        weatherMain === "clouds" ||
        weatherDesc.includes("cloud") ||
        weatherDesc.includes("облач")
      ) {
        cloudyCount++;
      }
    });

    const total = dayForecasts.length;
    const foggy = foggyCount / total;
    const rainy = rainyCount / total;
    const sunny = sunnyCount / total;
    const cloudy = cloudyCount / total;

    result.push({
      dt: Number(avgTemp.toFixed(1)),
      day: dayOfWeek,
      foggy,
      rainy,
      sunny,
      cloudy,
    });
  }

  return result;
}
