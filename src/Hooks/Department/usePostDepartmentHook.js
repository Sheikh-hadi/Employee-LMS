import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';

const usePostDepartment = () => {
  const queryClient = useQueryClient();

  const postData = async (value) => {
    const response = await axios.post('http://localhost:4000/api/v1/department', value, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  };

  return useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      notification.success({
        key: 'Add-department',
        message: 'Add Department Successfully',
        description: data.message,
        duration: 3,
        style: {
          borderLeft: `4px solid green`,
          position: 'relative',
          color: 'green',
        },
        showProgress: true,
      });
      queryClient.invalidateQueries(['department']);
    },
    onError: (error) => {
      notification.error({
        key: 'error-Add-department',
        message: 'Add Department Failed:',
        description: `${error?.response?.data?.message || 'Unknown error'}`,
        showProgress: true,
        duration: 3,
        style: {
          borderLeft: `4px solid red`,
          position: 'relative',
          color: 'red',
        },
      });
    },
  });
};

export default usePostDepartment;

