import Foggy from "@assets/desctop/rainy.webp";

import { Degree, Image, Title, Wrapper } from "./styled";
import type { SwiperItemTypes } from "./types";

const SwiperItem = ({ weatherElement }: SwiperItemTypes) => {
  return (
    <Wrapper>
      <Title>{weatherElement.day}</Title>
      <Image src={Foggy} />
      <Degree>{weatherElement.degrees}</Degree>
    </Wrapper>
  );
};

export default SwiperItem;
