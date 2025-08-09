import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routesConfig";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
