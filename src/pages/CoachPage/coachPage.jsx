import { useEffect, useState } from "react";
import "../CoachPage/coachPage.scss";
import DataListPage from "../../components/DataListComponent/DataListComponent";

export default function CoachPage({ user }) {
  const [appointments, setAppointments] = useState({}); // { coachId: [users] }

  // Fetch appointments for a specific coach
  const fetchAppointments = (coachId) => {
    fetch(`http://localhost:5149/api/Coach/${coachId}/appointments`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) =>
        setAppointments((prev) => ({ ...prev, [coachId]: data }))
      )
      .catch(console.error);
  };

  // Fetch appointments for all coaches on mount
  useEffect(() => {
    fetch("http://localhost:5149/api/Coach", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((coaches) => {
        coaches.forEach((coach) => fetchAppointments(coach.id));
      })
      .catch(console.error);
  }, []);

  // Handle booking a coach
  const handleBookCoach = (coachId) => {
    if (!user) {
      alert("Please login to book a coach.");
      return;
    }

    fetch("http://localhost:5149/api/Coach/makeAppointment", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ CoachId: coachId, UserId: user.id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to book coach");
        return res.json();
      })
      .then((data) => {
        alert(`Coach booked! Appointment ID: ${data.appointmentId} by ${user.name}`);
        fetchAppointments(coachId); // Refresh the booked users
      })
      .catch((err) => {
        console.error(err);
        alert("Error booking coach.");
      });
  };

  return (
    <div className="container">
      <section className="hero">
        <div className="coachPageContainer">
          <DataListPage
            title="Our Coaches"
            fetchUrl="http://localhost:5149/api/Coach"
            renderItem={(coach) => {
              const bookedUsers = appointments[coach.id] || [];
              const isBooked = bookedUsers.some(u => u.id === user?.id);

              return (
                <div className="Coaches" key={coach.id}>
                  <div className="coachCard">
                    <div className="coachImage">
                      <img src="src/assets/sportcoach.jpg" alt="Coach" />
                    </div>
                    <div className="coachSpecialization">
                      <p>FitCoach {coach.specialization}</p>
                    </div>
                    <div className="coachInfo">
                      <p>By {coach.name}</p>
                      <p>€35 {coach.price}</p>
                    </div>
                    <button
                      onClick={() => handleBookCoach(coach.id)}
                      className="bookCourseBtn"
                      disabled={!user || isBooked}
                    >
                      {!user ? "Login to Book" : isBooked ? "Already Booked" : "Book Coach"}
                    </button>

                    <div className="bookedUsers">
                      <p>Booked by:</p>
                      {bookedUsers.map((u) => (
                        <li key={u.id}>{u.name}</li>
                      ))}
                    </div>
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
