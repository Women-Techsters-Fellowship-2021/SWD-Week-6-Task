import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../components/appStateProvider";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";


import '../styles/register.css'

export default function Register() {
    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    function registerHandler({email, password, confirmpassword}){

        if (password !== confirmpassword) {
            return alert("The passwords entered do not match");
        }

        let newuser = {
            email: email,
            password: password,
        };

        fetch(`https://user-manager-three.vercel.app/api/user/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newuser),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error === true) {
                    return alert(result.message);
                }

                context.dispatch({
                    type: "LOGIN",
                    payload: result.body,
                });

                history.push("/notes");
            })
            .catch((err) => {
                console.log("this error occurred", err);
                alert("an error occurred. Please try again later");
            });
    };
    

    return (
        <div className='register'>
            <form onSubmit={handleSubmit(registerHandler)}>
                <h2 className="form-title">Register</h2>
                <input {...register("email", { required: true })} placeholder='Email' type='text' />
                <input id='pw' {...register("password", { required: true })} placeholder='Password' type='password' />
                <input id='cpw' {...register("confirmpassword", { required: true })} placeholder='Confirm Password' type='password' />
                <input className='animated' type='submit' value='Register' />
                <Link className='forgot' to='/login'>Already have an account?</Link>
            </form>
        </div>

    )
}