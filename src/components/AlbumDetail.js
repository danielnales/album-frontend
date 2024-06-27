import { useAlbum } from '../hooks/useAlbums';
import AlbumForm from './AlbumForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AlbumDetail = () => {
  const navigate = useNavigate();
  const album = useAlbum();

  const removeAlbum = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Album/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Album deleted successfully');
      navigate('/albums')
    } else {
      console.error('Failed to delete album');
    }
  };

  return album ? (
    <div>
      <h2>Album Detail</h2>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/albums" style={{ textDecoration: 'none', color: '#000000' }}>Back to Overview</Link>
      </div>
      <AlbumForm album={album} onRemove={removeAlbum} />
      <div>
        <h3>{album.name}</h3>
        <p>Artist: {album.artist}</p>
        <img src={album.imageUrl} alt={album.name} style={{ width: '100%', height: 'auto' }} />
        <p>{album.description}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default AlbumDetail;