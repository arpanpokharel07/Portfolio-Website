type ProjectProps = {
  images: string;
  title: string;
  description: string;
  info: string;
  subheading: string;
};

const SingleProject = (props: ProjectProps) => {
  return (
    <div className="individual-project">
      <div className="individual-project-item">
        <div className="project-images">
          <img src={props.images} alt={props.title} height={400} width={400} />
        </div>
        <div className="individual-project-info">
          <h4>
            {props.title} <span>{props.subheading}</span>
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
