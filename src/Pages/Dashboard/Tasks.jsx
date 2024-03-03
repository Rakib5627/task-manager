
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useTasks from "../../Hooks/UseTasks";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Tasks = () => {
    const [tasks, refetch] = useTasks();
    const axiosSecure = useAxiosSecure();

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
                
                {/* Droppable for Todo Tasks */}
                <Droppable droppableId="todo-tasks">
                    {(provided) => (
                        <div className="characters2 border-x-4 p-2 border-purple-700" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold text-center mt-6">Todo</p>
                            {tasks.map((task, index) => (
                                task.status === 'todo' &&
                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                    {(provided) => (
                                        <div className="my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className="card-body">
                                                <h2 className="card-title">{task.task}</h2>
                                                <p>Due {task.date} || {task.priority}</p>
                                                <small className="-mt-0">{task.description}</small>
                                                <div className="flex gap-4">
                                                    <button onClick={() => handleDelete(task._id)}>
                                                        <FaTrashAlt className="text-purple-600 hover:text-red-700" />
                                                    </button>
                                                    <Link to={`/dashboard/updateTask/${task._id}`}>
                                                        <FaEdit className="text-purple-600 hover:text-green-700" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {/* Droppable for Ongoing Tasks */}
                <Droppable droppableId="ongoing-tasks">
                    {(provided) => (
                        <div className="characters3" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold mt-6">Ongoing Tasks</p>
                            {tasks.map((task, index) => (
                                task.status === 'ongoing' &&
                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                    {(provided) => (
                                        <div className="my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className="card-body">
                                                <h2 className="card-title">{task.task}</h2>
                                                <p className="">Due {task.date} || {task.priority}</p>
                                                <small className="-mt-0">{task.description}</small>
                                                <div className="flex gap-4">
                                                    <button onClick={() => handleDelete(task._id)}>
                                                        <FaTrashAlt className="text-purple-600 hover:text-red-700" />
                                                    </button>
                                                    <Link to={`/dashboard/updateTask/${task._id}`}>
                                                        <FaEdit className="text-purple-600 hover:text-green-700" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {/* Droppable for Completed Tasks */}
                <Droppable droppableId="completed-tasks">
                    {(provided) => (
                        <div className="characters1" {...provided.droppableProps} ref={provided.innerRef}>
                            <p className="text-3xl font-semibold mt-6">Completed Tasks</p>
                            {tasks.map((task, index) => (
                                task.status === 'completed' &&
                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                    {(provided) => (
                                        <div className="my-5 bg-purple-200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className="card-body">
                                                <h2 className="card-title">{task.task}</h2>
                                                <p>Due {task.date} || {task.priority}</p>
                                                <small className="-mt-0">{task.description}</small>
                                                <button onClick={() => handleDelete(task._id)}>
                                                    <FaTrashAlt className="text-purple-600 hover:text-red-700" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default Tasks;
