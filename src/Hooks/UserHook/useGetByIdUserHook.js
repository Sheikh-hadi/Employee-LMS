import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const useGetByIdUser = (id) => {
    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/users/${id}`, { withCredentials: true });
        // console.log("response: ", response);
        return response.data;
    }

    return useQuery({
        queryKey: ['user', id],
        queryFn: fetchUser,
        onError: (error) => {
            message.error(error.message);
        }
    })
};

export default useGetByIdUser;

