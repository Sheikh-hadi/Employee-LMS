import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetDepartment = () => {
    const fetchDepartment = async () => {
        const response = await axios.get('http://localhost:4000/api/v1/department');
        return response.data;
    };

    return useQuery({
        queryKey: ['department'],
        queryFn: fetchDepartment,
        staleTime: 0, // Ensure that data is fresh
        cacheTime: 600000, // Cache for 10 minutes
        refetchOnWindowFocus: false, // Optionally refetch on window focus
    });
};

export default useGetDepartment;
