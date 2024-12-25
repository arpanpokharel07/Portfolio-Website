import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="background-video">
        <video src="\media\video\about-me-background.mp4" autoPlay loop muted />
      </div>
      <div className="aboutMe-main-info">
        <h1>Elevate Your Software: Find Exquisite Solutions with Me</h1>
        <img
          src="/media/images/arpan-laptop.png"
          alt="Arpan pokharel"
          width={400}
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
              I began my coding journey in 2016 with HTML and CSS, laying the
              foundation for web development. During the COVID pandemic, I
              explored Python, diving into its versatility. By 2021, I was
              honing my skills with C and C++ through education, and in 2022, I
              embraced JavaScript to create dynamic applications.
            </p>
          </div>
          <div className="about-me-column-second">
            <p>
              using C, C++, C#, JavaScript, React, Node.js, MongoDB, and MySQL.
              I specialize in creating reliable applications across front-end
              and back-end systems. I’m a Full-Stack Developer with expertise in
              software development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
