import WeatherCard from "@components/WeatherCard";

import { Wrapper } from "./styled";

const weatherElements = [
  { id: 1, day: "Monday", degrees: "0°" },
  { id: 2, day: "Tuesday", degrees: "1°" },
  { id: 3, day: "Wednesday", degrees: "2°" },
  { id: 4, day: "Thursday", degrees: "3°" },
  { id: 5, day: "Friday", degrees: "4°" },
  { id: 6, day: "Saturday", degrees: "5°" },
  { id: 7, day: "Sunday", degrees: "6°" },
  { id: 8, day: "Monday", degrees: "7°" },
  { id: 9, day: "Tuesday", degrees: "8°" },
  { id: 10, day: "Wednesday", degrees: "9°" },
  { id: 11, day: "Thursday", degrees: "10°" },
  { id: 12, day: "Friday", degrees: "11°" },
];

const WeatherCardGrid = () => {
  return (
    <Wrapper>
      {weatherElements.map((weatherElement) => (
        <WeatherCard key={weatherElement.id} weatherElement={weatherElement} />
      ))}
    </Wrapper>
  );
};

export default WeatherCardGrid;
