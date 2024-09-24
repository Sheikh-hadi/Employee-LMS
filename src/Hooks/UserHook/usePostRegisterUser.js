import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message, notification } from "antd";
// import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const usePostLoginHook = () => {
    const queryClient = useQueryClient();
    // const navigate = useNavigate(); // Get navigate function

    const loginUser = async (values) => {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/register", values, { withCredentials: true });
            return response.data;
        } catch (error) {
            // console.log("Error in loginUser:", error);
            throw error;
        }
    };

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // console.log("data in onSuccess: ", data);
            notification.success({
                message: "User register Successfully",
                description: "User register Successfully",
                duration: 5,
                style: {
                    borderLeft: `4px solid green`,
                    position: 'relative',
                    color: 'green',
                },
            });
            queryClient.invalidateQueries(["users"]);
        },

        onError: (error) => {
            // console.log("Error in onError:", error);
            message.error(error?.response?.data?.message || "User register Failed");
        },
    });
};

export default usePostLoginHook;
