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
      <div className="testimony-header">
        <img src={props.image} alt={props.image} />
        <h4>{props.name}</h4>
        <div className="testimony-stars">
          {Array.from(Array(props.star), (_, i) => (
            <Icons.StarFill fill="#FFD700" key={i} />
          ))}
        </div>
      </div>
      <div className="testimony-description">
        <p>{props.testimony}</p>
      </div>
    </div>
  );
};

export default IndividualTestimony;
