import * as Icons from "react-bootstrap-icons";
type ServiceProps = {
  title: string;
  information: string;
};

//Function that sets logo based upon title of props
function findLogo(logoValue: string) {
  switch (logoValue) {
    case "Full-Stack Developer":
      return <Icons.Laptop size={50} />;
    case "Software Developer":
      return <Icons.CodeSlash size={50} />;
    case "Full-Stack Developer":
      return <Icons.Laptop size={50} />;
    case "Database Developer":
      return <Icons.Database size={50} />;
    case "Documentation Developer":
      return <Icons.Pen size={50} />;
    case "Mobile App Developer":
      return <Icons.Phone size={50} />;
  }
}

const SingleService = (props: ServiceProps) => {
  let logo = findLogo(props.title);
  return (
    <div className="single-service">
      <div className="single-service-item">
        <div className="logo">{logo}</div>
        <div className="info">
          <h4>{props.title}</h4>
          <p>{props.information}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
