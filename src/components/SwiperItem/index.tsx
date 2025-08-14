import { useState } from "react";
import Foggy from "@assets/desktop/rainy.webp";
import Spinner from "@components/Spinner";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, ImageWrapper, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  const isForecast = isForecastItem(weatherElement);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): undefined => {
    setIsImageLoaded(true);
  };

  return (
    <Wrapper>
      <Title>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Title>
      <ImageWrapper>
        {!isImageLoaded && <Spinner />}
        <Image src={Foggy} onLoad={handleImageLoad} />
      </ImageWrapper>
      <Degree>
        {isForecast ? Math.round(weatherElement.main.temp) : Math.round(weatherElement.dt)}°
      </Degree>
    </Wrapper>
  );
};

export default SwiperItem;
