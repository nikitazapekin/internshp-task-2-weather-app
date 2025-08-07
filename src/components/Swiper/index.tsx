import SwiperItem from "@components/SwiperItem";
import { useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    setIsDragging(false);

    const threshold = 0.01;
    const diffX = clientX - startX;

    if (diffX < -threshold) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else if (diffX > threshold) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      {weatherElements.map((weatherElement) => (
        <SwiperItem weatherElement={weatherElement} key={weatherElement.id} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
