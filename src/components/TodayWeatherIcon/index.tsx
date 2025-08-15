import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import { ICONS_CONSTANTS } from "@constants/weatherIcons";
import { getWeatherCondition } from "@utils/helpers";

import { selectCurrentWeather } from "@store/selectors";

import { Image, Wrapper } from "./styled";

const TodayWeatherIcon = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const currentWeather = useSelector(selectCurrentWeather);
  const handleImageLoad = (): undefined => {
    setIsImageLoaded(true);
  };
  const { condition } = getWeatherCondition(currentWeather);

  return (
    <Wrapper>
      {!isImageLoaded && <Spinner />}
      <Image
        src={ICONS_CONSTANTS[condition].desktop}
        alt={ICONS_CONSTANTS.sunny.alt}
        onLoad={handleImageLoad}
      />
    </Wrapper>
  );
};

export default TodayWeatherIcon;
