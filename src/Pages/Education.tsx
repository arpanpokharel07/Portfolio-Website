import EachEducation from "../Component/EachEducation";
import Footer from "../Component/Footer";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education">
        <h1>Education</h1>

        <div className="education-wrapper">
          <div className="education-list">
            <EachEducation
              startYear="Sept 2022"
              endYear="April 2024"
              institutionName="Conestoga College"
              Location="Waterloo, Ontario, Canada"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sapiente sit dolorem, dolor incidunt ratione eligendi. Maiores quibusdam
            ipsam voluptates, magnam sapiente illo"
              level="Diploma"
            ></EachEducation>

            <EachEducation
              startYear="Jan 2021"
              endYear="April 2022"
              institutionName="Conestoga College"
              Location="Waterloo, Ontario, Canada"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sapiente sit dolorem, dolor incidunt ratione eligendi. Maiores quibusdam
            ipsam voluptates, magnam sapiente illo"
              level="Diploma"
            ></EachEducation>

            <EachEducation
              startYear="July 2017"
              endYear="Oct 2019"
              institutionName="Kathmandu Model College"
              Location="Bagbazar, Kathmandu, Nepal"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sapiente sit dolorem, dolor incidunt ratione eligendi. Maiores quibusdam
            ipsam voluptates, magnam sapiente illo"
              level="High School"
            ></EachEducation>

            <EachEducation
              startYear="May 2014"
              endYear="April 2017"
              institutionName="New Vision Academy"
              Location="Koteshower, Kathmandu, Nepal"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        sapiente sit dolorem, dolor incidunt ratione eligendi. Maiores quibusdam
        ipsam voluptates, magnam sapiente illo"
              level="Junior High School"
            ></EachEducation>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Education;
