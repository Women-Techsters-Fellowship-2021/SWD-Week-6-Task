import { Link, useLocation } from "react-router-dom";
import useContextGetter from '../../hooks/useContextGetter';
import "./navbar.css";

export default function Navbar() {
  const {
		dispatch,
		state: { isUserLoggedIn },
	} = useContextGetter();
	const location = useLocation();

	const logout = () => {
		dispatch({
			type: 'LOGOUT',
		});
	};

  const renderNav = () => {
		if (!isUserLoggedIn && location.pathname === '/login') {
			return (
				<>
          <div className="top-center">
            <ul className="topList">
              <li className="topListItem"> 
					      <Link className="link" to='/register'>Register</Link>
              </li>
              </ul>
            </div>
				</>
			);
		}
    if (!isUserLoggedIn && location.pathname === '/register') {
			return (
				<>
        <div className="top-center">
          <ul className="topList">
            <li className="topListItem"> 
              <Link className="link" to='/login'>Login</Link>
            </li>
          </ul>
        </div>
				</>
			);
		}
    if (isUserLoggedIn) {
			return (
				<>
        <div className="top-center">
          <ul className="topList">
            <li className="topListItem"> 
              <Link className="link" to='/'>Home</Link>
            </li>
            <li className="topListItem"> 
              <Link className="link" to='/write'>Write</Link>
            </li>
          </ul>
            <br />
            <span className="link" onClick={logout}>Logout</span>
            
        </div>
				</>
			);
		}
	};

	return <nav>{renderNav()}</nav>;
}
  
  /* return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
 */