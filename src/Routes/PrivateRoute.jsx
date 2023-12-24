import { Navigate, useLocation } from "react-router";

import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center mt-32">
            <span className="loading md:w-32 text-purple-600 loading-ring loading-lg"></span>
            </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};
PrivateRoute.propTypes = {
    children : PropTypes.node
}
export default PrivateRoute;