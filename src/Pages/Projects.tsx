import SingleProject from "../Component/SingleProject";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//const imagesList = ["Merlin", "FilmyBox", "Ecometrix", "Quiz"];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const firstProjectImages = [
    "./public/media/images/arpan-laptop.png",
    "./public/media/images/arpan-lake.png",
    "./public/media/images/arpan-traditional.png",
  ];

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
                title="First title"
                subheading="Four word project description"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
                info="http://github.com/"
              ></SingleProject>

              <SingleProject
                images={firstProjectImages}
                title="Second title"
                subheading="Four word project description"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
                info="http://github.com/"
              ></SingleProject>

              <SingleProject
                images={firstProjectImages}
                title="Third title"
                subheading="Four word project description"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
                info="http://github.com/"
              ></SingleProject>

              <SingleProject
                images={firstProjectImages}
                title="Fourth title"
                subheading="Four word project description"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
                info="http://github.com/"
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
