import "./landingPage.scss"
import "../../css/Global.scss";

export default function LandingPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="LandingPageContainer">
          <div className="information-container">
            <h1>De kast</h1>
            <div className="info-text">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </div>
            <button>Start now</button>
            {/* <CtaComponent></CtaComponent> */}
          </div>
          <div className="HomePageImage">
            <img src="src/assets/razer.jpg" alt="Sport Image" width={400} height={500} />
          </div>
        </div>
      </section>
    </div>
  );
}
