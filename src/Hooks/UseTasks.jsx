import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const UseTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext)
    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    return [tasks, refetch]
};

export default UseTasks;