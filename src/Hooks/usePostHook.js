import axios from "axios";

const handlePostData = async (path, data) => {
    try {
        const response = await axios.post(path, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        // console.log("Path: ", path, "Data: ", data);
        // console.log("Success:", response);
        console.log("Success:", response.data);
        // console.log("Status Code:", response.status);
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error:", error.response.data);
        return error.response.data; // Return the error response data
    }
};

export default handlePostData;
