import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { useEmployeeContext } from "../../context/EmployeeContext";

const useFetchEmployee = () => {
    const { setEmployees } = useEmployeeContext();
    const fetchEmployees = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/employee");
        // console.log("response: ", response);
        // console.log("response.data: ", response.data);
        // console.log("response.data.data: ", response.data.data);
        return response?.data?.data;
    }

    const result = useQuery({
        queryKey: ["employees"],
        queryFn: fetchEmployees,
        onSuccess: (data) => {
            console.log("data in UseFetch hook: ", data);
            setEmployees(data);
        },
        onError: (error) => {
            console.log(error);
        },
        staleTime: 0, // Ensure that data is fresh
        cacheTime: 600000, // Cache for 10 minutes
        refetchOnWindowFocus: false, // Optionally refetch on window focus
    });
    // console.log("result: ", result);
    return result;
}

export default useFetchEmployee;