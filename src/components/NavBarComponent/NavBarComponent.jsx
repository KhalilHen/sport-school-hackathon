import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function HandleLogin() {
    alert("Login functionality to be implemented.");
}

function NavigationBar() {
    return (
        <nav className="navbar">
            <div className="left-section">
                <h2 className="logo">⚡ Sport School</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Subscriptions">Subscriptions</Link>
                    <Link to="/CoachPage">Coach</Link>
                    <Link to="/cursus">Cursus</Link>
                </div>
            </div>

            <div className="login-button">
                <button onClick={HandleLogin}>Login</button>
            </div>
        </nav>
    );
}

export default NavigationBar;
