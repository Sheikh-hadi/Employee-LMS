import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const useDeleteEmployee = () => {
    const queryClient = useQueryClient();
    const deleteEmployee = async (id) => {
        const response = await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
        return response.data;
    };

    return useMutation({
        mutationFn: deleteEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
            message.success("Employee Deleted Successfully");
        },
        onError: (error) => {
            message.error(error?.response?.data?.message || "Employee Deletion Failed");
        },
    });
}
export default useDeleteEmployee;