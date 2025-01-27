import EachExperience from "../Component/EachExperience";
import Header from "../Component/Header";
import "./Experience.css";

const description = [
  "1. lorem ipsum dolor sit amet, consectetur adip",
  "2. lorem ipsum dolor sit amet, consectetur adip",
  "3. lorem ipsum dolor sit amet, consectetur adip",
  "4. slorem ipsum dolor sit amet, consectetur adip",
];

const Experience = () => {
  return (
    <>
      <Header></Header>
      <div className="experience" id="experience">
        <h1>Experience</h1>
        <div className="experience-wrapper">
          <EachExperience
            startYear="Sept 2024"
            endYear="Dec 2024"
            jobTitle="Software Developer Intern"
            companyName="GrayScale Private Ltd."
            Location="Waterloo, ON"
            description={description}
          ></EachExperience>

          <EachExperience
            startYear="May 2023"
            endYear="Sept 2024"
            jobTitle="Security Guard"
            companyName="ASG Security Group Ltd."
            Location="Toronto, ON"
            description={description}
          ></EachExperience>

          <EachExperience
            startYear="Sept 2022"
            endYear="April 2023"
            jobTitle="Cook"
            companyName="Church's Texas Chicken"
            Location="Waterloo, ON"
            description={description}
          ></EachExperience>
        </div>
      </div>
    </>
  );
};

export default Experience;
