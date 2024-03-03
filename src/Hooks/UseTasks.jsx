import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const UseTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext)
    const { refetch, data: task = [] } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/task?email=${user.email}`);
            return res.data;
        }
    })

    return [task, refetch]
};

export default UseTasks;