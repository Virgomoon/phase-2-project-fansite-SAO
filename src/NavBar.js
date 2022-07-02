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
                <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Home
                </NavLink>
                <NavLink to="/Characters" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Characters
                </NavLink>
                <NavLink to="/Reviews" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Reviews
                </NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? "link-active" : "link")}>
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