type EachExperienceProps = {
  startYear: string;
  endYear: string;
  jobTitle: string;
  companyName: string;
  Location: string;
  description: string[];
};

const EachExperience = (props: EachExperienceProps) => {
  return (
    <div className="each-experience">
      <div className="bullet"></div>
      <div className="timeline">
        <div className="endYear">{props.endYear}</div>
        <div className="startYear"> {props.startYear}</div>
      </div>
      <div className="job-header">
        <div className="job-title">{props.jobTitle}</div>
        <div className="company">{props.companyName}</div>
        <div className="location">{props.Location}</div>
      </div>
      <div className="description">
        Duties and Responsibility
        <ul>
          <li>{props.description[0]}</li>
          <li>{props.description[1]}</li>
          <li>{props.description[2]}</li>
          <li>{props.description[3]}</li>
        </ul>
      </div>
    </div>
  );
};

export default EachExperience;
