import Carousel from "react-bootstrap/Carousel";

type ImageSliderProps = {
  imageURLs: string[]; // Array of image URLs to be displayed in the slider.
};

function ImageSlider({ imageURLs }: ImageSliderProps) {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img src={imageURLs[0]} />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={imageURLs[1]} />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={imageURLs[2]} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
