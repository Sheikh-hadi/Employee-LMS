// useFetchEmployee.js
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { useEmployeeContext } from "../../context/EmployeeContext";

const useFetchEmployee = () => {
    const { setEmployees } = useEmployeeContext();

    const fetchEmployees = async () => {
        const response = await axios.get("http://localhost:4000/api/v1/employee", {
            withCredentials: true,
        });
        console.log("Fetched employees data: ", response?.data?.data);
        return response?.data?.data;
    };

    const result = useQuery({
        queryKey: ["employees"],
        queryFn: fetchEmployees,
        onSuccess: (data) => {
            console.log("Data in UseFetch hook: ", data);
            setEmployees(data); // Update the employee context
        },
        onError: (error) => {
            console.log("Fetch error: ", error);
        },
        staleTime: 0,  // Data is considered stale immediately, so it refetches automatically
        cacheTime: 600000, // Cache the data for 10 minutes
        refetchOnWindowFocus: true,  // Auto-refetch when the window is focused
        // refetchInterval: 10000, 
    });

    console.log("Query result: ", result); // Debugging: see the result

    return result;
};

export default useFetchEmployee;
