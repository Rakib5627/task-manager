import { Link } from "react-router-dom";
import banner from "../../assets/pexels-andrea-piacquadio-3760613.jpg"
import Integrations from "./Integrations";

const Home = () => {
    return (
        <div>
            <div className=" mt-20 pt-48 pb-36 text-center" style={{ backgroundImage: `url(${banner})` ,
        backgroundSize: 'cover', opacity: '50' }}>
                <div className="text-6xl text-purple-700 font-bold ">
                    <p>Organize Your Work and Life</p>
                    <p>Manage Your Task And Time</p>
                </div>

                <p className="text-3xl font-semibold text-purple-500 my-8">Become organized and professional </p>
                <button className="text-xl p-3 hover:bg-purple-300 bg-purple-100 border-black border-t-2 border-x-4 border-b-8 rounded-full "><Link to="/dashboard/tasks" >Let’s Explore</Link></button>
            </div>
            <div className="mt-32">
                <p className=" text-5xl font-bold text-center">One unified workspace for all things project</p>
                <hr />
              
            </div>
            <ul className="timeline mt-12 timeline-vertical">
                <li>
                    <div className="timeline-start timeline-box">Create own field to capture data for your task.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end timeline-box">Add custom fields in task to input data based on the project.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box">So people of all profession can organize there work here.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end timeline-box">Get relevant information of your task and view them in one place.</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box">Get all requests turn into task to get easily allocate and follow up on requests.</div>
                </li>
            </ul>


            <div>
                <h3 className="text-4xl text-center font-bold">Our Ingredients</h3>
                <Integrations></Integrations>
            </div>
        </div>
    );
};

export default Home;