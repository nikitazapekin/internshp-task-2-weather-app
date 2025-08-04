import { logout } from "@store/actions/authActions";
import type { RootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username: currentUser } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>
        {currentUser} {isAuthenticated}{" "}
      </button>
    </div>
  );
};
