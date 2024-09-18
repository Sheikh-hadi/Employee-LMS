import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';

const usePostEmployee = ({ setIsModalOpen, form }) => {
  const queryClient = useQueryClient();

  const postData = async (value) => {
    const response = await axios.post("http://localhost:4000/api/v1/employee", value, {
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
            key: 'new-employee',
            message: 'Add New Employee Successfully',
            description: data.message,
            duration: 3,
            style: {
                borderLeft: `4px solid green`, 
                position: 'relative',
                color: 'red'
            },
            showProgress: true,
        });
        console.log('data: ', data);
            setIsModalOpen(false);
            form.resetFields();
      queryClient.invalidateQueries(["employees"]);
    },
    onError: (error) => {
        console.log("error: ", error);
        notification.error({
            key: 'error-new-employee',
            message: 'Add New Employee Failed: ',
            description: `${error?.response?.data?.message || 'Unknown error'}`,
            showProgress: true,
            duration: 3,
            style: {
                borderLeft: `4px solid red`, 
                position: 'relative',
                color: 'red'
            },
        });
    }
  });
};

export default usePostEmployee;

