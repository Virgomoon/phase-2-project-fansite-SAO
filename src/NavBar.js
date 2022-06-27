import React from "react";
import './css/NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Navbar({ isLoggedIn, setIsLoggedIn, currentUser }) {

    const history = useNavigate();

    function handleLogout() {
    setIsLoggedIn(false);
    history("/login");
    }

    const navigator =  isLoggedIn ?  (
        <div className="nav_wrap">
        <div className="nav">
            <NavLink to="/" exact="true" className="links">
                Home
            </NavLink>
            <NavLink to="/Characters" className="links">
                Characters
            </NavLink>
            <NavLink to="/Reviews" className="links">
                Reviews
            </NavLink>
            <NavLink to="/About" className="links">
                About
            </NavLink>
        </div>
            <span>
            Welcome {currentUser}!
            </span>
            <Button className="nav_button" secondary onClick={handleLogout}>Logout</Button>
        </div>
       ) : null

    return (
        <>
            {navigator}
        </>
    )
}

export default Navbar