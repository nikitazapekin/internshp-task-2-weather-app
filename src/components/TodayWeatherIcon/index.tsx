import SunnyIcon from "@assets/sunny.webp";
import { ICONS_ALTS_CONSTANTS } from "@constants/iconsAlts";

import { Image, Wrapper } from "./styled";

const TodayWeatherIcon = () => {
  return (
    <Wrapper>
      <Image src={SunnyIcon} alt={ICONS_ALTS_CONSTANTS.sunny} />
    </Wrapper>
  );
};

export default TodayWeatherIcon;
