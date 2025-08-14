import { Text, TextWrapper } from "./styled";
import type { TodayWeatherTextProps } from "./types";

const TodayWeatherText = ({ text }: TodayWeatherTextProps) => {
  return (
    <TextWrapper>
      <Text>Today</Text>
      <Text>{Math.round(text)}°</Text>
    </TextWrapper>
  );
};

export default TodayWeatherText;
