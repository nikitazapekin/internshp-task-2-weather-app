import Rainy from "@assets/mobile/foggy.webp";

import { Degree, Image, Text, Wrapper } from "./styled";
import type { WeatherInterface } from "./types";

const WeatherCard = ({ weatherElement }: WeatherInterface) => {
  return (
    <Wrapper>
      <Text>{weatherElement.day}</Text>
      <Image src={Rainy} />
      <Degree>{weatherElement.degrees}</Degree>
    </Wrapper>
  );
};

export default WeatherCard;
