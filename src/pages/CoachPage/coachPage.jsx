import "../CoachPage/coachPage.scss";
import DataListPage from "../../components/DataListComponent/DataListComponent";

export default function CoachPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="coachPageContainer">
          <DataListPage
            title="Our Coaches"
            fetchUrl="http://localhost:5149/api/Coach"
            renderItem={(coach) => (
              <div className="Coaches">
                <div className="coachCard">
                  <div className="coachImage">
                    <img src="src/assets/sportcoach.jpg" alt="Coach" />
                  </div>
                  <div className="coachSpecialization">
                    <p>FitCoach{coach.specialization}</p>
                  </div>
                  <div className="coachInfo">
                    <p>By {coach.name}</p>
                    <p>€35{coach.price}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </section>
    </div>
  );
}