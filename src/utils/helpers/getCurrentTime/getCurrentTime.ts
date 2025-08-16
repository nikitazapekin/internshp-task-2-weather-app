import { days, FIRST_DAY_OF_MONTH, LAST_DAY_OF_MONTH, months } from "@constants";
import WeatherAppError from "@errors/weatherAppError";
import type { TimeAndDate } from "@types/timeAndDateTypes";

export const getCurrentTime = (): TimeAndDate => {
  try {
    const currentTime = new Date();

    if (isNaN(currentTime.getTime())) {
      throw new WeatherAppError("Invalid date", "Invalid date format");
    }

    const timeString = currentTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    if (!days || !months) {
      throw new WeatherAppError("Invalid date", "Days or month are not defined");
    }

    const dayIndex = currentTime.getDay();
    const monthIndex = currentTime.getMonth();

    if (dayIndex < 0 || dayIndex >= days.length || !days[dayIndex]) {
      throw new WeatherAppError("Invalid date", "Invalid date index");
    }

    if (monthIndex < 0 || monthIndex >= months.length || !months[monthIndex]) {
      throw new WeatherAppError("Invalid date", "Invalid month index");
    }

    const dayName = days[dayIndex];
    const day = currentTime.getDate();
    const month = months[monthIndex];
    const year = currentTime.getFullYear();

    if (day < FIRST_DAY_OF_MONTH || day > LAST_DAY_OF_MONTH) {
      throw new WeatherAppError("Invalid date", "Invalid date of month");
    }

    const dateString = `${dayName}, ${day} ${month} ${year}`;

    if (!timeString || !dateString) {
      throw new WeatherAppError("Invalid date", "Failed to generate time or date string");
    }

    return { timeString, dateString };
  } catch (error) {
    return {
      timeString: "",
      dateString: "",
      error: error,
    };
  }
};
