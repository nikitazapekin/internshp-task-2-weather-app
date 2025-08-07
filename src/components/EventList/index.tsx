import EventCard from "@components/EventCard";

import { Wrapper } from "./styled";

const events = [
  { id: 1, time: "9:00", text: "English class" },
  { id: 2, time: "9:00", text: "English class" },
  { id: 3, time: "9:00", text: "English class" },
];
const EventList = () => {
  return (
    <Wrapper>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Wrapper>
  );
};

export default EventList;
