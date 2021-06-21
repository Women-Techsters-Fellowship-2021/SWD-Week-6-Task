import React, { useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (firstName && password) {
      setFirstName(" ");
      setPassword(" ");
    } else {
      alert("Fill the form completly");
    }
  };

  return (
    <article className="signup">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          {" "}
          Login{" "}
        </button>
      </form>
    </article>
  );
};

export default Login;
