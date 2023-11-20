import React, { useState } from "react";
import "./SignupPage.css";

const SignupPage = ({ onSignup }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const handleSignup = () => {
    if (name && password && email && phone && profession) {
      const userData = { name, password, email, phone, profession };
      onSignup(userData);
      alert("Signup successful!"); 
    } else {
      alert("Invalid input. Please fill in all fields."); 
    }
  };

  return (
    <>
      <h1>SIGNUP</h1>
      <div className="signup-container">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="tel"
          placeholder="Enter your Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Profession:</label>
        <select onChange={(e) => setProfession(e.target.value)}>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
        <div className="btn-con">
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;