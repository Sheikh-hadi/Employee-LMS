import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";

const usePostDepartment = () => {
    const postData = async (value) => {
        // console.log("values: ", value);
        const response = await axios.post('http://localhost:4000/api/v1/department', value, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("response: ", response);
        return response.data;
    }
    const mutation = useMutation({
        mutationKey: ["department"],
        mutationFn: postData,
        onSuccess: async (data) => {
            notification.success({
                key: 'Add-department',
                message: 'Add Department Successfully',
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
            // setIsModalOpen(false);
            // form.resetFields();
        },
        onError: (error) => {
            console.log("error: ", error);
            notification.error({
                key: 'error-Add-department',
                message: 'Add Department Failed: ',
                description: `${error?.response?.data?.message || 'Unknown error'}`,
                showProgress: true,
                duration: 3,
                style: {
                    borderLeft: `4px solid red`, // Red for error, green for success
                    position: 'relative',
                    color: 'red'
                },
            })
        }
    });

    return mutation;
};

export default usePostDepartment;