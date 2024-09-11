import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { notification } from "antd";
// import { Link } from "react-router-dom";

const usePostRegisterUser = () => {
    const queryClient = useQueryClient();
    const registerUser = async (values) => {
        const response = await axios.post("http://localhost:4000/api/v1/users/register", values);
        return response.data;
    };
    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log("data in UseFetch hook: ", data);
            notification.success({
                message: "User Registered Successfully",
                // description: "User Registered Successfully",
                duration: 5,
                style: {
                    borderLeft: `4px solid green`, // Red for error, green for success
                    position: 'relative',
                    color: 'green'
                },
                showProgress: true,
            });
        },
        onError: (error) => {
            console.log(error);
            notification.error({
                message: "User Registration Failed",
                description: `${error?.response?.data?.message || 'User Registration Failed'}`,
                duration: 5,
                style: {
                    borderLeft: `4px solid red`, // Red for error, green for success
                    position: 'relative',
                    color: 'red'
                },
                showProgress: true,
            });
        },
    });
}
export default usePostRegisterUser;

