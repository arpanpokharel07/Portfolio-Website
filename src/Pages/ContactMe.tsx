import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contact-me" id="contact-me">
      <h2>Any Project in mind? </h2>
      <h4>Let's Get in Touch...</h4>
      <form className="form">
        <label htmlFor="Name">Name: </label>
        <input type="text" placeholder="Name (Example: James Bond)" />
        <br />
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          placeholder="Email (Example: jamesbond007@gmail.com)"
        />
        <br />
        <label htmlFor=" Message">Message: </label>
        <textarea
          placeholder="Message (Example: Need a help for a confidential mission!!)"
          rows={7}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
