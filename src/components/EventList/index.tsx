import { useSelector } from "react-redux";
import EventCard from "@components/EventCard";

import { selectCalendarEvents } from "@store/selectors/calendarEvents";

import { Wrapper } from "./styled";

const EventList = () => {
  const events = useSelector(selectCalendarEvents);

  return (
    <Wrapper>
      {events.map((item) => (
        <EventCard
          id={item.id}
          summary={item.summary}
          start={{
            dateTime: item.start.dateTime,
            date: item.start.date,
          }}
          end={{
            dateTime: item.end.dateTime,
            date: item.end.date,
          }}
          description={item.description}
        />
      ))}
    </Wrapper>
  );
};

export default EventList;
