import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"/coverage",
            loader:()=>fetch("/servicecenter.json"),
            element:<Coverage/>
        }
    ]
    
  },
]);
