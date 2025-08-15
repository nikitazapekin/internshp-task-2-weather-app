import { useState } from "react";
import Spinner from "@components/Spinner";
import { ICONS_CONSTANTS } from "@constants/weatherIcons";
import { getWeatherCondition } from "@utils/helpers";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, ImageWrapper, Text, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const WeatherCard = ({ weatherElement }: SwiperItemTypes) => {
  const isForecast = isForecastItem(weatherElement);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): undefined => {
    setIsImageLoaded(true);
  };
  const { condition } = getWeatherCondition(weatherElement);

  return (
    <Wrapper>
      <Text>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Text>
      <ImageWrapper>
        {!isImageLoaded && <Spinner />}
        <Image src={ICONS_CONSTANTS[condition].mobile} onLoad={handleImageLoad} />
      </ImageWrapper>
      <Degree>
        {isForecast ? Math.round(weatherElement.main.temp) : Math.round(weatherElement.dt)}°
      </Degree>
    </Wrapper>
  );
};

export default WeatherCard;
