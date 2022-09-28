import React, {useState} from "react";
import Form from './Form';
import ImageList from "./ImageList";

const ImageBoard = () => {

    const [images, setImages] = useState([
        {
          url: "https://media-cdn.tripadvisor.com/media/photo-s/25/3c/12/6f/exterior.jpg",
          caption: "The Wonderful Cosmopolitain of Las Vegas! "
        },
        {
          url: "https://i.insider.com/5e418a1fe35bab2e5420e256?width=600&format=jpeg&auto=webp",
          caption: "The Chandelier Bar"
        },
        {
          url: "https://luxuryhomeslasvegas.com/wp-content/uploads/2017/04/cosmo_gif.gif",
          caption: "Fountain View"
        }
      ])

    return (
        <div>
            <Form images={images} setImages={setImages}/> 
            <ImageList images={images}/>
        </div>
    )
};

export default ImageBoard; 