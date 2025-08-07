import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { Wrapper } from "./styled";

const WeatherButtons = () => {
  return (
    <Wrapper>
      {UI_CONSTANTS.weatherButtons.map((button) => (
        <Button key={button.id} text={button.text} />
      ))}
    </Wrapper>
  );
};

export default WeatherButtons;
