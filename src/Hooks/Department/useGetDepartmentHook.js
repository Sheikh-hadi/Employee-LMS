import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetDepartment = () => {
    const fetchDepartment = async () => {
        const response = await axios.get('http://localhost:4000/api/v1/department', { withCredentials: true });
        return response.data;
    };

    return useQuery({
        queryKey: ['department'],
        queryFn: fetchDepartment,
        staleTime: 0,
        cacheTime: 600000, 
        refetchOnWindowFocus: false, 
    });
};

export default useGetDepartment;
