
import { Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./router.link";
import AuthFeature from "../feathure-components/authFeature";
import Feature from "../feathure-components/feature";
import { all_routes } from "./all_routes";
import AuthCallback from "../components/auth/callback/AuthCallback";
import HomePage from "../components/pages/home/homePage";


const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Default Redirect to Home Page */}
        <Route path="/" element={<HomePage />} />

        <Route path={all_routes.authCallback} element={<AuthCallback />} />

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
