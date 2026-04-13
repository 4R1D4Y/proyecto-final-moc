const Explore = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Explorar Música</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {/* Aquí mapearemos las canciones de la API más adelante */}
        <div style={cardStyle}>Canción de ejemplo...</div>
        <div style={cardStyle}>Canción de ejemplo...</div>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '20px',
  background: '#282828',
  color: 'white',
  borderRadius: '8px',
  aspectRatio: '1/1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default Explore;