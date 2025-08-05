import { getCurrentTime } from "@utils/helpers/getCurrentTime/getCurrentTime";

import { Time } from "./styled";

const DateInfo = () => {
  const { timeString, dateString } = getCurrentTime();

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
