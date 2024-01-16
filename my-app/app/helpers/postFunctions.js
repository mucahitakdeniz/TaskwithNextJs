import axios from "axios";

const API_KEY = process.env.API_KEY;

export const getPosts = async () => {
  const URL = `https://dummyapi.io/data/v1/post/`;

  try {
    const res = await axios.get(URL, { headers: { "app-id": API_KEY } });
    return res.data; 
  } catch (error) {
    console.error("Error during fetch:", error.message);
    throw error;
  }
};
