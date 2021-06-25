import { useContext } from 'react';
import { AppContext } from '../components/stateProvider';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Login() {
    const { setState } = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const login = ({ email, password }) => {
        //get a user's data
        const user = localStorage.getItem(email);

        if (!user) {
            return alert('This email does not have an account');
        }

        const userData = JSON.parse(user);
        console.log(userData);

        if (password !== userData.password) {
            return alert('Incorrect email or password');
        }
        setState(prevState => {
            return {
                ...prevState,
                isLoggedIn: true,
                userId: userData.userId,
                userEmail: userData.email,
            };
        });
        history.push('/home');
        alert('Login successful!');
    };

    return (
        <>
			<form onSubmit={handleSubmit(login)} className="myform">
				<div className="top access-form">
					<input
						type='text'
						placeholder='email'
                        id="email"
						required
						{...register('email')}
					/>
				</div><br></br>
				<div className="access-form">
					<input
						type='password'
						placeholder='password'
                        id="password"
						required
						{...register('password')}
					/>
				</div><br></br>
				<button type='submit' className="login">Login</button>
			</form>
		</>
    );
}

export default Login;