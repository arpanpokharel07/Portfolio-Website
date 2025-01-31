import SingleService from "../Component/SingleService";
import "./Services.css";
import Header from "../Component/Header";

const Services = () => {
  return (
    <>
      <Header></Header>
      <div className="services" id="services">
        <h1>Services</h1>
        <div className="services-wrapper">
          <div className="service-list">
            <SingleService
              logo="images"
              title="Full-Stack Developer"
              information="I love building complete web applications, handling both the frontend and backend. On the frontend, I use React, and Tailwind CSS to create user-friendly, responsive interfaces. On the backend, I work with Node.js, Express.js, ASP.NET, and PHP, designing APIs and ensuring seamless data flow. I also manage databases like MySQL, MongoDB, and PostgreSQL and deploy applications using AWS, and Azure."
            ></SingleService>
            <SingleService
              logo="images"
              title="Software Developer"
              information="Writing clean and efficient code is something I truly enjoy. I have experience with languages like C, C++, C#, Java, and Python  which allows me to develop software solutions across different platforms. Whether it’s backend logic, API development, or integrating systems, I focus on creating scalable and maintainable applications."
            ></SingleService>

            <SingleService
              logo="images"
              title="Database Developer"
              information="A well-structured database is the foundation of any great application. I design, optimize, and manage databases using MySQL, MongoDB, and PostgreSQL, ensuring efficient data storage and retrieval. I also write optimized queries, improve performance through indexing, and handle data migration between different systems."
            ></SingleService>
            <SingleService
              logo="images"
              title="Documentation Developer"
              information="Good documentation makes a huge difference in any project. I create clear, structured guides for APIs, databases, and software systems using tools like Markdown, Postman, and JIRA. My focus is on making technical concepts easy to understand, ensuring teams can work efficiently with well-documented processes."
            ></SingleService>

            <SingleService
              logo="images"
              title="Mobile App Developer"
              information="Bringing applications to mobile is always exciting! I develop mobile apps using Android Studio (Java/Kotlin) and Swift, focusing on smooth user experiences and efficient performance. With my backend knowledge, I also build APIs and manage data interactions for mobile applications."
            ></SingleService>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
