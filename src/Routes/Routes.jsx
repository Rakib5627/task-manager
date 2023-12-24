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
import ContactUs from "../Pages/Home/ContactUs";

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
          path: "/contactUs",
          element: <ContactUs></ContactUs> ,
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
          loader: ({params}) => fetch(`https://task-manager-server-mivils5xl-rakib5627.vercel.app/tasks/${params.id}`)
        },
       
      ],
    },
  ]);