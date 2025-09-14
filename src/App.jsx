import { Routes, Route, Link } from "react-router-dom";
import LandingsPage from "./pages/landingPage";
import Subscriptions from "./pages/subscriptions";
import CoachPage from "./pages/coachPage";
import CursusPage from "./pages/cursusPage";
import NavigationBar from "./components/NavBarComponent/navbarComponent";
import CtaComponent from "./components/ctaComponent";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingsPage  />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/CoachPage" element={<CoachPage />} />
        <Route path="/cursus" element={<CursusPage />} />
      </Routes>
    </div>
  );
}

export default App;
