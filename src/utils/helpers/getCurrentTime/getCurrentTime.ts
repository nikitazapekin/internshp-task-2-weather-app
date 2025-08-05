import { days, months } from "@constants";

export const getCurrentTime = () => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const dayName = days[currentTime.getDay()];
  const day = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  return { timeString, dateString };
};
