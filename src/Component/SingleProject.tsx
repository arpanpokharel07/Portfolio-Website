import ImageSlider from "./ImageSlider";

type ProjectProps = {
  images: string[];
  title: string;
  description: string;
  info: string;
  subheading: string[];
};

const SingleProject = (props: ProjectProps) => {
  return (
    <div className="individual-project">
      <div className="individual-project-item">
        <div className="project-images">
          <ImageSlider imageURLs={props.images}></ImageSlider>
        </div>
        <div className="individual-project-info">
          <h4>
            {props.title}
            <span className="progLang">
              {props.subheading.map((src, index) => (
                <img src={src} key={index} />
              ))}
            </span>
          </h4>

          <p>{props.description}</p>
        </div>
        <div className="detailed-info">
          <button>
            <a href={props.info}> Detailed Info</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
