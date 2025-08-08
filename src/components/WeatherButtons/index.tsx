import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { Wrapper } from "./styled";

const WeatherButtons = () => {
  const { weatherButtons } = UI_CONSTANTS;

  return (
    <Wrapper>
      {weatherButtons.map(({ id, text }) => (
        <Button key={id} text={text} />
      ))}
    </Wrapper>
  );
};

export default WeatherButtons;
