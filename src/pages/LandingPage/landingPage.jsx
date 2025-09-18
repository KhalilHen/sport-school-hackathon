import "./landingPage.scss"

export default function LandingPage({ user }) {

  function handleCheckIn() {
    if (!user) {
      alert("Please login to check in.");
      return;
    }

    fetch(`http://localhost:5149/api/Subscription/checkin/${user.id}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" }
    })
      .then(async (res) => {
        const text = await res.text(); // get raw response
        if (!res.ok) throw new Error(text); // throw text for alert
        return JSON.parse(text); // parse successful response
      })
      .then(data => alert(data.message))
      .catch(err => alert(err.message || "Check-in failed"));
  }


  return (
    <div className="container">
      <section className="hero">
        <div className="LandingPageContainer">
          <div className="information-container">
            <h1>De kast</h1>
            <div className="info-text">
              <h3>Welkom bij De Kast</h3>
              <p>Of je nu spieren wilt opbouwen, conditie wilt verbeteren of gewoon lekker wilt trainen: bij ons vind je de juiste sfeer, de beste apparatuur en de motivatie om alles uit jezelf te halen.</p>
              <h4>Stap binnen en ontdek jouw kracht.</h4>
            </div>
            <button onClick={handleCheckIn} disabled={!user}>Scan QR code</button>
          </div>
          <div className="HomePageImage">
            <img src="src/assets/Gespierdeman.jpg" alt="Sport Image" width={400} height={500} />
          </div>
        </div>
      </section >
    </div >
  );
}
