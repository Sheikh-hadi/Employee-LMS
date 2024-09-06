import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { notification } from 'antd';
import useDeleteEmployee from '../useDeleteEmployeeHook';

jest.mock('axios');
jest.mock('antd', () => ({
  notification: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useDeleteEmployee', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete an employee successfully', async () => {
    const mockData = { id: '123' };
    axios.delete.mockResolvedValueOnce({ data: mockData });

    const { result, waitFor } = renderHook(() => useDeleteEmployee(), { wrapper });

    result.current.mutate('123');

    await waitFor(() => result.current.isSuccess);

    expect(axios.delete).toHaveBeenCalledWith('http://localhost:4000/api/v1/employee/123');
    expect(notification.success).toHaveBeenCalledWith({
      message: 'Success',
      description: 'Employee with ID 123 has been deleted.',
    });
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('employees');
  });

  it('should handle deletion error', async () => {
    const error = { response: { data: { message: 'Employee not found' } } };
    axios.delete.mockRejectedValueOnce(error);

    const { result, waitFor } = renderHook(() => useDeleteEmployee(), { wrapper });

    result.current.mutate('456');

    await waitFor(() => result.current.isError);

    expect(axios.delete).toHaveBeenCalledWith('http://localhost:4000/api/v1/employee/456');
    expect(notification.error).toHaveBeenCalledWith({
      message: 'Error',
      description: 'Employee deletion failed: Employee not found',
    });
  });

  it('should handle unknown error', async () => {
    axios.delete.mockRejectedValueOnce(new Error('Network error'));

    const { result, waitFor } = renderHook(() => useDeleteEmployee(), { wrapper });

    result.current.mutate('789');

    await waitFor(() => result.current.isError);

    expect(axios.delete).toHaveBeenCalledWith('http://localhost:4000/api/v1/employee/789');
    expect(notification.error).toHaveBeenCalledWith({
      message: 'Error',
      description: 'Employee deletion failed: Unknown error',
    });
  });
});
