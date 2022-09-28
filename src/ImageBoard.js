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
          url: "",
          caption: ""
        },
        {
          url: "",
          caption: ""
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