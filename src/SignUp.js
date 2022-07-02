import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./css/SignUp.css"
import { Button } from 'semantic-ui-react';

function SignUp(){

    const history = useNavigate()
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
      })

      function handleUserChange(e) {
        setNewUser({
          ...newUser,
          [e.target.name]: e.target.value,
        });
      }

      function handleAddUser(e){
        e.preventDefault()

        let newAdd = ({
            username: e.target.username.value,
            password: e.target.password.value,
        })

        setNewUser({
            username: "",
            password: "",
          })

          fetch("https://backend-fansite-sao.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAdd),
            })
        .then((res)=> res.json())
        .then((added)=> console.log(added))
    
        history("/Login")
       
      }

    return (
        <div className="sign-up">
          <h1 className="heading"> Create Account</h1>
            <form className="form" onSubmit={handleAddUser}>
            <label>
                    Username
                <input
                type="text"
                name="username"
                required
                value={newUser.username}
                onChange={handleUserChange}
                />
                </label>
                <label>
                    Password
                <input
                type="text"
                name="password"
                required
                value={newUser.password}
                onChange={handleUserChange}
                />
                </label>
            <Button>Submit</Button>
            </form>
            <Button onClick={()=> history("/Login")}>Go Back</Button>
        </div>
    )

}

export default SignUp