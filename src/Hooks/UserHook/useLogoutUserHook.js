import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const useUserLogout = () => {
    const queryClient = useQueryClient();

    const logout = async () => {

        try {
            return await axios.post("http://localhost:4000/api/v1/users/logout", {}, { withCredentials: true })
        } catch (error) {
            // console.log("Error in logoutUser:", error);
            throw error;
        }
    }

    return useMutation({
        mutationFn: logout,
        onSuccess: (data) => {
            // console.log("data in onSuccess: ", data);
            
            message.success("User Logout Successfully");
        },

        onError: (error) => {
            // console.log("Error in onError:", error);
            message.error(error?.response?.data?.message || "User Logout Failed");
        },
    });
};

export default useUserLogout;


