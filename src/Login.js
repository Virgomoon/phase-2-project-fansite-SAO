import React, { useState } from "react";
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Login({setIsLoggedIn}) {

    const history = useNavigate();
    const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    history("/") 
  }

    return (
        <div className="login_screen">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Username
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                </label>
                <label>
                    Password
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                </label>
                <Button type="submit">Login</Button>
            </form>
        </div>
        )

}

export default Login;