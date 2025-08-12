import Foggy from "@assets/desktop/rainy.webp";
import { extractTime } from "@utils/helpers/extractHours/extractHours";
import { isForecastItem } from "@utils/helpers/isForecastItem/isForecastItem";

import { Degree, Image, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  const isForecast = isForecastItem(weatherElement);

  return (
    <Wrapper>
      <Title>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Title>
      <Image src={Foggy} />
      <Degree>{isForecast ? weatherElement.main.temp : weatherElement.dt}</Degree>
    </Wrapper>
  );
};

export default SwiperItem;
