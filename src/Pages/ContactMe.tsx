import "./ContactMe.css";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Swal from "sweetalert2";

const ContactMe = () => {
  const onSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7e40551e-a1a4-497b-ba9e-2ce7feff5aaf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent successfully!",
        icon: "success",
      });
    }
  };
  return (
    <>
      <Header></Header>
      <div className="contact-me" id="contact-me">
        <h2>Any Project in mind? </h2>
        <h4>Let's Get in Touch...</h4>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name (Example: James Bond)"
          />
          <br />
          <label htmlFor="Email">Email: </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email (Example: jamesbond007@gmail.com)"
          />
          <br />
          <label htmlFor=" Message">Message: </label>
          <textarea
            name="message"
            required
            placeholder="Message (Example: Need a help for a confidential mission!!)"
            rows={7}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactMe;
