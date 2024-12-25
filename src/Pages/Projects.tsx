import SingleProject from "../Component/SingleProject";
import "./Project.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-wrapper">
        <div className="project-list">
          <SingleProject
            images="Hello"
            title="first title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
          ></SingleProject>

          <SingleProject
            images="Hello"
            title="Second title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
          ></SingleProject>

          <SingleProject
            images="Hello"
            title="Third title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro soluta facere aperiam iusto pariatur officiis distinctio tempore odit necessitatibus?"
          ></SingleProject>
        </div>
      </div>
    </div>
  );
};

export default Projects;
