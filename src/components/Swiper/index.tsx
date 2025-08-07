import SwiperItem from "@components/SwiperItem";

import { Wrapper } from "./styled";

const weatherElements = [
  { id: 1, day: "monday", degrees: "0°" },
  { id: 2, day: "monday", degrees: "0°" },
  { id: 3, day: "monday", degrees: "0°" },
  { id: 4, day: "monday", degrees: "0°" },
  { id: 5, day: "monday", degrees: "0°" },
  { id: 6, day: "monday", degrees: "0°" },
  { id: 7, day: "monday", degrees: "0°" },
  { id: 8, day: "monday", degrees: "0°" },
  { id: 9, day: "monday", degrees: "0°" },
  { id: 10, day: "monday", degrees: "0°" },
  { id: 11, day: "monday", degrees: "0°" },
  { id: 12, day: "monday", degrees: "0°" },
];
const Swiper = () => {
  return (
    <Wrapper>
      {weatherElements.map((weatherElement) => (
        <SwiperItem weatherElement={weatherElement} key={weatherElement.id} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
