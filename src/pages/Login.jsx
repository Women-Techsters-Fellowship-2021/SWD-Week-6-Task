import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';
import  "../Styles/Pages.css";

export default function Login() {
    const context  = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const userHistory = useHistory();
    const userIn =context.state.userId;
    const Userlogin = ({email, password }) => {

    // get the users data
const user = localStorage.getItem(email);

if (!user) {
    return alert('An account for this email was not found');
}

const userdata = JSON.parse(user);
console.log(userdata);

if (password !== userdata.password) {
    return alert('email or password was incorrect');
}

alert('login successful for ' + email);

context.dispatch({
    type: 'LOGIN',
    payload: {
        isLoggedIn:true,
        userId: userIn,
        userEmail: userdata.email,
             },
  });
  userHistory.push('/notes');


	};




    return (

      <div className="limiter">
          <div className="wrap-login100">
                <form 
                className="login100-form validate-form p-l-55 p-r-55 p-t-178"
                    onSubmit={handleSubmit(Userlogin)}>
                    <span className="login100-form-title">Sign In</span>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input 
                                className="input100"
                                 type="text" name="username"
                                  placeholder="Email"
                                  required
                                  {...register("email")}/>
                         </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100" 
                                type="password" name="pass" 
                                placeholder="Password"
                                required
                                  {...register("password")}/>
                                    
                        </div>
                        <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit"> Sign in</button>
                        </div>


                <div className="flex-col-c p-t-170 p-b-40">
                <span className="txt1 p-b-9">
                Don’t have an account?
                </span>
                <a href="/register" className="txt3">Sign up now</a>
                </div>
                </form>
                </div>
                </div>
                
    );
  }
  
