import { logout } from "@store/actions/authActions";
import type { RootState } from "@store/index";
import { fetchTodoRequest } from "@store/selectors/todoActions";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username: currentUser } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleFetchTodo = () => {
    dispatch(fetchTodoRequest());
  };

  return (
    <div>
      <button onClick={handleLogout}>
        {currentUser} {isAuthenticated}{" "}
      </button>
      <button onClick={handleFetchTodo}>fetch</button>
    </div>
  );
};
