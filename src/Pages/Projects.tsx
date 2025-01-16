import SingleProject from "../Component/SingleProject";
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

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-wrapper">
        <div className="project-list">
          <Slider {...settings}>
            <SingleProject
              images="public\media\images\arpan-lake.png"
              title="First title"
              subheading="Four word project description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
              info="http://github.com/"
            ></SingleProject>

            <SingleProject
              images="public\media\images\arpan-lake.png"
              title="Second title"
              subheading="Four word project description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
              info="http://github.com/"
            ></SingleProject>

            <SingleProject
              images="public\media\images\arpan-lake.png"
              title="Third title"
              subheading="Four word project description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
              info="http://github.com/"
            ></SingleProject>

            <SingleProject
              images="public\media\images\arpan-lake.png"
              title="Fourth title"
              subheading="Four word project description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
              info="http://github.com/"
            ></SingleProject>

            <SingleProject
              images="public\media\images\arpan-lake.png"
              title="Fifth title"
              subheading="Four word project description"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
              info="http://github.com/"
            ></SingleProject>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
