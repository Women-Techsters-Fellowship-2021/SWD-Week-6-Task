import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              HTML
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              CSS
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              Javascript
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              React
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              C#
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              Python
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}