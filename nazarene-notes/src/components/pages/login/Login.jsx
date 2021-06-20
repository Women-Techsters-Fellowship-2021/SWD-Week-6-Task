import { Link, useHistory } from "react-router-dom";
import "./login.css";

function Login() {
  const history = useHistory();
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className="loginInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="loginInput"
        />
        <button
          type="button"
          onClick={() => history.push("/posts")}
          className="loginButton"
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
