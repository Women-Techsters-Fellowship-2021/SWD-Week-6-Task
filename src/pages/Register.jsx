import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../components/stateprovider';
import  "../Styles/Pages.css";

const Register=()=> {

	const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
	const userHistory = useHistory();
    //const user =context.state.userId;

    function registerUser({ email, password, confirmpassword }) {
		if (!email) {
			return alert(`please provide an email`);
		}
		if (password !== confirmpassword) {
        return alert(`passwords don't match`);
		}

        if (!email) {
			return alert(`please provide an email`);
		}
		
		let userFound = localStorage.getItem(email);
		console.log(userFound);
		if (userFound) {
        return alert('this user has already been registered, Please sign in');
        
		}
        
		// create new user object and save it to local storage
		const newUser = {
			email: email,
			password: password,
			userId: Date.now(),
		};
        alert("User created Sucessfully, please sign in to continue!");
		// save the users data for accessing later
		localStorage.setItem(email, JSON.stringify(newUser))

		context.dispatch({
            type: 'REGISTER',
            payload: {
                userId: newUser.userId,
                userEmail:newUser.email,
            },
        });
        userHistory.push('/login');
		// create new user object and save in local storage
    }
// Register form template
    return (
      <div className="limiter">
          <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178"
                onSubmit ={handleSubmit(registerUser)}>
                    <span className="login100-form-title">New User Sign UP!</span>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100" 
                                type="text" name="username" 
                                placeholder="jane.doe@gmail.com"
                                {...register('email', { required: true })}/>
                         </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100"
                                 type="password" name="pass"
                                 id="password"
                                  placeholder="password"
                                  {...register('password', { required: true })}/>
                                    
                        </div>
                        <div className="wrap-input100 validate-input m-b-16">
                                <input className="input100"
                                 type="password" name="Confirmpassword" 
                                 id="confirmpassword"
                                 placeholder="confirm password"
                                 {...register('confirmpassword', { required: true })}/>
                                    
                        </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"> Sign Up</button>
                        </div>


                             </form>
                </div>
                </div>
                
    );
  }
  
  export default Register;