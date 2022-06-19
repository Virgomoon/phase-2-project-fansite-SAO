import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar({ setIsLoggedIn }) {

    const history = useNavigate();

    function handleLogout() {
    setIsLoggedIn(false);
    history("/login");
    }


    return (
    <div>
        <NavLink
        to="/"
        exact="true"
        >
            Home
        </NavLink>

        <button onClick={handleLogout}>Logout</button>
    </div>
    )
}

export default Navbar