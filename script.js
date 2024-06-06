fetch("http://localhost:3000/courses")
  .then((response) => response.json())
  .then((courses) => {
    const courseContainer = document.querySelector("#course-container");
    courses.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";

      const courseTitle = document.createElement("h2");
      courseTitle.innerText = course.title;
      courseCard.appendChild(courseTitle);

      const detailLink = document.createElement("a");
      detailLink.href = "#";
      detailLink.innerText = "Detail";
      detailLink.onclick = () => {
        showCourseDetail(course);
      };
      courseCard.appendChild(detailLink);

      courseContainer.appendChild(courseCard);
    });
  });

function showCourseDetail(course) {
  const modal = document.querySelector("#modal");
  const instructorElement = document.querySelector("#instructor");
  const startDateElement = document.querySelector("#startDate");
  const numDaysElement = document.querySelector("#numDays");

  instructorElement.innerText = `Instructor: ${course.instructor}`;
  startDateElement.innerText = `Start Date: ${course.startDate}`;
  numDaysElement.innerText = `Course Length: ${course.numDays} days`;

  modal.style.display = "block";
}

document.addEventListener("click", (event) => {
  if (
    event.target === document.getElementById("modal") || event.target.className === "close") {
    document.getElementById("modal").style.display = "none";
  }
});