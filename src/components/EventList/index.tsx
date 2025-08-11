import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import { UI_CONSTANTS } from "@constants/UI";
import { formatTime } from "@utils/helpers/formatTime/formatTime";

import { selectCalendarEvents, selectCalendarEventsLoading } from "@store/selectors/calendarEvents";

import { EmptyListText, EventCard, Text, Time, Wrapper } from "./styled";

const EventList = () => {
  const events = useSelector(selectCalendarEvents);
  const isLoading = useSelector(selectCalendarEventsLoading);
  const { emptyList } = UI_CONSTANTS;

  return (
    <Wrapper>
      {events.map((item) => {
        const {
          start: { dateTime },
          summary,
        } = item;

        return (
          <EventCard key={dateTime}>
            <Time>{formatTime(dateTime)}</Time>
            <Text>{summary}</Text>
          </EventCard>
        );
      })}
      {events.length === 0 && !isLoading && <EmptyListText>{emptyList}</EmptyListText>}
      {isLoading && <Spinner />}
    </Wrapper>
  );
};

export default EventList;
