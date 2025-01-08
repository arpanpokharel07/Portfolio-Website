import IndividualTestimony from "../Component/IndividualTestimony";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-wrapper">
        <div className="testimonial-list">
          <IndividualTestimony
            image="public/media/images/arpan-laptop.png"
            name="Arpan Pokharel"
            star={5}
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
          ></IndividualTestimony>

          <IndividualTestimony
            image="public/media/images/arpan-laptop.png"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={4}
          ></IndividualTestimony>

          <IndividualTestimony
            image="public/media/images/arpan-laptop.png"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={4}
          ></IndividualTestimony>

          <IndividualTestimony
            image="public/media/images/arpan-laptop.png"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={2}
          ></IndividualTestimony>

          <IndividualTestimony
            image="public/media/images/arpan-laptop.png"
            name="Arpan Pokharel"
            testimony=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa adipisicing elit. Totam, neque. Neque alias assumenda ratione suscipit sapiente ipsa corporis culpa placeat?"
            star={1}
          ></IndividualTestimony>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
