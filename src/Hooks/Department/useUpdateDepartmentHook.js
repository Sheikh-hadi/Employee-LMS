import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';

const useUpdateDepartment = () => {
    const queryClient = useQueryClient();
    const updateDepartment = async (values) => {
        // console.log("values: ", values)
        // console.log("values.id: ", values.id)
        // console.log("values.values: ", values.values)
        // console.log("values.values.name: ", values.values.name)
        const { data } = await axios.put(`http://localhost:4000/api/v1/department/${values.id}`, values.values
        );
        return data;
    }
    return useMutation({
        mutationKey: ["updateDepartment"],
        mutationFn: updateDepartment,
        onSuccess: (data) => {
            notification.success({
                message: "Success",
                description: data?.message || "Department updated successfully",
            });
            queryClient.invalidateQueries(['department']);
        },
        onError: (error) => {
            notification.error({
                message: "Department update failed:",
                description: ` ${error?.response?.data?.message || "Unknown error"}`,
            });
        },
    });
};

export default useUpdateDepartment;