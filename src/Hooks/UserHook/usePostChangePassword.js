import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { message } from 'antd';

const useChangePassword = (setIsModalVisible, form) => {
    const queryClient = useQueryClient();
    const changePassword = async (values) => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/change-password`, values, {
            withCredentials: true,
        });
        return response?.data?.data;
    };

    return useMutation({
        mutationFn: changePassword,
        onSuccess: (data) => {
            console.log("Data in useChangePassword: ", data);
            message.success("Password changed successfully");
            queryClient.invalidateQueries(['user']);
            setIsModalVisible(false);
            form.resetFields();

        },
        onError: (error) => {
            console.log("Error in useChangePassword: ", error);
            message.error("Password change failed");
        },
    });
};
export default useChangePassword;