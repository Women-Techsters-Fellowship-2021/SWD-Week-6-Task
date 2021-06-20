import "./topbar.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagram,
} from "react-icons/fa";

export const TopBar = () => {
  const user = false;
  return (
    <div className="topbar-div">
      <div className="topLeft">
        <div className="topIcon">
          {" "}
          <FaFacebookSquare />
        </div>
        <div className="topIcon">
          <FaTwitterSquare />
        </div>
        <div className="topIcon">
          <FaPinterestSquare />
        </div>
        <div className="topIcon">
          <FaInstagram />
        </div>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://i.pinimg.com/564x/8e/75/c2/8e75c2841251fd354fc0a7d6ecc22424.jpg"
            alt="awesome"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGOUT
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
