import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

const AlbumForm = ({ album, onRemove }) => {
  const [name, setName] = useState(album.name);
  const [artist, setArtist] = useState(album.artist);
  const [imageUrl, setImageUrl] = useState(album.imageUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example API call to update the album
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Album/${album.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: album.id, name, artist, imageUrl }),
    });

    if (response.status === 204) {
      // Handle successful update
      console.log('Album updated successfully');
      
    } else {
      // Handle error
      console.error('Failed to update album');
    }
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Artist"
            variant="outlined"
            margin="normal"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            margin="normal"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
          {onRemove && (
            <Button variant="contained" color="secondary" onClick={() => onRemove(album.id) } style={{ marginLeft: '4px' }}>
              Delete Album
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AlbumForm;