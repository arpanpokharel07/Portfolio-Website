import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-image">
        <img src="public\media\images\footer-image.png" alt="Footer" />
      </div>
      <div className="footer-quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#programming-language">Programming Language</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="connect-with-me">
        <h3>Find Me</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/arpan.pokharel4/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/arpan.pokharel/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/arpan-pokharel/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/arpanpokharel07">GitHub</a>
          </li>
          <li>
            <a href="https://leetcode.com/u/arpanpokharel07/">LeetCode</a>
          </li>
          <li>
            <a href="mailto:arpanpokharel07@gmail.com">Email</a>
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
