import React from 'react';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {v4 as uuid } from 'uuid';

// import useLoggedIn from '../hooks/useLoggedin';
// import useContextGetter from '../hooks/useContext';
// import { useHistory } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
	// useLoggedIn();

    const { register, handleSubmit } = useForm();
	// const context = useContextGetter();
	

	const registerUser = ({ email, password, confirmPassword }) => {

		console.log(email, password);
		// check if the password and confirmPassword match
		if (password !== confirmPassword) {
			return alert(`passwords don't match`);
		}

		let newuser = {
			email: email,
			password: password,
			id: uuid (),
		};

		fetch(
			`https://user-manager-three.vercel.app/api/user/register`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newuser),
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.error === true) {
					return alert(result.message);
				}

				
				// context.dispatch({
				// 	type: 'LOGIN',
				// 	payload: result.body,
				// });
				console.log(newuser);

			
				// history.push(`/Notes/login?userId=${id}`);
			})
			.catch(err => {
				console.log('this error occurred', err);
				alert('an error occurred. Please try again later');
			});
    };
	return (
		
            <div className="register-page">
                
                <div className="yellow-box">
                    <div className="box-width">
                    <h1 className="yellowbox-text">Register </h1>
                    <p className="yellowbox-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias earum impedit odit repellat non ducimus fugit ullam veniam, necessitatibus dolor.</p>
                    </div>
                </div>


                <div className="white-box">
				<form onSubmit={handleSubmit(registerUser)}>

					<div className='form-group'>

						<label htmlFor='email'>Email</label>
						<input
							className='form-control'
							type='text'
							name='email'
							id='email'
							placeholder='james.bond@spectre.com'
							{...register('email',  {
								pattern: {
								value: /@/,
							  } 
							})}
							
						/>
					</div>
					<div>
					
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							className='form-control'
							type='password'
							name='password'
							id='password'
							placeholder='********'
							{...register('password', { required: true })}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='passwordRepeat'>Repeat Password</label>
						<input
							className='form-control'
							type='password'
							name='passwordRepeat'
							id='passwordRepeat'
							placeholder='********'
							{...register('confirmPassword', { required: true })}
						/>
					</div>
					<div className='m-t-lg'>
						<ul className='list-inline'>
							<li>
								
							{/* <Link to={`/Notes`}>  */}
								<button className='btn-form' type='submit'>
									Register
								</button> <span>or</span>
								<a className='signup__link' href='/login'>
									Log in
								</a>
							</li>
						</ul>
					</div>
				</form>
			</div>
                </div>
            
        );
    };
    export default Register;
    
		