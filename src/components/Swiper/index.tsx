import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import SwiperItem from "@components/SwiperItem";
import { TOUCH_ID } from "@constants/swiper";
import { useSwiper } from "@hooks/useSwiper";
import { transformWeatherData } from "@utils/helpers/transformWeatherResponse/transformWeatherResponse";

import { selectTimeOfWeather } from "@store/selectors/weklyWeatherSelector";

import { Wrapper } from "./styled";
import type { SwiperProps } from "./types";

const Swiper = ({ weatherElements }: SwiperProps) => {
  const { containerRef, handleStart, handleEnd, setIsDragging } = useSwiper();
  const timeOfWeather = useSelector(selectTimeOfWeather);

  if (!weatherElements || !weatherElements.list) return <Spinner />;

  const weatherArray =
    timeOfWeather && timeOfWeather === "weekly"
      ? transformWeatherData(weatherElements)
      : weatherElements.list;

  return (
    <Wrapper
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => handleStart(e.touches[TOUCH_ID].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[TOUCH_ID].clientX)}
    >
      {weatherArray.map((weatherElement) => (
        <SwiperItem weatherElement={weatherElement} key={weatherElement.dt} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
