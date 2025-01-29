import Footer from "../Component/Footer";
import IndividualTestimony from "../Component/IndividualTestimony";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <>
      <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-wrapper">
          <div className="testimonial-list">
            <IndividualTestimony
              image="public/media/images/stock-2.jpg"
              name="Alessandra Banks"
              star={5}
              testimony=" I've had the opportunity to work with Arpan on multiple web development projects, and his ability to build both frontend and backend components seamlessly is impressive. His proficiency in React, Node.js, and databases like MongoDB and MySQL ensures that his applications are both functional and scalable. Any team looking for a reliable entry-level full-stack developer would be lucky to have him!"
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-1.jpg"
              name="Aaron Mayer"
              testimony=" Arpan Pokharel approaches software development with a structured and logical mindset. He quickly understands project requirements, writes clean and maintainable code, and is always open to learning new technologies. His knowledge of backend technologies like Express.js, ASP.NET, and GraphQL allows him to create efficient APIs that integrate seamlessly with front-end frameworks. He would be a great asset to any development team."
              star={4}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-3.jpg"
              name="Jones Mora"
              testimony=" Working with Mr. Pokharel has been a great experience. He is dedicated, detail-oriented, and always eager to improve his skills. Whether it's debugging complex issues or optimizing application performance, he takes the initiative to find the best solutions. His understanding of cloud platforms like AWS and Docker shows that he's ready to contribute to modern DevOps practices as well."
              star={4}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-4.jpg"
              name="Paul Dougherty"
              testimony=" I was thoroughly impressed with Arpan’s ability to design and implement secure, efficient backend systems. He has a strong command of database management, ensuring that data is structured optimally for performance. His ability to work with both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases makes him a versatile developer. Any company would benefit from his backend development skills"
              star={5}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-5.jpg"
              name="Rocky Simpson"
              testimony=" One of Arpan’s standout qualities is his eagerness to learn and apply new technologies. He takes feedback well and adapts quickly, making him a perfect fit for an entry-level software development role. His experience with multiple languages and frameworks, from JavaScript to C#, demonstrates his versatility and potential for growth in any engineering team."
              star={5}
            ></IndividualTestimony>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Testimonials;
