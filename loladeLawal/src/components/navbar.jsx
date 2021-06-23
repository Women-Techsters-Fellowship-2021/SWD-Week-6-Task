import { Link } from 'react-router-dom';
import { useState } from 'react'

function Navbar() {
    // const [login, setlogin] = useState("")

	return (
		<nav className='navbar'> 
            <Link className='link' to='/login'>Login </Link>
            <Link className='link' to='/register'>Register</Link>
            <Link className='link' to='/my-note'>My Note</Link>
			
		</nav>

        //working with specific menu for each page on the nav bar
        // <nav className='navbar'> 
		// 	{login ? (
		// 		<>
		// 			<Link className='link' to='/my-note'>My List</Link>
		// 			<br />
		// 			<span>Logout</span>
		// 		</>
		// 	) : (
		// 		<>
		// 			<Link className='link' to='/login'>Login</Link>
		// 			<br />
		// 			<Link className='link' to='/register'>Register</Link>
		// 			<br />
		// 		</>
		// 	)}
		// </nav>
	);
}

export default Navbar;
