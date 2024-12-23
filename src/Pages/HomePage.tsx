import "./HomePage.css";
import ImageSlider from "../Component/ImageSlider";
import * as Icons from "react-bootstrap-icons";

const images = [
  "./public/media/arpan-lake.png",
  "./public/media/arpan-park.png",
  "./public/media/arpan-traditional.png",
];

const HomePage = () => {
  return (
    <div className="homepage">
      <main className="main-page">
        <div className="photo">
          <ImageSlider imageURLs={images}></ImageSlider>
          <div className="slider">
            <Icons.CaretLeftFill size={75}></Icons.CaretLeftFill>
            <Icons.CaretRightFill size={75}></Icons.CaretRightFill>
          </div>
        </div>
        <section className="main-page-info">
          <div className="heading">Full-Stack, and Software Developer</div>
          <h2 className="title"> YOUR VISION, MY CODE</h2>
          <p className="description">
            Hi, I’m Arpan Pokharel, based in Waterloo, Ontario. Using modern
            programming technologies, my work focuses on delivering clean and
            reliable solutions tailored to specific needs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
