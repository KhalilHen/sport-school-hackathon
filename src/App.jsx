import { Routes, Route, Link } from "react-router-dom";
import LandingsPage from "./pages/landingPage";
import Subscriptions from "./pages/subscriptions";
import CoachPage from "./pages/coachPage";
import CursusPage from "./pages/cursusPage";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Subscriptions">Subscriptions</Link> |{" "}
        <Link to="/CoachPage">Coach</Link> |{" "}
        <Link to="/cursus">Cursus</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<LandingsPage />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/CoachPage" element={<CoachPage />} />
        <Route path="/cursus" element={<CursusPage />} />
      </Routes>
    </div>
  );
}

export default App;
