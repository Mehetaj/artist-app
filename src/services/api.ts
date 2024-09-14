import axios from 'axios';

export const fetchArtworks = async (page: number) => {
  const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${page}`);
  return response.data;
};
