import SwiperItem from "@components/SwiperItem";
import { TOUCH_ID } from "@constants/swiper";
import { useSwiper } from "@hooks/useSwiper";

import { Wrapper } from "./styled";

const weatherElements = [
  { id: 1, day: "Monday", degrees: "0°" },
  { id: 2, day: "Tuesday", degrees: "1°" },
  { id: 3, day: "Wednesday", degrees: "2°" },
  { id: 4, day: "Thursday", degrees: "3°" },
  { id: 5, day: "Friday", degrees: "4°" },
  { id: 6, day: "Saturday", degrees: "5°" },
  { id: 7, day: "Sunday", degrees: "6°" },
  { id: 8, day: "Monday", degrees: "7°" },
  { id: 9, day: "Tuesday", degrees: "8°" },
  { id: 10, day: "Wednesday", degrees: "9°" },
  { id: 11, day: "Thursday", degrees: "10°" },
  { id: 12, day: "Friday", degrees: "11°" },
];

const Swiper = () => {
  const { containerRef, handleStart, handleEnd, setIsDragging } = useSwiper();

  return (
    <Wrapper
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => handleStart(e.touches[TOUCH_ID].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[TOUCH_ID].clientX)}
    >
      {weatherElements.map((weatherElement) => (
        <SwiperItem weatherElement={weatherElement} key={weatherElement.id} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
