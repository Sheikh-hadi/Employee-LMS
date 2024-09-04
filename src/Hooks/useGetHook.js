import axios from "axios";

const useGetHooks = async (setLoading, setError, setEmployees, path ) =>{
    console.log("fetcemployees");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(path);
      console.log("response", response);

      setEmployees(response.data.data[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  export default useGetHooks;