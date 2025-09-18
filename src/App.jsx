
import { Routes, Route, Link } from "react-router-dom";
import LandingsPage from "./pages/LandingPage/landingPage";
import Subscriptions from "./pages/SubscriptionsPage/subscriptions";
import CoachPage from "./pages/CoachPage/coachPage";
import CursusPage from "./pages/CursusPage/cursusPage";
import NavigationBar from "./components/NavBarComponent/navbarComponent";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingsPage />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/CoachPage" element={<CoachPage />} />
        <Route path="/cursus" element={<CursusPage />} />
      </Routes>
    </div>
  );
}


export default App
