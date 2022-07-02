import React, { useState } from "react";
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Login({ setIsLoggedIn, setCurrentUser }) {

  const history = useNavigate();
  const [userData, setUserData] = useState([])
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

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("https://backend-fansite-sao.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        const userSignIn = data.find((user) => user.username === formData.username)
        setUserData(data)
        if(!userSignIn){
          setFormData({
          username: "",
          password: "",
        })
        return
      }
        if (userSignIn.password  === formData.password) {

          setIsLoggedIn(true);
          setCurrentUser(userSignIn.username)

          history("/")

        }
        setFormData({
          username: "",
          password: "",
        })
      })
  }

  return (
    <div className="login_screen">
      <h1>Fansite SAO</h1>
      <h3>The Sword Art Online Fansite</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Login</Button>
      </form>
      <h3 onClick={() => history('/SignUp')}>Create Account</h3>
    </div>
  )

}

export default Login;