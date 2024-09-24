import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";

const useUpdateUser = ( setIsModalVisible, form ) => {
    const { id } = useParams()
    // console.log("id: ", id);

    const queryClient = useQueryClient();
    const updateUser = async (values) => {
        const { data } = await axios.put(`http://localhost:4000/api/v1/users/update/${id}`, values, {
            withCredentials: true,
        });
        return data;
    };

    return useMutation({
        mutationKey: ["updateUser"],
        mutationFn: updateUser,
        onSuccess: (data) => {
            console.log("data inn updateUser: ", data);
            message.success(data?.message || "User updated successfully");
            queryClient.invalidateQueries(["user"]);
            setIsModalVisible(false);
        },
        onError: (error) => {
            console.log("error in updateUser: ", error);
            message.error(error?.response?.data?.message || "Unknown error");
            setIsModalVisible(false);
        },
    });
}

export default useUpdateUser;