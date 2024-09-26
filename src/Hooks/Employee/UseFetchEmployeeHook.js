import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchEmployee = () => {
    const fetchEmployee = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/employees`);
        return response.data;
    };
    return useQuery({
        queryKey: ["employees"],
        queryFn: fetchEmployee,
        onSucess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
export default useFetchEmployee;