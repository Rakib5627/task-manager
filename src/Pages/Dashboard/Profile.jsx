import { useLoaderData } from "react-router-dom";



const Profile = () => {
  
    const user = useLoaderData();
    console.log(user)
  
    return (
        <div>
            
        </div>
    );
};

export default Profile;