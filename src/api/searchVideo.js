import axios from 'axios';

const searchVideo = async (keyword) => {
  const apiUrl = `${import.meta.env.VITE_API}?request=videoList&option=search&keyword=${encodeURIComponent(keyword)}&limit=3&offset=0`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data; // Ensure response.data is the array of videos
  } catch (error) {
    throw error;
  }
};

export default searchVideo;
