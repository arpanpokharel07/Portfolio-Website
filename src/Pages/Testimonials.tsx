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
              posCompany="Software Engineer @ Tech Corp"
              star={5}
              testimony=" Arpan Pokharel has a strong grasp of both frontend and backend development. His work with React, Node.js, and databases ensures smooth and scalable applications. Any team would benefit from his technical skills and dedication."
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-1.jpg"
              name="Aaron Mayer"
              posCompany="Lead Developer @ Dev Solutions"
              testimony=" Arpan quickly understands project needs and writes clean, maintainable code. His backend expertise in Express.js and ASP.NET makes him a well-rounded developer. He is a great addition to any development team. "
              star={5}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-3.jpg"
              name="Jones Mora"
              posCompany="Senior Developer @ CloudSoft"
              testimony="Mr.Pokharel quickly understands project needs and writes clean, maintainable code. His backend expertise in Express.js and ASP.NET makes him a well-rounded developer. He is a great addition to any development team."
              star={5}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-4.jpg"
              name="Paul Dougherty"
              posCompany="Tech Lead @ DataStream Inc."
              testimony=" Arpan builds efficient, secure, and well-structured backend systems. His knowledge of MySQL, PostgreSQL, and MongoDB allows him to handle complex data management. He’s a valuable asset for backend-heavy projects."
              star={5}
            ></IndividualTestimony>

            <IndividualTestimony
              image="public/media/images/stock-5.jpg"
              name="Rocky Simpson"
              posCompany="Software Engineer @ Innovate Labs"
              testimony=" Mr. Arpan adapts quickly and is always expanding his skill set. His experience across multiple languages and frameworks makes him highly versatile. He would be a strong contributor to any engineering team."
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
