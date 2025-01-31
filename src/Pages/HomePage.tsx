import "./HomePage.css";
import ImageSlider from "../Component/ImageSlider";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const images = [
  "./public/media/images/arpan-lake.png",
  "./public/media/images/arpan-laptop.png",
  "./public/media/images/arpan-traditional.png",
];

// const images = ["./public/media/images/arpan-laptop.png"];
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className="home-page" id="home-page">
        <main className="main-page">
          <div className="photo">
            <ImageSlider imageURLs={images}></ImageSlider>
          </div>
          <section className="main-page-info">
            <div className="heading">Full-Stack and Software Developer</div>
            <h2 className="title"> YOUR VISION, MY CODE</h2>
            <p className="description">
              Using well-known programming technologies, I deliver clean and
              reliable solutions tailored to your specific needs.
            </p>
            <p className="me">Hello, I am Arpan </p>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
