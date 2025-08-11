import Foggy from "@assets/desktop/rainy.webp";
import { extractHours } from "@utils/helpers/extractHours/extractHours";

import { Degree, Image, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  return (
    <Wrapper>
      <Title>{extractHours(weatherElement.dt_txt)}</Title>
      <Image src={Foggy} />
      <Degree>{weatherElement.main.temp}</Degree>
    </Wrapper>
  );
};

export default SwiperItem;
