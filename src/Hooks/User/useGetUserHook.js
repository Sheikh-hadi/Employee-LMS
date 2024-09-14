import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetUser = () => {
    const fetchUser = ()=>{
        const response = axios.get("http://localhost:4000/api/v1/user", { withCredentials: true });
        return response.data;
    }

    return useQuery({
        queryKey: ["user"],
        queryFn: fetchUser,
        onSuccess: (data) => {
            console.log("data in UseFetch hook: ", data);
        },
        onError: (error) => {
            console.log(error);
        },
        staleTime: 0, // Ensure that data is fresh
        cacheTime: 600000, // Cache for 10 minutes
        refetchOnWindowFocus: false, // Optionally refetch on window focus
    });
}

export default useGetUser;