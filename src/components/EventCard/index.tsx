import { Text, Time, Wrapper } from "./styled";
import type { EventCardInterface } from "./types";

const EventCard = ({ event }: EventCardInterface) => {
  return (
    <Wrapper>
      <Time>{event.time}</Time>
      <Text>{event.text}</Text>
    </Wrapper>
  );
};

export default EventCard;
