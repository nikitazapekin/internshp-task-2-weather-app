import { NOT_FOUND_PAGE } from "@constants";
import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routesConfig";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}

      <Route path="*" element={<Navigate to={NOT_FOUND_PAGE} replace />} />
    </Routes>
  );
};

export default AppRoutes;
