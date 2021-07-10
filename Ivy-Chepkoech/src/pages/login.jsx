import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

// import { useContext } from 'react';

// import { AppContext } from '../components/stateprovider';
/*const initialState = {
    isLoggedIn: false,
    userId: null,
    userEmail: null

};*/

function Login() {
    // const { setState } = useContext(AppContext);
    // const [state, setState] = useState(initialState);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    // console.log(state);

    const login = ({ email, password }) => {
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

        alert('login successfull');
        /* setState(
            () => {
                return {

                    isLoggedIn: true,
                    userId: userdata.userId,
                    userEmail: userdata.email,
                };
            });*/
        history.push("/notes");
    };

    // 
    return (

        <form className="box" onSubmit={handleSubmit(login)}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    {...register('email')} />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    {...register('password')} />
            </div>

            <button type="submit" className="login-btn" >Login</button>

        </form>

    );
}

export default Login;


