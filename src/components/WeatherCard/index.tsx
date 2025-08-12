import { useState } from "react";
import Rainy from "@assets/mobile/foggy.webp";
import Spinner from "@components/Spinner";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, ImageWrapper, Text, Wrapper } from "./styled";
import type { WeatherInterface } from "./types";

const WeatherCard = ({ weatherElement }: WeatherInterface) => {
  const isForecast = isForecastItem(weatherElement);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (isLoaded: boolean) => {
    setImageLoaded(isLoaded);
  };

  return (
    <Wrapper>
      <Text>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Text>
      <ImageWrapper>
        {!imageLoaded && <Spinner />}
        <Image src={Rainy} onLoad={() => handleImageLoad(true)} />
      </ImageWrapper>
      <Degree>{isForecast ? weatherElement.main.temp : weatherElement.dt}</Degree>
    </Wrapper>
  );
};

export default WeatherCard;
