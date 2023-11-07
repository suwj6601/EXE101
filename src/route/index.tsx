import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import UploadImage from "@/page/UploadImage";
import DemoPage from "@/page/DemoPage";

export interface IRoute {
  exact: boolean;
  isPrivateRoute: boolean;
  path: string;
  element: ReactNode;
}

const routesConfig: IRoute[] = [
  {
    exact: true,
    isPrivateRoute: false,
    path: "/",
    element: <DemoPage />,
  },
];

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((routeInfo: IRoute, index: number) => {
          if (routeInfo?.isPrivateRoute) {
            return (
              <Route
                key={index}
                path={routeInfo.path}
                element={<RequireAuth>{routeInfo?.element}</RequireAuth>}
              />
            );
          }

          return <Route key={index} {...routeInfo} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
