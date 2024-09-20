import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const usePostLoginHook = (form) => {
    console.log("formData in usePostLoginHook:", form.setFields);
    const navigate = useNavigate(); // Get navigate function

    const loginUser = async (values) => {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/login", values, {
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
            navigate("/"); 
            message.success("User Login Successfully");
        },
        onError: (error) => {
            if (error.response && error?.response?.data?.message === "User does not exist") {
                console.log("Error in user onError:", error);
                form.setFields([
                    { name: "email", errors: ["User does not exist"] },
                ]);
            }
            if (error.response && error?.response?.data?.message === "Invalid password") {
                console.log("Error in password onError:", error);
                form.setFields([
                    { name: "password", errors: ["Password is incorrect"] },
                ]);
            } else {
                message.error(error?.response?.data?.message || "User Login Failed");
            }
        }
    });
};

export default usePostLoginHook;
