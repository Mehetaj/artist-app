import { useState, useEffect } from 'react';
import axios from 'axios';

interface Artwork {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: number;
  date_end: number;
}

const useArtworkData = (page: number) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${page}`);
        const { data, pagination } = response.data;
        setArtworks(data);
        setTotalRecords(pagination.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { artworks, totalRecords, loading };
};

export default useArtworkData;
