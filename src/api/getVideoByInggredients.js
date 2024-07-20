import axios from "axios";

const getVideoByIngredients = async (ingredient) => {
  const apiUrl = `${import.meta.env.VITE_API}?request=videoList&option=ingpage&country=Indonesia&ingredients=${ingredient}&limit=100&offset=0`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getVideoByIngredients;
