type ImageSliderProps = {
  imageURLs: string[]; // Array of image URLs to be displayed in the slider.
};

const ImageSlider = ({ imageURLs }: ImageSliderProps) => {
  return (
    <div className="imageslider">
      <div className="images">
        <img key={0} src={imageURLs[0]} />
        {/* <img key={1} src={imageURLs[1]} /> */}
      </div>
      <div className="dot-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ImageSlider;
