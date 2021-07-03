import { Link , useHistory } from 'react-router-dom';

function Navbar({state, setState}) {
   
    const history = useHistory();

    const logout = () => {
        setState(false);
        history.push('/login');
	};

	return (
        // working with specific menu for each page on the nav bar
        <nav className='navbar'> 
			{state ? (
				<>
					<Link className='link' to='/my-note'>My List</Link>
					<br />
					<span onClick={logout} className='link'>
						Logout
					</span>
				</>
			) : (
				<>
					<Link className='link' to='/login'>Login</Link>
					<br />
					<Link className='link' to='/register'>Register</Link>
					<br />
				</>
			)}
		</nav>
	);
}

export default Navbar;
