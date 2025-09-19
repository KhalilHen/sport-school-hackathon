import { useEffect, useState } from "react";
import "./subscriptions.scss";

export default function SubscriptionsPage({ user, setUser, currentSubscription, setCurrentSubscription }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null);

  // Fetch all subscriptions
  useEffect(() => {
    fetch("http://localhost:5149/api/Subscription/all", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSubscriptions(data))
      .catch(console.error);
  }, []);

  // Set highlight based on current subscription (from NavBar login)
  useEffect(() => {
    if (currentSubscription) {
      setSelectedSubscriptionId(currentSubscription.id);
    } else if (user && subscriptions.length > 0) {
      // If user is logged in but no currentSubscription yet, fetch from backend
      fetch(`http://localhost:5149/api/Subscription/${user.id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((sub) => {
          setSelectedSubscriptionId(sub.id);
          setCurrentSubscription(sub); // sync NavBar
        })
        .catch(console.error);
    }
  }, [user, currentSubscription, subscriptions, setCurrentSubscription]);

  const handleSelect = async (subscriptionId) => {
    if (!user) {
      alert("Login om de abonnement te wijzigen.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5149/api/Subscription/change", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, subscriptionId }),
      });

      const data = await res.json();
      alert(data.message);

      // Fetch the updated subscription from backend
      const subRes = await fetch(`http://localhost:5149/api/Subscription/${user.id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (!subRes.ok) throw new Error("Failed to fetch updated subscription");
      const updatedSub = await subRes.json();

      setSelectedSubscriptionId(updatedSub.id); // update highlight
      setCurrentSubscription(updatedSub);       // update NavBar button
    } catch (err) {
      console.error(err);
      alert("Fout bij het bijwerken van abonnement.");
    }
  };

  const handleCancel = () => {
    if (!user) return alert("Login om te annuleren");

    fetch("http://localhost:5149/api/Subscription/cancel", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setSelectedSubscriptionId(null);       // remove highlight
        setCurrentSubscription(null);         // remove current subscription
        setUser({ ...user, abonnementType: null }); // remove abonnement type in NavBar
      })
      .catch((err) => {
        console.error(err);
        alert("Fout bij het annuleren van abonnement.");
      });
  };





  return (
    <div className="container">
      <section className="hero">
        <div className="subscriptionsPageContainer">
          <div className="cardContainer">
            <div className="cards">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className={`subscriptionTierCard ${selectedSubscriptionId === sub.id ? "highlighted" : ""}`}
                >
                  <div className="upperSection">
                    <h2>{sub.name}</h2>
                    <p>{sub.description}</p>
                    <p>€{sub.price}/month</p>
                  </div>
                  <div className="lowerSection">
                    {sub.features.map((f, i) => (
                      <p key={i}>{f}</p>
                    ))}
                    <button
                      className="subscriptionButton"
                      onClick={() => handleSelect(sub.id)}
                      disabled={selectedSubscriptionId === sub.id}
                    >
                      {selectedSubscriptionId === sub.id ? "Geselecteerd" : "Selecteer"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="subscriptionActions">
              {user && selectedSubscriptionId !== null && (
                <div className="cancel-subscription">
                  <button onClick={handleCancel} className="cancelButton">
                    Annuleer Lidmaatschap
                  </button>
                </div>

              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
