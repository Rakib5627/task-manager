import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Join/Login";
import SignUp from "../Pages/Join/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login> ,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp> ,
        },
      ],
    },
  ]);