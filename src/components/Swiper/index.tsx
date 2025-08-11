import Spinner from "@components/Spinner";
import SwiperItem from "@components/SwiperItem";
import { TOUCH_ID } from "@constants/swiper";
import { useSwiper } from "@hooks/useSwiper";

import { Wrapper } from "./styled";
import type { SwiperProps } from "./types";

const Swiper = ({ weatherElements }: SwiperProps) => {
  //console.log("el", weatherElements.list)
  const { containerRef, handleStart, handleEnd, setIsDragging } = useSwiper();

  if (!weatherElements || !weatherElements.list) return <Spinner />;

  return (
    <Wrapper
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => handleStart(e.touches[TOUCH_ID].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[TOUCH_ID].clientX)}
    >
      {weatherElements.list.map((weatherElement) => (
        <SwiperItem weatherElement={weatherElement} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
