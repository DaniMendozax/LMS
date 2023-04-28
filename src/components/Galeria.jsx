import { useState, useEffect } from "react";
import axios from "axios";
import useGetImage from "../Hooks/Use_Get_Image";

const Galeria = () => {
  const GetImage = useGetImage();
  return (
    <ul>
      {GetImage.map((image) => (
        <img src={image.images[0]} />
      ))}
    </ul>
  );
};

export default Galeria;
