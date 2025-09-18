import "../../css/Global.scss";
import "./cursusPage.scss";
import DataListPage from "../../components/DataListComponent/DataListComponent";

function CursusPage() {
  return (
    <div className="container">
      <section className="hero">
        <div className="cursusPageContainer">
          <DataListPage
            title="Available Courses"
            fetchUrl="http://localhost:5149/api/Cursus"
            renderItem={(course) => (
              <div className="courseCard">
                <div className="courseImage">
                  <img
                    src="src/assets/benchpress.jpg" alt="Cursus" />
                </div>
                <div className="courseInfo">
                  <h2>{course.name}</h2>
                  <p>{course.description}</p>
                </div>
                {course.users?.length > 0 && (
                  <div className="courseUsers">
                    <p>Enrolled Users:</p>
                    <ul>
                      {course.users.map((user) => (
                        <li key={user.id}>
                          {user.name} — {user.subscription?.name ?? "No Subscription"}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="bookCourseBtn">Book Course</button>
              </div>
            )}
          />
        </div>
      </section>
    </div>
  );
}

export default CursusPage;
