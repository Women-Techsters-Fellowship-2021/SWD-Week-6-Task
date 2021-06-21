import React, { useState } from "react";

const SignUp = ({ onRegister }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
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
          if (result.error) {
            return alert(result.message);
          }

          onRegister(result);
          setPassword('');
          setEmail('');
        })
        .catch((err) => {
          console.log("this error occurred", err);
        });
    } else {
      alert("Fill the form completly");
    }
  };

  return (
    <article className="signup">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          {" "}
          SignUp{" "}
        </button>
      </form>
    </article>
  );
};

export default SignUp;
