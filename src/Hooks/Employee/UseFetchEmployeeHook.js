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
        // console.log("Fetched employees data: ", response?.data?.data);
        return response?.data?.data;
    };

    const result = useQuery({
        queryKey: ["employees"],
        queryFn: fetchEmployees,
        onSuccess: (data) => {
            // console.log("Data in UseFetch hook: ", data);
            setEmployees(data); // Update the employee context
        },
        onError: (error) => {
            // console.log("Fetch error: ", error);
        },
        staleTime: 0,  
        cacheTime: 600000,
        refetchOnWindowFocus: true,  
        // refetchInterval: 10000, 
    });

    // console.log("Query result: ", result); 

    return result;
};

export default useFetchEmployee;
