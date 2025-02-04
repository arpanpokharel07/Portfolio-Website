import "./Header.css";
import * as Icons from "react-bootstrap-icons";

function Header() {
  return (
    <div className="header" id="header">
      <div className="logo">
        <a href="/">Arpan Pokharel</a>
      </div>

      <div className="menu">
        <ul className="menu-items">
          <li>
            <a href="about-me">ABOUT ME</a>
          </li>
          <li>
            <a href="programming-languages">PROGRAMMING LANGUAGE</a>
          </li>
          <li>
            <a href="projects">PROJECTS</a>
          </li>
          <li>
            <a href="experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="services">SERVICES</a>
          </li>
          <li>
            <a href="contact-me">CONTACT ME</a>
          </li>
        </ul>
      </div>

      <div className="resume">
        <a href="./public/files/Arpan_Pokharel_Resume.pdf" download>
          <button type="button" className="btn btn-success">
            RESUME DOWNLOAD &nbsp;
            <Icons.FileEarmarkArrowDown size={25}>
              <i className="bi bi-file-earmark-arrow-down"></i>
            </Icons.FileEarmarkArrowDown>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
