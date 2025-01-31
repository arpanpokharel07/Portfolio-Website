import * as Icons from "bootstrap-icons";
import { Icon0Square, Icon0SquareFill } from "react-bootstrap-icons";

type ServiceProps = {
  logo: string;
  title: string;
  information: string;
};

const SingleService = (props: ServiceProps) => {
  return (
    <div className="single-service">
      <div className="single-service-item">
        <div className="logo">
          <Icon0SquareFill size={50} />
        </div>
        <div className="info">
          <h4>{props.title}</h4>
          <p>{props.information}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
