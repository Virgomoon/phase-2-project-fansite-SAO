import React from "react";
import './css/NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Navbar({ setIsLoggedIn }) {

    const history = useNavigate();

    function handleLogout() {
    setIsLoggedIn(false);
    history("/login");
    }


    return (
    <div className="nav_wrap">
        <div className="nav">
            <NavLink to="/" exact="true" className="links">
                Home
            </NavLink>
            <NavLink to="/Anime" className="links">
                Anime
            </NavLink>
            <NavLink to="/Manga" className="links">
                Manga
            </NavLink>
            <NavLink to="/Characters" className="links">
                Characters
            </NavLink>
        </div>
            <Button className="nav_button" secondary onClick={handleLogout}>Logout</Button>
    </div>
    )
}

export default Navbar