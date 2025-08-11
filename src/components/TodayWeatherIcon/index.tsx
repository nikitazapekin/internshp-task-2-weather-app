import { ICONS_CONSTANTS } from "@constants/weatherIcons";

import { Image, Wrapper } from "./styled";

const TodayWeatherIcon = () => {
  return (
    <Wrapper>
      <Image src={ICONS_CONSTANTS.sunny.desktop} alt={ICONS_CONSTANTS.sunny.alt} />
    </Wrapper>
  );
};

export default TodayWeatherIcon;
