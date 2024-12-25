type ProjectProps = {
  images: string;
  title: string;
  description: string;
};

const SingleProject = (props: ProjectProps) => {
  return (
    <div className="individual-project">
      <div className="individual-project-item">
        <img src={props.images} alt={props.title} />
        <div className="individual-project-info">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
