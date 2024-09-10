import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";

const useDeleteDepartment = () => {
    const deleteDepartment = async (departmentId) => {
        const { data } = await axios.delete(`http://localhost:4000/api/v1/department/${departmentId}`);
        return data;
    };

    return useMutation({
        mutationFn: deleteDepartment,
        onSuccess: (data) => {
            notification.success({
                message: "Success",
                description: data?.message || "Department deleted successfully",
            });
        },
        onError: (error) => {
            notification.error({
                message: "Department deletion failed:",
                description: ` ${error?.response?.data?.message || "Unknown error"}`,
            });
        },
    });
}

export default useDeleteDepartment;