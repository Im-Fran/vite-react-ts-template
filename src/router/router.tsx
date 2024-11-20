import {createBrowserRouter} from "react-router-dom";
import Layout from "@/components/layout/layout.tsx";
import Home from "@/pages/home/home.tsx";

const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      /* Home */
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];


const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;