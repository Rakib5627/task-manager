import { useContext, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const AddTask = () => {


    const [date, setDate] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(user)

    const handleTaskAdd = async (event) => {
        event.preventDefault();

        const form = event.target;
        const task = form.task.value;
        const description = form.description.value;
        const date = form.date.value;
        const priority = form.priority.value;

        console.log(task , description , date , priority)

    }


    return (
        <div>
            <div className='mt-5'>
                <form onSubmit={handleTaskAdd} className='grid grid-cols-3 gap-y-4 border border-purple-500 p-5' action="">


                    <div className="">
                    <label className="label">
                            <span className="label-text">Task Name</span>
                        </label>
                        <input type="text" name="task" placeholder="Task Name" className=" border-black border" />
                    </div>
                    

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">
                            <select type="text" name="priority" placeholder="" className="border-black border">
                                <option value="Low">Low</option>
                                <option value="Medium">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <DatePicker name="date" value={date} onChange={date => setDate(date)}
                            minDate={new Date()}
                        />
                    </div>

                    <div className=" col-span-3 grow">
                        <input type="text" name="description" placeholder="Task Description" className=" input border-black border rounded-none input-md w-full max-w-xs" />
                    </div>


                    <div className=" col-span-3 mx-auto form-control mt-6">
                        <input className="border px-5 py-1 border-purple-500 hover:bg-purple-500" type="submit" value="Submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddTask;