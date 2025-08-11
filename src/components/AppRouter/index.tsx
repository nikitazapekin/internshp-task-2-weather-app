import { NOT_FOUND_PAGE } from "@constants";
import { routes } from "@utils/router/routesConfig";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={NOT_FOUND_PAGE} replace />} />
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
