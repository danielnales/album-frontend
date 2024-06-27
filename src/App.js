import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Typography, Button } from '@mui/material';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum';

function App() {
      return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 0, color: '#FFFFFF' }}>Album App</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/albums" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Overview</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<div><h1>Homepage</h1><p>This is the homepage</p></div>} />
          <Route path="/albums" element={<AlbumOverview />} />
          <Route path="/albums/:id" element={<AlbumDetail />} />
          <Route path="/new" element={<CreateAlbum />} />
        </Routes>
      </Container>
    </BrowserRouter>
    );
}

export default App;