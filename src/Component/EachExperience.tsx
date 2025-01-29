import * as Icons from "react-bootstrap-icons";

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
      <div className="bullet">
        <Icons.BriefcaseFill size={35} />
      </div>
      <h6 className="timeline-date">
        {props.startYear} - {props.endYear}
      </h6>
      <div className="job-header">
        <h4 className="job-title">{props.jobTitle}</h4>
        <h5 className="company">
          {props.companyName}
          <span className="location">in {props.Location}</span>
        </h5>
      </div>
      <div className="job-description">
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
