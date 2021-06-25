import { AppContext } from '../components/stateProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Register () {
    const { setState } = useContext(AppContext)
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const registerUser = ({ email, password, confirmPassword}) => {
        if (!email) {
            return alert('Please provide an email address');
        }
        if (password !== confirmPassword) {
            return alert("Passwords don't match");
        }

        let registeredUser = localStorage.getItem(email);
        console.log(registeredUser);
        //to check if a user has already been registered
        if (registeredUser) {
            return alert('This user already has an account');
        }

        //create a new user and save it to local storage
        const newUser = {
            email: email,
            password: password,
            userId: Date.now(),
        };
        //save users data into local storage in other to access it later
        localStorage.setItem(email, JSON.stringify(newUser));
        alert('User registered successfully');

        setState(prevValue => {
            return {
                ...prevValue,
                isLoggedIn: true,
                userId: newUser.userId,
                userEmail: newUser.email,
            };
        });
        history.push('/home');
    }
    

    return (
        <form onSubmit={handleSubmit(registerUser)} className="myform">
			<div className="top access-form">
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div className="access-form">
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div className="access-form">
				<label htmlFor='confirm-password'>
					Confirm Password
				</label>
				<br />
				<input
					type='password'
					name='confirm-password'
					id='confirm-password'
					required
					{...register('confirmPassword')}
				/>
			</div>
			<br />
			<div>
				<button type='submit' className='register'>
					Register
				</button>
			</div>
		</form>
	);
}

export default Register;