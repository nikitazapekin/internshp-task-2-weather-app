import { ERROR_CONSTANTS } from "@constants";
import WeatherAppError from "@errors/weatherAppError";
import useTime from "@hooks/useTime";

import { Time } from "./styled";

const DateInfo = () => {
  const { timeString, dateString, error } = useTime();

  const { TITLE } = ERROR_CONSTANTS.API_ERRORS;

  if (error) {
    throw new WeatherAppError(TITLE, error);
  }

  return (
    <Time>
      {timeString} <br />
      {dateString}
    </Time>
  );
};

export default DateInfo;
