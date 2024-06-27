import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const endpoint = `${process.env.REACT_APP_API_URL}/Api/Album/`;

export const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const request = fetch(endpoint);

    request
      .then((apiResponse) => {
        if (!apiResponse.ok) {
          console.error(apiResponse.statusText);
          return;
        }

        return apiResponse.json();
      })
      .then((apiResult) => {
        setAlbums(apiResult);
      });
  }, []);

  return albums;
};


export const useAlbum = () => {
   const { id } = useParams(); 
   const [album, setAlbum] = useState(null);
 
   useEffect(() => {
     const specificAlbumEndpoint = `${process.env.REACT_APP_API_URL}/Api/Album/${id}`;
 
     fetch(specificAlbumEndpoint)
       .then((apiResponse) => {
         if (!apiResponse.ok) {
           console.error("Failed to fetch album", apiResponse.statusText);
           return;
         }
         return apiResponse.json();
       })
       .then((apiResult) => {
         setAlbum(apiResult);
       });
   }, [id]);
 
   return album;
 };