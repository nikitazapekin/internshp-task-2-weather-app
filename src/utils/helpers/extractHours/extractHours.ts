export function extractHours(dateTimeString: string): string {
  const date = new Date(dateTimeString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}
