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
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../Pages/Dashboard/UpdateTask";

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
        {
          path: 'updateTask/:id',
          element: <UpdateTask></UpdateTask>,
          loader: ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
        },
       
      ],
    },
  ]);