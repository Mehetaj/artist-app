interface Props {
    selectedArtworks: any[];
  }
  
  const CustomSelectionPanel = ({ selectedArtworks }: Props) => {
    return (
      <div>
        <h3>Selected Artworks</h3>
        <ul>
          {selectedArtworks.map((artwork) => (
            <li key={artwork.id}>
              {artwork.title} - {artwork.artist_display}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CustomSelectionPanel;
  