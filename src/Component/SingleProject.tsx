type ProjectProps = {
  images: string;
  title: string;
  description: string;
};

const SingleProject = (props: ProjectProps) => {
  return (
    <div className="individual-project">
      <div className="individual-project-item">
        <div className="project-images">
          <img src={props.images} alt={props.title} height={400} width={400} />
        </div>
        <div className="individual-project-info">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
