import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { notification, message } from 'antd';

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
      // console.log('data: ', data);
      setIsModalOpen(false);
      form.resetFields();
      queryClient.invalidateQueries(["employees"]);
    },
    onError: (error) => {
      console.log("error: ", error);
      setIsModalOpen(true);
      if (error?.response?.data?.statusCode === 406) {
        // console.log("error in cnic: ", error);
        message.error("Employee already exists");
        form.setFields([
          {
            name: 'cnic',
            errors: ["CNIC already exists"],
          },
          form.scrollToField('cnic'),
        ]);
      }

      else if (error?.response?.data?.statusCode === 407) {
        // console.log("error in email: ", error);
        message.error("Email already exists");
        form.setFields([
          {
            name: 'email',
            errors: ["Email already exists"],
          },
          form.scrollToField('email'),
        ]);
      }
      else {
        // console.log("error in else: ", error);
        notification.error({
          key: 'error-new-employee',
          message: 'Add Employee Failed: ',
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
    }
  });
};

export default usePostEmployee;

