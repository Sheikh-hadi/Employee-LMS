import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { notification } from "antd";

const usePostRegisterUser = () => {
    const registerUser = async (values) => {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/register", values, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.log("Error occurred:", error);
            throw error; // Ensure error is thrown
        }
    };

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log("data in onSuccess: ", data);
            notification.success({
                message: "User Registered Successfully",
                duration: 5,
                style: {
                    borderLeft: `4px solid green`,
                    position: 'relative',
                    color: 'green'
                },
                showProgress: true,
            });
        },
        onError: (error) => {
            console.log("Error in onError:", error); // Log full error object

            notification.error({
                message: "User Registration Failed",
                description: error?.response?.data?.message || "An unexpected error occurred",
                duration: 5,
                style: {
                    borderLeft: `4px solid red`,
                    position: 'relative',
                    color: 'red'
                },
                showProgress: true,
            });
        }
    });
};

export default usePostRegisterUser;
