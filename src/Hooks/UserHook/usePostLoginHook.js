import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const usePostLoginHook = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate(); // Get navigate function

    const loginUser = async (values) => {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/login", values, {
                // Enable sending cookies with the request
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.log("Error in loginUser:", error);
            throw error;
        }
    };

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log("data in onSuccess: ", data);
            message.success("User Login Successfully");

            // Navigate to homepage after success
            navigate("/");
        },

        onError: (error) => {
            console.log("Error in onError:", error);
            message.error(error?.response?.data?.message || "User Login Failed");
        },
    });
};

export default usePostLoginHook;
