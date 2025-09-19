import { useState } from "react";
import "../../css/Global.scss";
import "./cursusPage.scss";
import DataListPage from "../../components/DataListComponent/DataListComponent";

export default function CursusPage({ user }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleBookCourse = (courseName, enrolledUsers) => {
    if (!user) {
      alert("Login alsjeblieft om een cursus te boeken.");
      return;
    }

    if (enrolledUsers?.some(u => u.id === user.id)) {
      alert("Je bent al ingeschreven voor deze cursus.");
      return;
    }

    fetch("http://localhost:5149/api/Cursus/inschrijvencursus", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cursusName: courseName, userId: user.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setRefreshTrigger(prev => prev + 1);
      })
      .catch((err) => {
        console.error(err);
        alert("Error booking course.");
      });
  };

  return (
    <div className="container">
      <section className="hero">
        <div className="cursusPageContainer">
          <DataListPage
            title="Available Courses"
            fetchUrl="http://localhost:5149/api/Cursus"
            refreshTrigger={refreshTrigger}
            renderItem={(course) => {
              const isEnrolled = course.users?.some(u => u.id === user?.id);
              return (
                <div className="Coaches" key={course.id}>
                  <div className="coachCard">
                    <div className="coachImage">
                      <img src="src/assets/benchpress.jpg" alt="Cursus" />
                    </div>
                    <div className="coachSpecialization">
                      <h2>{course.name}</h2>
                      <p>{course.description}</p>
                    </div>
                    <div className="coachInfo">
                      <p>Ingeschreven Gebruikers: {course.users?.length || 0}</p>
                    </div>
                    <button
                      className="bookCourseBtn"
                      onClick={() => handleBookCourse(course.name, course.users)}
                      disabled={!user || isEnrolled}
                    >
                      {!user ? "Login om te boeken" : isEnrolled ? "Al ingeschreven" : "Boek Cursus"}
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </section>
    </div>
  );
}
