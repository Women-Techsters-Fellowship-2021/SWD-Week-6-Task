import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './stateProvider';

// import styles
import styles from '../styles/navbar.module.css';

function Navbar () {
    const { state, setState } = useContext(AppContext);
    const history = useHistory();

    const logout = () => {
        setState(prev => {
            return {
                ...prev,
                isLoggedIn: false,
                userEmail: null,
                userId: null,
            };
        });
        history.push('/home');
    };

    const showNavbar = () => {
        if (!state.isLoggedIn) {
            return (
                <>
                    <Link className={styles.navlink} to='/register'>Register</Link>
                    <Link className={styles.navlink} to='/login'>Login</Link>
                    <Link className={styles.navlink} to='/Home'>Home</Link>
                </>
    
            );
        } else  if (state.isLoggedIn) {
			return (
				<>
					<Link className={styles.navlink} to='/Home'>Home</Link>
                    <Link className={styles.navlink} to='/notes'>Notes</Link>
                    <Link className={styles.navlink} to='/mynotes'>My Notes</Link>
					<Link className={styles.navlink} to='/addnotes'>Write Notes</Link>
                    <Link className={styles.navlink} to='/popular'>Popular</Link>
					<span className={styles.navlink} onClick={logout}>Logout</span>
				</>
			);
        }
    }

       
    return (
        <nav className={styles.navbar}>{showNavbar()}</nav>
    );
}

export default Navbar;



























































//import { Link, useHistory } from 'react-router-dom'
// import { useContext, useState } from "react";
// import { NoteContext } from "./NoteContextProvider";

// // import styles
// import styles from '../styles/navbar.module.css';

// function Navbar() {
//     const { notes } = useContext(NoteContext);
//     const { state, setState } = useState();
//     const history = useHistory();

//     const logout = () => {
//         setState(prev => {
//             return {
//                 ...prev,
//                 isLoggedIn: false,
//                 userEmail: null,
//                 userId: null,
//             };
//         });
//         history.push('/home');
//     };
    
//     const showNavbar = () => {
//         if (!state.isLoggedIn) {
//             return (
//                 <>
//                     <Link className={styles.navlink} to='/register'>Register</Link>
//                     <Link className={styles.navlink} to='/login'>Login</Link>
//                     <Link className={styles.navlink} to='/Home'>Home</Link>
//                 </>
    
//             );
//         } else  if (state.isLoggedIn) {
// 			return (
// 				<>
// 					<Link className={styles.navlink} to='/Home'>Home</Link>
//                     <Link className={styles.navlink} to='/notes'>Notes</Link>
// 					<Link className={styles.navlink} to='/addnotes'>Write Notes</Link>
//                     {/* <Link className={styles.navlink} to='/mynotes'>My Notes</Link> */}
//                     <Link className={styles.navlink} to='/popular'>Popular</Link>
//                     <span className={styles.navlink}>Number of notes: { notes.length }</span>
// 					<span className={styles.navlink} onClick={logout}>Logout</span>
// 				</>
// 			);
//         }
//     }

       
//     return (
//         <nav className={styles.navbar}>{showNavbar()}</nav>
//     );
// }

// export default Navbar;