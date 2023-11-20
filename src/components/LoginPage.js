import React, { useState } from "react";
import "./LoginPage.css";
const LoginPage = ({ onLogin }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      
      const storedUser = JSON.parse(localStorage.getItem("user"));
  
      setName(currentName => currentName.trim()); 
      setPassword(currentPassword => currentPassword.trim()); 
  
      if (
        storedUser &&
        storedUser.name === name &&
        storedUser.password === password
      ) {

        onLogin();
      } else {
        alert("Invalid credentials");
      }
    };
  
    return (
      <>
        <h1>LOGIN</h1>
        <div className="login-container">
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
          <div className="btn-con">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </>
    );
  };
  
  export default LoginPage;
  