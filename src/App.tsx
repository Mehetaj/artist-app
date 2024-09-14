import { useState } from 'react';
import ArtTable from './components/ArtTable';
import CustomSelectionPanel from './components/CustomSelectionPanel';

const App = () => {
  const [selectedArtworks, setSelectedArtworks] = useState<any[]>([]);

  const handleSelectionChange = (selection: any[]) => {
    setSelectedArtworks(selection);
  };

  return (
    <div>
      <ArtTable onSelectionChange={handleSelectionChange} />
      <CustomSelectionPanel selectedArtworks={selectedArtworks} />
    </div>
  );
};

export default App;
