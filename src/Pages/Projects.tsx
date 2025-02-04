import SingleProject from "../Component/SingleProject";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//const imagesList = ["Merlin", "FilmyBox", "Ecometrix", "Quiz"];
const firstProjectImages = [
  "./public/media/images/firstProject-1.png",
  "./public/media/images/firstProject-2.png",
  "./public/media/images/firstProject-3.png",
  "./public/media/images/firstProject-4.png",
  "./public/media/images/firstProject-5.png",
];
const secondProjectImages = [
  "/media/images/secondProject-1.jpeg",
  "/media/images/secondProject-2.jpeg",
  "/media/images/secondProject-3.jpeg",
  "/media/images/secondProject-4.jpeg",
  "/media/images/secondProject-5.jpeg",
  "/media/images/secondProject-6.jpeg",
  "/media/images/secondProject-7.jpeg",
  "/media/images/secondProject-8.jpeg",
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header></Header>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="project-wrapper">
          <div className="project-list">
            <Slider {...settings}>
              <SingleProject
                images={firstProjectImages}
                title="Portfolio Website"
                subheading="React-CSS-TypeScript"
                description="The Portfolio Website showcases my skills, projects, and experience as a full-stack developer. Built with React.js, TypeScript, and Tailwind CSS, it features a responsive design, project highlights, testimonials, and a contact form. Optimized for performance, it reflects my expertise in front-end development, UI/UX design, and efficient deployment."
                info="https://github.com/arpanpokharel07/Portfolio-Website"
              ></SingleProject>

              <SingleProject
                images={secondProjectImages}
                title="FilmyBox"
                subheading="TypeScript-JavaScript-CSS"
                description="FilmyBox is a streaming platform designed to deliver a personalized, accessible, and engaging viewing experience worldwide. With advanced features and a well-planned marketing strategy, it aims to revolutionize the movie industry, capture a significant market share, and uphold high standards for both users and stakeholders."
                info="https://github.com/JayminSenpai2884/FilmyBox"
              ></SingleProject>
            </Slider>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Projects;
