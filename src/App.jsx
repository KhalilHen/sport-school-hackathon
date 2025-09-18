
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingsPage from "./pages/LandingPage/landingPage";
import Subscriptions from "./pages/SubscriptionsPage/subscriptions";
import CoachPage from "./pages/CoachPage/coachPage";
import CursusPage from "./pages/CursusPage/cursusPage";
import NavigationBar from "./components/NavBarComponent/NavBarComponent";

function App() {
  const [user, setUser] = useState(null);
  const [currentSubscription, setCurrentSubscription] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5149/api/Subscription/${user.id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      })
        .then((res) => res.json())
        .then((sub) => setCurrentSubscription(sub))
        .catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <NavigationBar user={user} setUser={setUser} currentSubscription={currentSubscription} />
      <Routes>
        <Route path="/" element={<LandingsPage user={user} />} />
        <Route path="/Subscriptions" element={<Subscriptions user={user} setUser={setUser} currentSubscription={currentSubscription} setCurrentSubscription={setCurrentSubscription} />} />
        <Route path="/CoachPage" element={<CoachPage user={user} />} />
        <Route path="/cursus" element={<CursusPage user={user} />} />
      </Routes>
    </div>
  );
}


export default App
