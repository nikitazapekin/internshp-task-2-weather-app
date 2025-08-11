import { useSelector } from "react-redux";
import EventCard from "@components/EventCard";
import { UI_CONSTANTS } from "@constants/UI";

import { selectCalendarEvents } from "@store/selectors/calendarEvents";

import { EmptyListText, Wrapper } from "./styled";

const EventList = () => {
  const events = useSelector(selectCalendarEvents);
  const { emptyList } = UI_CONSTANTS;

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
      {events.length === 0 && <EmptyListText>{emptyList}</EmptyListText>}
    </Wrapper>
  );
};

export default EventList;
