import React, { useState } from "react";
import itemData from "../ImageData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ButtonGroup from "./ButtonGroup";
import SearchBox from "./SearchBox";

function ImageGallery() {
  const [images, setImages] = useState([]);

function handleImages(name) {
    const filteredImages = itemData.filter((item) => item.title === name); // Update the state with the filtered images
   
    setImages(filteredImages);
    
  }

  return (
    <div>
      <div>
        <SearchBox onAdd={handleImages} />
      </div>
      <div>
        <ButtonGroup onAdd={handleImages} />
      </div>
      <div className="images">
        <ImageList sx={{ width: 600, height: 660 }} cols={3} rowHeight={310}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default ImageGallery;
