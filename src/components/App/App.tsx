import { searchElasticQuery } from "@store/actions/elasticSearch";
import { selectElasticSearch } from "@store/selectors/elasticSearchSelectors";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectElasticSearch);

  const handleElasticSearch = () => {
    dispatch(searchElasticQuery("11"));
  };

  return (
    <div>
      <button onClick={handleElasticSearch}>test</button>

      {query}
    </div>
  );
};
