import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    text: 'Login Successful',
                    timer: 1000

                });
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {

                const errorCode = error.code;


                if (errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password") {
                    alert("Incorrect email or password");
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: 'Incorrect email or password',

                    });
                }
            })
    }




    return (
        <div className=" text-my-blue bg-purple-50 mx-auto md:w-1/2 shadow-xl py-5">
            <h2 className="text-3xl font-semibold my-10 text-center">Please Login</h2>
            <form onSubmit={handleLogin} className=" w-full md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="email@gmail.com" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="password..." className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-my-pink hover:bg-my-red">Login</button>
                </div>
            </form>
            <p className="text-center my-4">Do not have an account <Link className="text-blue-600 font-bold" to="/signup">Register</Link></p>
            <div className="border border-x-1 opacity-20"></div>
             <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;