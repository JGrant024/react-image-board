import React from "react";

const ImageList = ({images}) => {

    const testing = ["this", "will", "return", "our", "list"]

    return(
        <div>
            {images.map((image) => {
                return (
                    <>
                    {image.caption}
                    <ul>
                        <li>
                            <img src={image.url} alt=""/>
                        </li>
                    </ul>
                    </>
                )
            })}
        </div>
    )

}

export default ImageList; 