import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {v4 as uuid } from 'uuid';


import '../styles/Login.css';

function Login() {

	const { register, handleSubmit } = useForm();


	const loginHandler = ({ email, password }) => {
	// creates data to be sent to the api for validation
	let userdata = {
		email: email,
		password: password,
		id: uuid (),
	};

	fetch(
		'https://user-manager-three.vercel.app/api/user/login',
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(userdata),
		}
	)
		.then(res => res.json())
		.then(result => {
			console.log(result);
			if (result.error === true) {
				return alert(result.message);

			}
		
		})
		
		.catch(err => {
			alert(
				'Unable to complete request. Please try again after some time'
			);
			console.log({ err });
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(loginHandler)}>
				<div className="signin-form">
					<h4 className="signin-tag">Sign in</h4>
					
					<input
						type='text'
						placeholder='email'
						required
						{...register('email')}
						className="signin-input"
					/>
				
					<input
						className="signin-input"
						type='password'
						placeholder='password'
						required
						{...register('password')}
					
					/>
				
				<Link to={`/Notespage`}> 
				<input
				className="Login-button" 
				 type='submit'
				value='Login' />
				</Link>
                </div>
			</form>
		</>
	);
}


export default Login;