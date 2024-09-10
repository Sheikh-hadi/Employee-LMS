import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useGetDepartment = () => {
    const fetchDepartment = async () => {
        const response = await axios.get('http://localhost:4000/api/v1/department');
        // console.log("response: ", response);
        return response.data;
    }

    return useQuery(
        {
            queryKey: ['department'],
            queryFn: fetchDepartment,
            onSuccess: (data) => {
                // console.log("data: ", data);
            },
            onError: (error) => {
                // console.log("error: ", error);
            }
        })

};

export default useGetDepartment;


