import Carousel from "react-bootstrap/Carousel";

type ImageSliderProps = {
  imageURLs: string[]; // Array of image URLs to be displayed in the slider.
};

function ImageSlider({ imageURLs }: ImageSliderProps) {
  return (
    <Carousel>
      {imageURLs.map((src, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img src={src} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
