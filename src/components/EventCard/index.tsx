import type { CalendarEvent } from "@interfaces/googleCalendarTypes";

import { Text, Time, Wrapper } from "./styled";

const EventCard = ({ description, start }: CalendarEvent) => {
  return (
    <Wrapper>
      <Time>{start.dateTime}</Time>
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default EventCard;
