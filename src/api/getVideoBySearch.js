import axios from "axios";

const apiUrl = "http://openrecipe.000webhostapp.com/api.php";

const getVideoTrends = async (keyword) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        request: "videoList",
        option: "search",
        keyword: keyword,
        limit: 3,
        offset: 0,
      },
    });
    return response.data.data; 
  } catch (error) {
    throw error;
  }
};

export default getVideoTrends;
