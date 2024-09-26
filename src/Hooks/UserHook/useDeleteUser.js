import {  useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const UseDeleteUser = () => {
    const queryClient = useQueryClient();
    const deleteUser = async (id) => {
        const response = await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
        return response.data;
    };
return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        message.success("User Deleted Successfully");
    },
    onError: (error) => {
        message.error(error?.response?.data?.message || "User Deletion Failed");
    },
});
        
}
export default UseDeleteUser;