import axios from "axios";

const getVideoByIngredients = async (ingredient) => {
  const apiUrl = `${import.meta.env.VITE_API}?request=videoList&option=ingpage&country=indonesia&ingredients=${ingredient}&limit=100&offset=0`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getVideoByIngredients;
