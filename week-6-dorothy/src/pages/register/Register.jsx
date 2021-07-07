import useContextGetter from '../../hooks/useContextGetter';
import useLoggedIn from '../../hooks/useLoggedIn';
import { useForm } from 'react-hook-form';
import "./register.css"

export default function Register() {
  useLoggedIn();
  const { register, handleSubmit } = useForm();
  const context = useContextGetter();

  const registerUser = ({email, password, confirmPassword }) => {
    if (!email) {
      return alert('Please provide an email')
    }
    if (password !== confirmPassword) {
      return alert ('Passwords do not match')
    }
   
    let newuser = {
			email: email,
			password: password,
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

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});
			})
			.catch(err => {
				console.log('this error occurred', err);
				alert('an error occurred. Please try again later');
			});
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit(registerUser)}>
        <label>Email</label>
        <input 
        className="registerInput" 
        type="text" 
        id="email"
        placeholder="Enter your email..."
        required
        {...register('email')} />
        <label>Password</label>
        <input 
        className="registerInput" 
        type="password" 
        id = "password"
        placeholder="Enter your password..." 
        required
        {...register('password')} />
        <label> Confirm Password</label>
        <input 
        className="registerInput" 
        type="password" 
        id = "confirm-password"
        placeholder="Confirm your password..." 
        required
        {...register('confirmPassword')} />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
    )
}