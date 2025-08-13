import { Route, Routes } from "react-router-dom";
import { routes } from "@components/AppRouter/routesConfig";

import NotFoundPage from "@pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
