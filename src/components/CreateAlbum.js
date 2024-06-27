import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AlbumForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      artist: "",
      imageUrl: "",
    },
  });

  return (
    <div style={{ marginTop: '20px' }}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Naam"
                  variant="outlined"
                  {...field}
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <Controller
              name="artist"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Artiest"
                  variant="outlined"
                  {...field}
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <Controller
              name="imageUrl"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Afbeeldings-URL"
                  variant="outlined"
                  {...field}
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Opslaan
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const CreateAlbum = () => {
  const navigate = useNavigate();

  const onSubmit = async (newAlbum) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/Album`, {
      method: "POST",
      body: JSON.stringify(newAlbum),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status >= 200 && response.status <= 299) {
      navigate("/albums");
    } else {
      console.error("Failed to create album");
    }
  };

  return <AlbumForm onSubmit={onSubmit} />;
};

export default CreateAlbum;