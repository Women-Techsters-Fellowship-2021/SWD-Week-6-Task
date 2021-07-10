// import React, { useState } from 'react';
// import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { AppContext } from '../components/stateprovider';

/*const initialState = {
    isLoggedIn: false,
    userId: null,
    userEmail: null
};*/

function Register() {
    // const { state, setState } = useState(initialState);
    const { register, handleSubmit } = useForm();
    // const { state, setState } = useContext(AppContext);
    const history = useHistory();

    // console.log(state)

    function registerUser({ email, password, confirmPassword }) {
        if (!email) {
            return alert(`please provide an email`);
        }
        if (password !== confirmPassword) {
            return alert(`passwords don't match`);
        }
        let userFound = localStorage.getItem(email);
        console.log(userFound);

        if (userFound) {
            return alert('this user has already been registered');
        }
        // create new user object and save it to local storage
        const newUser = {
            email: email,
            password: password,
            userId: Date.now(),
        };

        // save the users data for accessing later
        localStorage.setItem(email, JSON.stringify(newUser));

        alert('user registered');
        /* setState((prevValue) => {
             return {
                 ...prevValue,
                 isLoggedIn: true,
                 userId: newUser.userId,
                 userEmail: newUser.email,
             };
         });*/
        history.push("/home");
    }


    return (

        <form className="box" onSubmit={handleSubmit(registerUser)}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email"
                    name='email'
                    id='email'
                    placeholder='admin.admin@admin.com'
                    {...register('email', { required: true })} />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    name='password'
                    id='password'
                    placeholder='********'
                    {...register('password', { required: true })} />
            </div>


            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password"
                    name='passwordRepeat'
                    id='passwordRepeat'
                    placeholder='********'
                    {...register('confirmPassword', { required: true })} />
            </div>
            <ul>
                <li>
                    <button type="submit" className="register-btn" >Register</button>
                </li>
                <li>

                    <a href='/login'>
                        I already have an account
                    </a>

                </li>
            </ul>



        </form>


    );
}

export default Register;




