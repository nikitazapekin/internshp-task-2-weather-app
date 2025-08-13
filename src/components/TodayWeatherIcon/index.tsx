import { useState } from "react";
import Spinner from "@components/Spinner";
import { ICONS_CONSTANTS } from "@constants/weatherIcons";

import { Image, Wrapper } from "./styled";

const TodayWeatherIcon = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): undefined => {
    setIsImageLoaded(true);
  };

  return (
    <Wrapper>
      {!isImageLoaded && <Spinner />}
      <Image
        src={ICONS_CONSTANTS.sunny.desktop}
        alt={ICONS_CONSTANTS.sunny.alt}
        onLoad={handleImageLoad}
      />
    </Wrapper>
  );
};

export default TodayWeatherIcon;
