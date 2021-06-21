import "../Styles/Pages.css";
import { useContext } from 'react';
import { AppContext } from './stateprovider';
import { Link,useHistory } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';

	const NavBar = () => {
		const { state, dispatch } = useContext(AppContext);
		const history = useHistory();
	
		const logout = () => {
			dispatch({ type: 'LOGOUT' });
			history.push('/home');
		};

    return (
      <nav className="navbar">
           <Link className="navlink" to='/home'>
				Home
			</Link>

			{!state.isLoggedIn ? (
				<>
					 <Link className="navlink" to='/register'>
						Register
					</Link>
					<Link className="navlink" to='/login'>
						Login
					</Link>
				</>
			) : (
				<>
				<Link className="navlink"to='/notes'>
					Course Notes
					</Link>

                    <Link className="navlink"to='/mynotes'>
					Personal Notes
					</Link>	

					<span onClick={logout} className="navlink">
					Logout
					</span>

				</>
			)}





   
			
			
           
           
           
           </nav>
    );
  };
  
  export default NavBar;
  