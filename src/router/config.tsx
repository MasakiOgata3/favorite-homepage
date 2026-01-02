import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Recruitment from "../pages/recruitment/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sr-recruitment",
    element: <Recruitment />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
