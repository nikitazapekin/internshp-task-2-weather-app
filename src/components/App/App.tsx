import { fetchWeatherRequest } from "@store/actions/weatherActions";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const handleGet = () => {
    dispatch(fetchWeatherRequest());
  };

  console.log(process.env.BASE_URL);

  return <div onClick={handleGet}>df</div>;
};
