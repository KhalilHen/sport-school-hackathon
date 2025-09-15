import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavigationBar() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //Get all users from backend for testing purposes
    useEffect(() => {
        async function fetchAllUsers() {
            try {
                const response = await fetch("https://localhost:7147/api/User", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch all users");
                }

                const data = await response.json();
                console.log("All users from backend:", data);
            } catch (error) {
                console.error("Error fetching all users:", error);
            }
        }

        fetchAllUsers();
    }, []);


    async function handleLogin() {
        try {
            setLoading(true);

            const userId = "1"; // Replace with actual user ID or logic to get it

            const response = await fetch(`https://localhost:7147/api/User/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ /* Any required body data */ }),
            });


            if (!response.ok) {
                throw new Error("login failed");
            }

            const data = await response.json();

            setUser(data.user);
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    return (
        <nav className="navbar">
            <div className="left-section">
                <h2 className="logo">⚡ De Kast</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Subscriptions">Subscriptions</Link>
                    <Link to="/CoachPage">Coach</Link>
                    <Link to="/cursus">Cursus</Link>
                </div>
            </div>

            <div className="login-button">
                {user ? (
                    <button disabled>
                        {user.name} ({user.abonnementType})
                    </button>
                ) : (
                    <button onClick={handleLogin} disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                )}

            </div>
        </nav>
    );
}

export default NavigationBar;
