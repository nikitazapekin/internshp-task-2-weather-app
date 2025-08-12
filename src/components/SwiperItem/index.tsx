import Foggy from "@assets/desktop/rainy.webp";
import type { ForecastItem } from "@types/apiTypes";
import { extractTime } from "@utils/helpers/extractHours/extractHours";

import { Degree, Image, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

function isForecastItem(item: unknown): item is ForecastItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "dt_txt" in item &&
    "main" in item &&
    typeof (item as ForecastItem).main.temp === "number"
  );
}

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  const isForecast = isForecastItem(weatherElement);

  return (
    <Wrapper>
      <Title>{isForecast ? extractTime(weatherElement.dt_txt) : weatherElement.day}</Title>
      <Image src={Foggy} />
      <Degree>{isForecast ? weatherElement.main.temp : weatherElement.temp}</Degree>
    </Wrapper>
  );
};

export default SwiperItem;
