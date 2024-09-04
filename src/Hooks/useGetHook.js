import axios from "axios";

const UseGetHooks = async (setLoading, setError, setdata, path) => {
  console.log("fetcemployees");
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get(path);
    console.log("response", response);

    setdata(response.data.data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export default UseGetHooks;