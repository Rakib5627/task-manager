import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import UseTasks from "../../Hooks/UseTasks";
import { useForm } from "react-hook-form";

const AddTask = () => {


    const { user } = useContext(AuthContext);
    console.log(user)

    const axiosSecure = useAxiosSecure();
    const [, refetch] = UseTasks();
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        event.preventDefault();

        const form = event.target;
        const task = form.task.value;
        const description = form.description.value;
        const date = form.date.value;
        const priority = form.priority.value;
        const status = 'todo'
        console.log(task , description , date , priority)

        if (user && user.email) {
            const taskItem = {
                email: user.email,
                task: data.task,
                description: data.description,
                date: data.date,
                priority: data.priority,
                status,
            }

            axiosSecure.post('/tasks', taskItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "added to your task",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        
                       refetch();
                    }

                })
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
                        <select  {...register('priority', { required: true })}
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
                            {...register('date', { required: true })}
                            />
                    </div>
                    

                </div>
                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="description"></textarea>
                </div>


                <div className="text-center mt-5">
                <button className="btn bg-purple-400 hover:bg-purple-700">
                    Add Task
                </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddTask;