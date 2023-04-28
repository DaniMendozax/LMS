import axios from "axios";
import { useState, useEffect } from "react";
//const API = "https://api.pexels.com/v1/";
//const API = "https://api.themoviedb.org/3/movie/discover/movie";
const API = "https://api.escuelajs.co/api/v1/products?limit=50&offset=50"
const useGetImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
      async function fechData() {
        const response = await axios(API)
        setImages(response.data)
      
      }
      fechData();
  }, [API]);
  return images;
};
export default useGetImage;