import { useForm } from 'react-hook-form';
import useContextGetter from '../../hooks/useContextGetter';
import useLoggedIn from '../../hooks/useLoggedIn';
import "./login.css";

export default function Login() {
  useLoggedIn();
  const context = useContextGetter()
  const { register, handleSubmit } = useForm();

  const login = ({email, password }) => {
    //const user = localStorage.getItem(email);
    let userdata = {
      email: email,
      password: password,
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
      .then(res =>res.json())
      .then(result => {
        if(result.error) {
          return alert(result.message);
        }
        context.dispatch({
          type: 'LOGIN',
          payload:result.body,
        })
        
      })
      .catch(err => {
        alert(
          'Unable to complete request. Please try again after some time'
        );
        console.log({ err });
      });

  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit(login)}>
        <label>Email</label>
        <input 
        className="loginInput"
         type="text" 
         placeholder="Enter your email..."
         required
         {...register('email')} />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        required
        {...register('password')} />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
        
    </div>
  );
}