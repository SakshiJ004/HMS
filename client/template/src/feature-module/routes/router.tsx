
import { Navigate, Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./router.link";
import AuthFeature from "../feathure-components/authFeature";
import Feature from "../feathure-components/feature";
import { all_routes } from "./all_routes";


const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Default Redirect to Login Page */}
        <Route path="/" element={<Navigate to={all_routes.loginbasic} />} />

        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ALLRoutes;
