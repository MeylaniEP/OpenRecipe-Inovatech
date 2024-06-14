import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API}?request=videoList&option=view&limit=100&offset=0`;

const getVideoTrends = async () => {

  try {
    const response = await axios.get(
       apiUrl
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getVideoTrends;
