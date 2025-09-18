import "./subscriptions.scss";

export default function SubscriptionsPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="subscriptionsPageContainer">
          <div className="cardContainer">
            <div className="subscriptionTierCard">
              <div className="upperSection">
                <h2>Starter</h2>
                <p>Best for all beginners</p>
                <p>€9.99/month</p>
              </div>
              <div className="lowerSection">
                <p>Gym toegang 1x</p>
                <p>Betaalde coach</p>
                <p>Betaalde cursus</p>
                <button className="subscriptionButton">Select</button>
              </div>
            </div>
            <div className="subscriptionTierCard highlighted">
              <div className="upperSection">
                <h2>Advanced</h2>
                <p>Best for all beginners</p>
                <p>€29.99/month</p>
              </div>
              <div className="lowerSection">
                <p>Onbeperkt Gym toegang</p>
                <p>Gratis coach</p>
                <p>Gratis cursus</p>
                <button className="subscriptionButton">Select</button>
              </div>
            </div>
            <div className="subscriptionTierCard">
              <div className="upperSection">
                <h2>Basic</h2>
                <p>Best for all beginners</p>
                <p>€19.99/month</p>
              </div>
              <div className="lowerSection">
                <p>Gym toegang 2x</p>
                <p>Betaalde coach</p>
                <p>Betaalde cursus</p>
                <button className="subscriptionButton">Select</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}