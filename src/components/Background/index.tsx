import { useSelector } from "react-redux";
import { BACKGROUND_CONSTANTS } from "@constants/background";
import { getWeatherCondition } from "@utils/helpers";

import { selectCurrentWeather } from "@store/selectors";

import { Image } from "./styled";

const Background = () => {
  const currentWeather = useSelector(selectCurrentWeather);

  if (!currentWeather) return;

  const { condition } = getWeatherCondition(currentWeather);

  console.log(BACKGROUND_CONSTANTS[condition].src);

  return (
    <Image src={BACKGROUND_CONSTANTS[condition].src} alt={BACKGROUND_CONSTANTS[condition].alt} />
  );
};

export default Background;
