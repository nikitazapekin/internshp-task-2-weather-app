import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import TodayWeatherIcon from "@components/TodayWeatherIcon";
import TodayWeatherText from "@components/TodayWeatherText";

import { selectCurrentCity, selectCurrentWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const TodayWeather = () => {
  const { data } = useSelector(selectCurrentWeather);
  const { city } = useSelector(selectCurrentCity);

  if (!data || !data.main) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TodayWeatherIcon />
      <TodayWeatherText text={data.main.temp} city={city} />
    </Wrapper>
  );
};

export default TodayWeather;
