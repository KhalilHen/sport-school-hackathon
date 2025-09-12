import { Link } from "react-router-dom";
import "../css/landingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2 className="logo">⚡ Sport School</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to Sport School 🏆</h1>
        <p>Your one-stop platform for training, stats, and progress tracking.</p>
      </section>
    </div>
  );
}
