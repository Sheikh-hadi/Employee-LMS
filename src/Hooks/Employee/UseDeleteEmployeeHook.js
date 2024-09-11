
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';


const useDeleteEmployee = () => {
    const queryClient = useQueryClient();
    const deleteEmployee =  async (employeeID) => {
        // Ensure the URL and method are correct
        const { data } = await axios.delete(`http://localhost:4000/api/v1/employee/${employeeID}`);
        return data;
    }

    return useMutation({
        mutationKey: ["employees"],
        mutationFn: deleteEmployee,
        onSuccess: (data) => {
            notification.success({
                message: "Success",
                description: data?.message || "Employee deleted successfully",
            });
            queryClient.invalidateQueries(['employees']);
        },
        onError: (error) => {
            notification.error({
                message: "Employee deletion failed:",
                description: ` ${error?.response?.data?.message || "Unknown error"}`,
            });
        },
    });
}

export default useDeleteEmployee;