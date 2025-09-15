import "./landingPage.scss"

export default function LandingPage() {
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
            <button>Start now</button>
            {/* <CtaComponent></CtaComponent> */}
          </div>
          <div className="HomePageImage">
            <img src="src/assets/Gespierdeman.jpg" alt="Sport Image" width={400} height={500} />
          </div>
        </div>
      </section >
    </div >
  );
}
