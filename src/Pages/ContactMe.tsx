const ContactMe = () => {
  return (
    <div className="contact-me" id="contact-me">
      <h2>Any Project in mind? </h2>
      <h4>Let's Get in Touch</h4>
      <form>
        <label htmlFor="Name">Name: </label>
        <input type="text" placeholder="Name" />

        <label htmlFor="Email">Email: </label>
        <input type="email" placeholder="Email" />

        <label htmlFor="Message">Message: </label>
        <textarea placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
