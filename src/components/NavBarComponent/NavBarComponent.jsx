import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavigationBar({ user, setUser, currentSubscription }) {
    const [loading, setLoading] = useState(false);

    async function handleLoginLogout() {
        if (user) {
            // If user is logged in, log them out
            setUser(null);
            return;
        }

        try {
            setLoading(true);

            // Pick a random user ID from 0, 1, 2
            const userId = Math.floor(Math.random() * 3);

            // Fetch user data
            const response = await fetch(`http://localhost:5149/api/User/${userId}`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error("Login failed");

            const data = await response.json();

            // Fetch the user's subscription by userId (fixed endpoint)
            const subResponse = await fetch(`http://localhost:5149/api/Subscription/${data.id}`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });

            let abonnementType = "Unknown";
            let subData = null;

            if (subResponse.ok) {
                subData = await subResponse.json();
                abonnementType = subData.name; // e.g., "Starter", "Basic", "Unlimited"
            }

            // Set the user with subscription info
            setUser({
                id: data.id,
                name: data.name,
                abonnementType,
            });

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
                <button onClick={handleLoginLogout} disabled={loading}>
                    {loading
                        ? "Loading..."
                        : user
                            ? `${user.name}${currentSubscription ? ` (${currentSubscription.name})` : ""} - Logout`
                            : "Login"}
                </button>

            </div>
        </nav>
    );
}

export default NavigationBar;
