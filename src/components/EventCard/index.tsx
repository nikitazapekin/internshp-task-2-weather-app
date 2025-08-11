import type { CalendarEvent } from "@types/googleCalendarTypes";
import { formatTime } from "@utils/helpers/formatTime/formatTime";

import { Text, Time, Wrapper } from "./styled";

const EventCard = ({ start, summary }: CalendarEvent) => {
  return (
    <Wrapper>
      <Time>{formatTime(start.dateTime)}</Time>
      <Text>{summary}</Text>
    </Wrapper>
  );
};

export default EventCard;
