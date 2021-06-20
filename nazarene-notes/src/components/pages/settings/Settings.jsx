import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";
import { FaUserCircle } from "react-icons/fa";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Tour Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              className="profilePicture"
              src="https://images.unsplash.com/photo-1615941555468-76a267ab4159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <label htmlFor="fileInput" className="profilePictureInput">
              <span className="settingsProfilePictureIcon">
                <FaUserCircle />
              </span>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Nazarene" />
          <label>Email</label>
          <input type="email" placeholder="nazarene@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button type="submit" className="settingsUpdate">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
