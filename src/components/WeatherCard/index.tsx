import { useState } from "react";
import Rainy from "@assets/mobile/foggy.webp";
import Spinner from "@components/Spinner";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, ImageWrapper, Text, Wrapper } from "./styled";
import type { WeatherInterface } from "./types";

const WeatherCard = ({ weatherElement }: WeatherInterface) => {
  const isForecast = isForecastItem(weatherElement);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): undefined => {
    setIsImageLoaded(true);
  };

  return (
    <Wrapper>
      <Text>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Text>
      <ImageWrapper>
        {!isImageLoaded && <Spinner />}
        <Image src={Rainy} onLoad={handleImageLoad} />
      </ImageWrapper>
      <Degree>
        {isForecast ? Math.round(weatherElement.main.temp) : Math.round(weatherElement.dt)}°
      </Degree>
    </Wrapper>
  );
};

export default WeatherCard;
