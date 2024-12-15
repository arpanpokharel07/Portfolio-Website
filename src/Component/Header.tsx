import "./Header.css";
import * as Icons from "react-bootstrap-icons";

function Header() {
  return (
    <div className="header">
      <div className="logo" id="#header">
        <img src="public\images\logo.png" alt="Arpan Pokharel" />
      </div>

      <div className="menu">
        <ul className="menu-items">
          <li>ABOUT ME</li>
          <li>PROGRAMMING LANGUAGE</li>
          <li>PROJECT</li>
          <li>EDUCATION</li>
          <li>EXPERIENCE</li>
          <li>CONTACT ME</li>
        </ul>
      </div>

      <div className="resume">
        <a href="/files/Arpan_Pokharel_Resume.pdf" download>
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
