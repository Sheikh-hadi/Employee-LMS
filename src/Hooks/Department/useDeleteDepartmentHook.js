import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';


const useDeleteDepartment = () => {
    const queryClient = useQueryClient();
    const deleteDepartment = async (departmentId) => {
        const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/department/${departmentId}`, { withCredentials: true });
        return data;
    };

    return useMutation({
        mutationKey: ["department"],
        mutationFn: deleteDepartment,
        onSuccess: (data) => {
            notification.success({
                message: "Success",
                description: data?.message || "Department deleted successfully",
            });
            queryClient.invalidateQueries(['department']);
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