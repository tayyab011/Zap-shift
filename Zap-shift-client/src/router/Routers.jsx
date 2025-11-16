import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from './../Layout/AuthLayout';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        loader: () => fetch("/servicecenter.json"),
        element: <Coverage />,
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path:"/login",
        element: <Login/>,
      },
      {
       path:"/registration",
        element: <Register/>,
      },
     
    ],
  },
]);
