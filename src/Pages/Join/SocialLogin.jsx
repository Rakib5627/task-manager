import { FaGithub, FaGoogle } from "react-icons/fa";

import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SocialLogin = () => {
    const { signInWithGoogle ,signInWithGithub } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }


    return (
        <div className="p-8">
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
                <button onClick={handleGithubSignIn} className="btn">
                    <FaGithub className="mr-2"></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;