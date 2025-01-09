import SingleService from "../Component/SingleService";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services-wrapper">
        <div className="service-list">
          <SingleService
            title="Full-Stack Developer"
            information="I can work as a full stack developer, performing best in both front-end and back-end technology to provide clean and reliable code for you and your team."
          ></SingleService>
          <SingleService
            title="Software Developer"
            information="I can work as a software developer, performing best in software technology to provide clean and reliable code for you and your team."
          ></SingleService>
          <SingleService
            title="Database Developer"
            information="I can work as a database developer, performing best in database technology to provide clean and reliable code for you and your team."
          ></SingleService>
          <SingleService
            title="Documentation Developer"
            information="I can work as a documentation developer, performing best in documentation technology to provide clean and reliable code for you and your team."
          ></SingleService>
          <SingleService
            title="Mobile Application Developer"
            information="I can work as a mobile application developer, performing best in mobile application technology to provide clean and reliable code for you and your team."
          ></SingleService>
        </div>
      </div>
    </div>
  );
};

export default Services;
