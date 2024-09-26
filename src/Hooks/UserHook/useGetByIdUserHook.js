import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const useGetByIdUser = (id) => {
    const fetchUser = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, { withCredentials: true });
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

