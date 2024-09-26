import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

const usePostCheckMail = () => {
    const postCheckMail = async (values) => {
        console.log("values",values)
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/users/Check-email`, values);
        return data;
    };
    return useMutation({
        mutationKey: ["checkMail"],
        mutationFn: postCheckMail,
        onSuccess: (data) => {
            message.success(data?.message || "Mail sent successfully");
        },
        onError: (error) => {
            message.error(error?.response?.data?.message || "Unknown error");
        },
    });
};  

export default usePostCheckMail;