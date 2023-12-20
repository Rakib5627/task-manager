import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
    <li className=""><NavLink to="/">Home</NavLink></li>
    <li className=""><NavLink to="/task-list">Task List</NavLink></li>
    <li className=""><NavLink to="/contactUs">Contact Us</NavLink></li>
</>

    return (
        <div className="navbar  max-w-screen-xl bg-purple-100 rounded-b-lg">

        <div className="navbar-start">
            <Link className="normal-case text-lg md:text-3xl font-semibold">TASK MANAGEMENT</Link>
        </div>

        <div className="navbar-end">
            <div className="dropdown">
                <label tabIndex={0} className="btn lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                    {navLinks}
                </ul>
            </div>

        </div>

        
    </div>
    );
};

export default Navbar;