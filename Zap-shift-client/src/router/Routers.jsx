import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "./../Layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendpercel/SendParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyPercels from "./../pages/dashboards/MyPercels";
import Payment from "../pages/dashboards/Payment/Payment";
import PaymentSuccess from "../pages/dashboards/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboards/Payment/PaymentCancelled";
import PaymentHistory from "../pages/dashboards/Payment/PaymentHistory";
import ApproveRiders from "../pages/dashboards/ApproveRiders/ApproveRiders";
import ApproveUsers from "../pages/dashboards/ApproveUsers";
import AdminPrivate from "./AdminPrivate";
import Assignriders from "../pages/dashboards/Assignriders";

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
        loader: () => fetch("/servicecenter.json"),
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
            <PaymentCancelled />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminPrivate>
            <Assignriders/>
          </AdminPrivate>
        ),
      },
      {
        path: "approve-riders",
        element: (
          <AdminPrivate>
            <ApproveRiders />
          </AdminPrivate>
        ),
      },
      {
        path: "approve-users",
        element: (
          <AdminPrivate>
            <ApproveUsers />
          </AdminPrivate>
        ),
      },
    ],
  },
]);
