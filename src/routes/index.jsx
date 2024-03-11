import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import AppLayout from "@/layout/AppLayaut";
import MainLayout from "@/layout/MainLayout";
import NotFound from "@/components/NotFound";
import Profile from "@/pages/Profile";
import Orders from "@/pages/Orders";
import MyCart from "@/pages/MyCart";
import BrakeDiscsPage from "@/pages/BrakeDiscsPage";
import ShockAbsorbesPage from "@/pages/ShockAbsorbesPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import BlogPage from "@/pages/BlogPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/homepage",
        element: <MainLayout/>,
        children: [
          {
            index: true,
            element: <HomePage/>,
          },
          {
            path: "profile",
            element: <Profile/>,
          },
          {
            path: "orders",
            element: <Orders/>,
          },
          {
            path: "mycart",
            element: <MyCart/>,
          },
          {
            path: "shock-absorbes",
            element: <ShockAbsorbesPage/>,
          },
          {
            path:"brake-discs",
            element: <BrakeDiscsPage/>,
          },
          {
            path:"blogs",
            element: <BlogPage/>,
          },
          {
            path: "product/:name",
            element: <ProductDetailsPage/>,
          },
          
        ]
      },
      {
        path: "*",
        element: <NotFound to="/"/>,
      }
    ]
  }
]);
