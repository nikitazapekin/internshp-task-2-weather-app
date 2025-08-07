import SunnyIcon from "@assets/sunny.webp";
import { ICONS_ALTS_CONSTANTS } from "@constants/iconsAlts";

import { Wrapper } from "./styled";

const TodayWeather = () => {
  return (
    <Wrapper>
      <img src={SunnyIcon} alt={ICONS_ALTS_CONSTANTS.sunny} />
    </Wrapper>
  );
};

export default TodayWeather;
