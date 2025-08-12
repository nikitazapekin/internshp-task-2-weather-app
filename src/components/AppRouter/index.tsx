import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "@components/AppRouter/routesConfig";
import { NOT_FOUND_PAGE } from "@constants";

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
