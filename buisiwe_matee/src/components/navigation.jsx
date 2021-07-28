import { Link, useLocation,useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../components/appstate';

function Navigation() {
	
    const context = useContext(AppContext);
    const location = useLocation();
    const history = useHistory();

	const logout = () => {
		context.dispatch({
			type: 'LOGOUT',
		});
        history.push('/login');
	};

    const conditionalRendering = () => {
		if (context.state.isUserLoggedIn && location.pathname === '/login') {
			return (
				<>
					<Link to='/NotesList'>Register</Link>
				</>
			);
		}

		if (!context.state.isUserLoggedIn && location.pathname === '/NotesList') {
			return (
				<>
					<Link to='/login'>Login</Link>
				</>
			);
		}

		if (context.state.isUserLoggedIn) {
			return (
				<>
					<Link to='/NotesList'>My List</Link>
					<br />
					<span onClick={logout} style={{cursor:'pointer'}}>Logout</span>
				</>
			);
		}
	};

    return(
        <div>
            
            {conditionalRendering()}
        </div>
    )
}

export default Navigation;

