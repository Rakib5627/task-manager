import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-mivils5xl-rakib5627.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;