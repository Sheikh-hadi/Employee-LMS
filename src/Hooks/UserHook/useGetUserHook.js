import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetUser = () => {
    const fetchUser = async()=>{
        const response = await axios.get("http://localhost:4000/api/v1/users", { withCredentials: true });
        return response.data;
    }

    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUser,
        onSuccess: (data) => {
            // console.log("data in UseFetch hook: ", data);
        },
        onError: (error) => {
            console.log(error);
        },
        staleTime: 0, 
        cacheTime: 600000, 
        refetchOnWindowFocus: false, 
    });
}

export default useGetUser;