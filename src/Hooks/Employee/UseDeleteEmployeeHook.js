import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';


const useDeleteEmployee = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (employeeID) => {
            // Ensure the URL and method are correct
            const { data } = await axios.delete(`http://localhost:4000/api/v1/employee/${employeeID}`);
            return data;
        },
        onSuccess: async (data) => {
            console.log("first: ", data)
            notification.success({
                message: 'Success',
                description: `Employee with ID ${data.id} has been deleted.`,
            })
            await queryClient.invalidateQueries("employees");
        },
        onError: (error) => {

            notification.error({
                message: 'Error',
                description: `Employee deletion failed: ${error?.response?.data?.message || 'Unknown error'}`,
            });
            console.error('error: ', error);
        },
    });
};

export default useDeleteEmployee;
