import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image">
        <img src="public\media\footer-image.png" alt="Footer" />
      </div>
      <div className="footer-quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#programming-language">Programming Language</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="connect-with-me">
        <h3>Connect with Me</h3>
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="ss">Instagram</a>
          </li>
          <li>
            <a href="ss">LinkedIn</a>
          </li>
          <li>
            <a href="ss">GitHub</a>
          </li>
          <li>
            <a href="ss">LeetCode</a>
          </li>
          <li>
            <a href="ss">Email</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Arpan Pokharel.</p>
      </div>
    </div>
  );
};

export default Footer;
