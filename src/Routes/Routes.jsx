import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Join/Login";
import SignUp from "../Pages/Join/SignUp";
import Dashboard from "../Layout/dashboard";
import Profile from "../Pages/Dashboard/Profile";
import Tasks from "../Pages/Dashboard/Tasks";
import AddTask from "../Pages/Dashboard/AddTask";

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
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "profile",
          element: <Profile></Profile>,
        },
        {
          path: "tasks",
          element: <Tasks></Tasks>,
        },
        {
          path: "addtasks",
          element: <AddTask></AddTask>,
        },
       
      ],
    },
  ]);