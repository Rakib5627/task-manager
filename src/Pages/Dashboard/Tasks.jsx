import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseTasks from "../../Hooks/UseTasks";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { useState } from "react";


const Tasks = () => {


    const [tasks, refetch] = UseTasks();
    console.log(tasks)
    const axiosSecure = useAxiosSecure();

    // const [ characters1, updatecharacters1] = useState(tasks);
    // const [ characters2, updatecharacters2] = useState(tasks);
    // const [ characters3, updatecharacters3] = useState(tasks);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (

        <DragDropContext>
            <div className="flex justify-between">
                <Droppable droppableId="characters">
                    {(provided) => (
                        <div className="characters1" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold mt-6">Completed Tasks</p>
                            {tasks.map((task, index) => {
                                return (
                                    <Draggable key={task._id} draggableId={task._id} index={index}>
                                        {(provided) => (
                                            <div className=" my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {
                                                    task.status == 'completed' ? <div className="card-body">
                                                        <h2 className="card-title">{task.task}</h2>
                                                        <p>Due {task.date} || {task.priority}</p>
                                                        <small className="-mt-0">{task.description}</small>
                                                        <button onClick={() => handleDelete(task._id)}
                                                            className="">
                                                            <FaTrashAlt className="text-purple-600 hover:text-red-700"></FaTrashAlt>
                                                        </button>
                                                    </div> : null
                                                }
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <div className="characters2 border-x-4 p-2 border-purple-700" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold text-center mt-6">Todo</p>
                            {tasks.map((task, index) => {
                                return (
                                    <Draggable key={task._id} draggableId={task._id} index={index}>
                                        {(provided) => (
                                            <div className=" my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {
                                                    task.status == 'todo' ? <div className="card-body">
                                                        <h2 className="card-title">{task.task}</h2>
                                                        <p>Due {task.date} || {task.priority}</p>
                                                        <small className="-mt-0">{task.description}</small>
                                                        <div className="flex gap-4">
                                                            <button onClick={() => handleDelete(task._id)}
                                                                className="">
                                                                <FaTrashAlt className="text-purple-600 hover:text-red-700"></FaTrashAlt>
                                                            </button>
                                                            <Link to={`/dashboard/updateTask/${task._id}`} 
                                                                className="">
                                                                <FaEdit className="text-purple-600 hover:text-green-700"></FaEdit>
                                                            </Link>
                                                        </div>
                                                    </div> : null
                                                }
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <div className="characters3" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold mt-6">Ongoing Tasks</p>
                            {tasks.map((task, index) => {
                                return (
                                    <Draggable key={task._id} draggableId={task._id} index={index}>
                                        {(provided) => (
                                            <div className=" my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {
                                                    task.status == 'ongoing' ? <div className="card-body">
                                                        <h2 className="card-title">{task.task}</h2>
                                                        <p className="">Due {task.date} || {task.priority}</p>
                                                        <small className="-mt-0">{task.description}</small>
                                                        <div className="flex gap-4">
                                                            <button onClick={() => handleDelete(task._id)}
                                                                className="">
                                                                <FaTrashAlt className="text-purple-600 hover:text-red-700"></FaTrashAlt>
                                                            </button>
                                                            <Link to={`/dashboard/updateTask/${task._id}`} 
                                                                className="">
                                                                <FaEdit className="text-purple-600 hover:text-green-700"></FaEdit>
                                                            </Link>
                                                        </div>
                                                    </div> : null
                                                }
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>

        </DragDropContext>
    );
};

export default Tasks;


{/* <div>
    <p className=" text-center">completed</p>
    {tasks.map(task =>
        <div key={task._id}>
            {
                task.status == 'completed' ? <div className="card-body">
                    <h2 className="card-title">{task.task}</h2>
                    <p>Due {task.date} || {task.priority}</p>
                </div> : null
            }
        </div>

    )}
</div>  */}


<div className="card bg-purple-100 ">
    <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>