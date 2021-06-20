import "./sidebar.css";
import girl from "../../assets/girl.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagram,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT NAZARENE</span>
        <img className="sidebarImg" src={girl} alt="girl" />
        <p>
          I'm an aspiring software developer and future woman in tech. I really
          enjoy coding in React and fascinated by all the new things i learn in
          React Js.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">MY INTERESTS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Drawing</li>{" "}
          <li className="sidebarListItem">Coding</li>{" "}
          <li className="sidebarListItem">Reading</li>{" "}
          <li className="sidebarListItem">Fashion</li>{" "}
          <li className="sidebarListItem">Writing</li>{" "}
          <li className="sidebarListItem">Music</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <div className="sidebarIcon">
            {" "}
            <FaFacebookSquare />
          </div>
          <div className="sidebarIcon">
            <FaTwitterSquare />
          </div>
          <div className="sidebarIcon">
            <FaPinterestSquare />
          </div>
          <div className="sidebarIcon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
