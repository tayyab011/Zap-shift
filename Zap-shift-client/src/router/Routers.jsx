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
import Payment from "../pages/dashboards/Payment/Payment";
import PaymentSuccess from "../pages/dashboards/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboards/Payment/PaymentCancelled";

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
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mypercels",
        element: (
          <PrivateRoute>
            <MyPercels />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-cancelled",
        element: (
          <PrivateRoute>
            <PaymentCancelled/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
