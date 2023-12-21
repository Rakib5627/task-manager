

const Home = () => {
    return (
        <div>
            <div className=" mt-20 text-center">
                <div className="text-6xl font-bold ">
                    <p>Organize Your Work and Life</p>
                    <p>Manage Your Task And Time</p>
                </div>

                <p className="text-3xl font-semibold text-slate-600 my-8">Become organized and professional </p>
                <button className="text-xl p-3 hover:bg-purple-300 border-black border-t-2 border-x-4 border-b-8 rounded-full ">Let’s Explore</button>
            </div>
            <div>
                <p className=" text-5xl font-bold text-center my-12">One unified workspace for all things project</p>
              
            </div>
            <ul className="timeline timeline-vertical">
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
        </div>
    );
};

export default Home;