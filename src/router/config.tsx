import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Recruitment from "../pages/recruitment/page";
import Workspace from "../pages/workspace/page";

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
    path: "/workspace",
    element: <Workspace />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
