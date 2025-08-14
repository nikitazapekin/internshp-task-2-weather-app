import { Text, TextWrapper } from "./styled";
import type { TodayWeatherTextProps } from "./types";

const TodayWeatherText = ({ text, city }: TodayWeatherTextProps) => {
  return (
    <TextWrapper>
      <Text>Today</Text>
      <Text>{Math.round(text)}°</Text>
      <Text>{city}</Text>
    </TextWrapper>
  );
};

export default TodayWeatherText;
