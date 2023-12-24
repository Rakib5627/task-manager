import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { useContext,} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
// import DatePicker from "react-date-picker";


const UpdateTask = () => {

    const {task, description, date, priority, _id} = useLoaderData();
    // const [datee, setDatee] = useState(null);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
   
        if (user && user.email) {
            const taskItem = {
                email: user.email,
                task: data.task,
                description: data.description,
                date: data.date,
                priority: data.priority,
            }

            const taskRes = await axiosSecure.patch(`/tasks/${_id}`, taskItem);
            console.log(taskRes.data)
            if(taskRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${task} is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    


    return (
        <div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={task}
                        placeholder="Task Name"
                        {...register('task', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Priority*</span>
                        </label>
                        <select defaultValue={priority} {...register('priority', { required: true })}
                            className="select select-bordered w-full">
                            <option value="Low">Low</option>
                                <option value="Medium">Moderate</option>
                                <option value="High">High</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        
                        <input
                            type="date"
                            defaultValue={date}
                            
                            {...register('date', { required: true })}
                            />
                    </div>
                    

                </div>
                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="description"></textarea>
                </div>


                <div className="text-center mt-5">
                <button className="btn bg-purple-400 hover:bg-purple-700">
                    Update Task
                </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateTask;