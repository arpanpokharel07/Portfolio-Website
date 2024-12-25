import IndividualTestimony from "../Component/IndividualTestimony";

const Testimonials = () => {
  return (
    <div className="tesimonials" id="tesimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-wrapper">
        <div className="testimonial-list">
          <IndividualTestimony
            image="First Testimonial"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={5}
          ></IndividualTestimony>

          <IndividualTestimony
            image="Second Testimonial"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={5}
          ></IndividualTestimony>

          <IndividualTestimony
            image="Third Testimonial"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={5}
          ></IndividualTestimony>

          <IndividualTestimony
            image="Fourth Testimonial"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={5}
          ></IndividualTestimony>

          <IndividualTestimony
            image="Fifth Testimonial"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={5}
          ></IndividualTestimony>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
