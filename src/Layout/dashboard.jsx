import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaPlusCircle, FaRegFileAlt, FaUserAlt } from "react-icons/fa";
import UseTasks from "../Hooks/UseTasks";

const Dashboard = () => {

    const [task] = UseTasks()

    return (
        <div className="">
            <div className=" navbar bg-purple-200">


                <div className="navbar-start">
                    <p>User Dashboard</p>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal gap-4">
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                        <li className="indicator">
                            <NavLink to="/dashboard/tasks">
                                <FaRegFileAlt />Task<span className="indicator-item m-2 text-white">{task.length}</span>
                                </NavLink>
                        </li>


                        <li>
                            <NavLink to="/dashboard/addtasks">
                                <FaPlusCircle />
                                Add a task</NavLink>
                        </li>


                        <li>
                            <NavLink to="/dashboard/profile">
                                Profile<FaUserAlt />
                            </NavLink>
                        </li>

                    </ul>
                </div>


            </div>

            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;