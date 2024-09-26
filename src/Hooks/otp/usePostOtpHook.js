import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";
const usePostotp = ({ setShowOtpSection, setTimerActive }) => {
    const postOtp = async (values) => {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/users/otp`, values);
        return data;
    };
    return useMutation({
        mutationKey: ["otp"],
        mutationFn: postOtp,
        onSuccess: (data) => {
            message.success(data?.message || "OTP sent successfully");
            setShowOtpSection(true);
            setTimerActive(true);
        },
        onError: (error) => {
            message.error(error?.response?.data?.message || "Unknown error");
        },
    });
};
export default usePostotp;