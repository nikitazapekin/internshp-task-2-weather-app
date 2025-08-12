import { useState } from "react";
import Foggy from "@assets/desktop/rainy.webp";
import Spinner from "@components/Spinner";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, ImageWrapper, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  const isForecast = isForecastItem(weatherElement);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (isLoaded: boolean) => {
    setImageLoaded(isLoaded);
  };

  return (
    <Wrapper>
      <Title>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Title>
      <ImageWrapper>
        {!imageLoaded && <Spinner />}
        <Image src={Foggy} onLoad={() => handleImageLoad(true)} />
      </ImageWrapper>
      <Degree>{isForecast ? weatherElement.main.temp : weatherElement.dt}</Degree>
    </Wrapper>
  );
};

export default SwiperItem;
