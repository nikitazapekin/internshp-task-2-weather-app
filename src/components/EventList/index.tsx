import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import { ERROR_CONSTANTS, UI_CONFIG } from "@constants";
import { UI_CONSTANTS } from "@constants/UI";
import WeatherAppError from "@errors/weatherAppError";
import { formatTime } from "@utils/helpers/formatTime/formatTime";

import { selectCalendarEvents } from "@store/selectors";

import { EmptyListText, EventCard, Text, Time, Wrapper } from "./styled";

const EventList = () => {
  const { events, loading, error } = useSelector(selectCalendarEvents);
  const { emptyList } = UI_CONSTANTS;
  const { RELATIVE } = UI_CONFIG.SUGGESTIONS;
  const { TITLE } = ERROR_CONSTANTS.API_ERRORS;

  if (error) {
    throw new WeatherAppError(TITLE, error);
  }

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
      {events.length === 0 && !loading && <EmptyListText>{emptyList}</EmptyListText>}
      {loading && <Spinner position={RELATIVE} />}
    </Wrapper>
  );
};

export default EventList;
