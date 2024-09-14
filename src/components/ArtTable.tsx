import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface Artwork {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: number;
  date_end: number;
}

interface ArtTableProps {
  onSelectionChange: (selection: Artwork[]) => void;
}

const ArtTable = ({ onSelectionChange }: ArtTableProps) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);

  const fetchArtworks = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${page}`);
      const { data, pagination } = response.data;
      setArtworks(data);
      setTotalRecords(pagination.total);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks(page);
  }, [page]);

  const onPageChange = (event: any) => {
    setPage(event.page + 1);
  };

  const handleSelectionChange = (e: any) => {
    setSelectedArtworks(e.value);
    onSelectionChange(e.value);  // Pass selected rows to parent component
  };

  return (
    <div>
      <DataTable 
        value={artworks} 
        paginator 
        rows={10} 
        totalRecords={totalRecords} 
        lazy 
        loading={loading}
        onPage={onPageChange}
        selection={selectedArtworks}
        onSelectionChange={handleSelectionChange}  // Pass custom handler
        selectionMode="multiple"
        dataKey="id"
        scrollable
        scrollHeight="flex"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }} />
        <Column field="title" header="Title" style={{ width: '200px' }} />
        <Column field="place_of_origin" header="Place of Origin" style={{ width: '150px' }} />
        <Column field="artist_display" header="Artist" style={{ width: '200px' }} />
        <Column field="inscriptions" header="Inscriptions" style={{ width: '250px' }} />
        <Column field="date_start" header="Start Date" style={{ width: '120px', textAlign: 'center' }} />
        <Column field="date_end" header="End Date" style={{ width: '120px', textAlign: 'center' }} />
      </DataTable>
    </div>
  );
};

export default ArtTable;
