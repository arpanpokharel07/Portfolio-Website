//import UserInfo from "./UserInfo";
import * as Icons from "react-bootstrap-icons";

type TestimonyProps = {
  image: string;
  name: string;
  testimony: string;
  star: Number;
};

const IndividualTestimony = (props: TestimonyProps) => {
  return (
    <div className="individual-testimony">
      <div className="testimony-stars">
        {Array.from(Array(props.star), (_, i) => (
          <Icons.StarFill fill="#FFD700" key={i} />
        ))}
      </div>
      <div className="testimony-header">
        <div className="testimony-description">
          <p>{props.testimony}</p>
        </div>
        <div className="testimony-img">
          <img src={props.image} alt={props.image} width={75} height={75} />
          <div className="individual-name">{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTestimony;
