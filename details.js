const urlParams = new URLSearchParams(window.location.search);

async function fetchDetails() {
  let id = 1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    try {
      let response = await fetch(`http://localhost:3000/courses/${id}`);
      let details = await response.json();
      let tableBody = document.querySelector("#courseDetailBody");

      for (const detail of details) {
        let row = tableBody.insertRow(-1);

        let cell = row.insertCell();
        cell.innerText = detail.id;

        let cell1 = row.insertCell();
        cell1.innerText = detail.dept;

        let cell2 = row.insertCell();
        cell2.innerText = detail.courseName;

        let cell3 = row.insertCell();
        cell3.innerText = detail.courseNum;

        let cell4 = row.insertCell();
        cell4.innerText = detail.instructor;

        let cell5 = row.insertCell();
        cell5.innerText = detail.numDays;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

fetchDetails()