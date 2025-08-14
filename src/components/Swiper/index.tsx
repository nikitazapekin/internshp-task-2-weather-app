import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import SwiperItem from "@components/SwiperItem";
import { TimeOfWeather } from "@constants";
import { TOUCH_ID } from "@constants/swiper";
import { useSwiper } from "@hooks/useSwiper";
import { transformWeatherData } from "@utils/helpers/transformWeatherResponse/transformWeatherResponse";

import { selectCitiesSuggestions, selectWeather } from "@store/selectors";

import { Wrapper } from "./styled";
import type { SwiperProps } from "./types";

const Swiper = ({ weatherElements }: SwiperProps) => {
  const { containerRef, handleStart, handleEnd, setIsDragging } = useSwiper();
  const { timeOfWeather } = useSelector(selectWeather);
  const { isElasticActive } = useSelector(selectCitiesSuggestions);

  if (!weatherElements && isElasticActive) return <Spinner />;

  const weatherArray =
    timeOfWeather && timeOfWeather === TimeOfWeather.WEEKLY
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
        <SwiperItem weatherElement={weatherElement} key={weatherElement.dt_txt} />
      ))}
    </Wrapper>
  );
};

export default Swiper;
