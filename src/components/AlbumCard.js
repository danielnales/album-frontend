import { CardHeader, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom'; 

const AlbumCard = ({ id, name, artist, imageUrl }) => {
    return (
        <Card>
                <CardContent>
                    <CardHeader
                        title={`${id}. ${name} - ${artist}`}
                    />
                    <CardMedia>
                     <img src={imageUrl} alt={name} style={{ width: '100%', height: 'auto' }} />
                    </CardMedia>
                </CardContent>
        </Card>
    );
};

export default AlbumCard;