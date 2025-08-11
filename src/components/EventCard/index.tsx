import { formatTime } from "@utils/helpers/formatTime/formatTime";

import type { CalendarEvent } from "@interfaces/googleCalendarTypes";

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
