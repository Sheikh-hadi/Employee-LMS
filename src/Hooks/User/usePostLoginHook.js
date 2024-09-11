import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { notification } from "antd";

const usePostLoginHook = () => {
    const queryClient = useQueryClient();
    const loginUser = async (values) => {
        const response = await axios.post("http://localhost:4000/api/v1/users/login", values);
        return response.data;
    };
    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log("data in UseFetch hook: ", data);
            notification.success({
                message: "User Login Successfully",
                // description: "User Login Success
            })
        },

        onErrorrror: (error) => {
            console.log(error);
            notification.error({
                message: "User Login Failed",
                description: `${error?.response?.data?.message || 'User Login Failed'}`,
                duration: 5,
                style: {
                    borderLeft: `4px solid red`, // Red for error, green for success
                    position: 'relative',
                    color: 'red'
                },
                showProgress: true,
            });
        },
    })
    
}
export default usePostLoginHook;