import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Header></Header>
      <div className="about-me" id="about-me">
        <div className="background-video">
          <video
            src="\media\video\about-me-background.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="aboutMe-main-info">
          <h1>Elevate Your Software: Find Exquisite Solutions with Me</h1>
          <img
            src="/media/images/arpan-laptop.png"
            alt="Arpan pokharel"
            width={350}
          />
          <caption>Meet Your Programmer</caption>
          <h3>
            I’m a developer skilled in building efficient solutions with MERN
            stack for web development and Python, C# or Java for software
            development.
          </h3>
          <div className="about-me-column">
            <div className="about-me-column-first">
              <p>
                I am a dedicated full-stack developer with expertise in building
                modern web applications and backend systems. Proficient in
                technologies like React, Node.js, ASP.NET, and MySQL, I focus on
                writing clean, efficient, and scalable code. My experience spans
                frontend, backend, databases, and cloud services, allowing me to
                create seamless, high-performance applications.
              </p>
            </div>
            <div className="about-me-column-second">
              <p>
                Passionate about continuous learning, I actively explore new
                technologies and refine my skills through hands-on projects. My
                ability to adapt and solve technical challenges makes me a
                valuable addition to any development team. I am eager to
                contribute and grow in a professional software engineering
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AboutMe;
