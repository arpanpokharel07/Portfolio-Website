type ProgramProps = {
  label: string;
  src: string;
  text: string;
};

const Program = (props: ProgramProps) => {
  return (
    <li className="program-item">
      <figure className="program-item-wrap" data-category={props.label}>
        <img src={props.src} alt={props.label} className="program-img" />
      </figure>
      <div className="program-item-info">
        <h5 className="program-text">{props.text}</h5>
      </div>
    </li>
  );
};

export default Program;
