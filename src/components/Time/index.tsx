import { getCurrentTime } from "@utils/helpers/getCurrentTime/getCurrentTime";

import { Time } from "./styled";

const DateInfo = () => {
  const { timeString, dateString, error } = getCurrentTime();

  if (error) {
    <Time>{error}</Time>;
  }

  return (
    <>
      <Time>
        {timeString} <br />
        {dateString}
      </Time>
    </>
  );
};

export default DateInfo;
