import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from './../Layout/AuthLayout';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendpercel/SendParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyPercels from './../pages/dashboards/MyPercels';

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
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
      },
      {
        path: "/sendparcel",
        loader: () => fetch("/servicecenter.json"),
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
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
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: 
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ,
    children: [
      {
        path: "mypercels",
        element: <MyPercels />,
      },
    ],
  },
]);
