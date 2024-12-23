import { useState } from "react";
import "./ImageSlider.css";
import * as Icons from "react-bootstrap-icons";

type ImageSliderProps = {
  imageURLs: string[]; // Array of image URLs to be displayed in the slider.
};

const ImageSlider = ({ imageURLs }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="imageslider">
      <div className="images">
        <img src={imageURLs[imageIndex]} />
      </div>
    
    </div>
  );
};

export default ImageSlider;
