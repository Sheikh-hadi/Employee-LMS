import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { message } from "antd";

const useDeleteUser = () => {
    const queryClient = useQueryClient();
    const deleteUser = async (id) => {
        const { data } = await axios.delete(`http://localhost:4000/api/v1/users/${id}`, {
            withCredentials: true,
        });
        return data;
    };
    return useMutation({
        mutationKey: ["deleteUser"],
        mutationFn: deleteUser,
        onSuccess: (data) => {
            message.success(data?.message || "User deleted successfully");
            queryClient.invalidateQueries(["users"]);
        },
        onError: (error) => {
            message.error(error?.response?.data?.message || "Unknown error");
        },
    });
};

export default useDeleteUser;