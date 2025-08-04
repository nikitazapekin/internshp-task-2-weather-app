import { fetchWeatherRequest } from "@store/actions/weatherActions";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  const handleElasticSearch = () => {
    dispatch(fetchWeatherRequest());
  };

  return (
    <div>
      <button onClick={handleElasticSearch}>test</button>
    </div>
  );
};
