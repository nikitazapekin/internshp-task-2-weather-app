import useTime from "@hooks/useTime";

import { Time } from "./styled";

const DateInfo = () => {
  const { timeString, dateString, error } = useTime();

  if (error) {
    return <Time>{error}</Time>;
  }

  return (
    <Time>
      {timeString} <br />
      {dateString}
    </Time>
  );
};

export default DateInfo;
