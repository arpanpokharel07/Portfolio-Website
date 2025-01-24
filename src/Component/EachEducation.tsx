type EachEducationProps = {
  startYear: string;
  endYear: string;
  institutionName: string;
  Location: string;
  description: string;
  level: string;
};

const EachEducation = (props: EachEducationProps) => {
  return (
    <div className="each-education">
      <div className="bullet"></div>
      <h6 className="timeline-date">
        {props.startYear} - {props.endYear}
      </h6>
      <div className="education-header">
        <h4 className="institution">
          <span>{props.level} </span>
          in {props.institutionName}
        </h4>
        <h5 className="education-title">{props.Location}</h5>
      </div>
      <div className="job-description">{props.description}</div>
    </div>
  );
};

export default EachEducation;
