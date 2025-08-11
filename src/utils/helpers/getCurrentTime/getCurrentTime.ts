import { days, FIRST_DAY_OF_MONTH, LAST_DAY_OF_MONTH, months } from "@constants";

import type { TimeAndDate } from "@interfaces/timeAndDate";

export const getCurrentTime = (): TimeAndDate => {
  try {
    const currentTime = new Date();

    if (isNaN(currentTime.getTime())) {
      throw new Error("Invalid date");
    }

    const timeString = currentTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    if (!days || !months) {
      throw new Error("Days or months constants are not defined");
    }

    const dayIndex = currentTime.getDay();
    const monthIndex = currentTime.getMonth();

    if (dayIndex < 0 || dayIndex >= days.length || !days[dayIndex]) {
      throw new Error("Invalid day index or missing day name");
    }

    if (monthIndex < 0 || monthIndex >= months.length || !months[monthIndex]) {
      throw new Error("Invalid month index or missing month name");
    }

    const dayName = days[dayIndex];
    const day = currentTime.getDate();
    const month = months[monthIndex];
    const year = currentTime.getFullYear();

    if (day < FIRST_DAY_OF_MONTH || day > LAST_DAY_OF_MONTH) {
      throw new Error("Invalid day of month");
    }

    const dateString = `${dayName}, ${day} ${month} ${year}`;

    if (!timeString || !dateString) {
      throw new Error("Failed to generate time or date string");
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
