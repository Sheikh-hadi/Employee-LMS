import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';


const usePostEmployee = ({ setIsModalOpen, form, values }) => {
    const queryClient = useQueryClient();

// console.log("values: ", values);
// console.log("form: ", form);
// console.log("setIsModalOpen: ", setIsModalOpen);
    const postData = async (values) => {

        const response = await axios.post("http://localhost:4000/api/v1/employee", values, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log("response: ", response);
        return response.data;
    }
    const mutation = useMutation({
        mutationKey: ["employees"],
        mutationFn: postData,
        onSuccess: async (data) => {
            notification.success({
                key: 'new-employee',
                message: 'Add New Employee Successfully',
                description: data.message,
                duration: 3,
                style: {
                    borderLeft: `4px solid green`, // Green for success, red for error
                    position: 'relative',
                    color: 'red'
                },
                showProgress: true,
            });
            console.log('data: ', data);
            setIsModalOpen(false);
            form.resetFields();
            queryClient.invalidateQueries(['employees']);
        },
        onError: (error) => {
            console.log("error: ", error);
            notification.error({
                key: 'error-new-employee',
                message: 'Add New Employee Failed: ',
                description: `${error?.response?.data?.message || 'Unknown error'}`,
                showProgress: true,
                duration: 3,
                style: {
                    borderLeft: `4px solid red`, // Red for error, green for success
                    position: 'relative',
                    color: 'red'
                },
            });
        }
    }
    );
    return mutation;
};

export default usePostEmployee;