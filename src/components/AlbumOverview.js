import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Card, CardActionArea } from '@mui/material';
import AlbumCard from './AlbumCard';
import { useAlbums } from '../hooks/useAlbums';

const AlbumOverview = () => {
  const albums = useAlbums();
  const sortedAlbums = albums.sort((a, b) => a.id - b.id);

  return (
    <div>
      <h1>Albums</h1>
      <Grid container spacing={2}>
        {sortedAlbums.map((album) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
            <AlbumCard id={album.id} name={album.name} artist={album.artist} imageUrl={album.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AlbumOverview;