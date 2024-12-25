type ServiceProps = {
  title: string;
  information: string;
};

const SingleService = (props: ServiceProps) => {
  return (
    <div className="single-service">
      <div className="single-service-item">
        <h4>{props.title}</h4>
        <p>{props.information}</p>
      </div>
    </div>
  );
};

export default SingleService;
