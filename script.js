fetch('http://localhost:3000/courses')
.then(response => response.json())
.then(courses => {
    const courseContainer = document.querySelector('#course-container')
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card'

        const courseTitle = document.createElement('h2');
        courseTitle.innerText = course.title;
        courseCard.appendChild(courseTitle)

        const detailLink = document.createElement('a')
        detailLink.href = '#'
        detailLink.innerText = 'Detail';
        detailLink.onclick = () => {
            showCourseDetail(course)
        };
        courseCard.appendChild(detailLink)

        courseContainer.appendChild(courseCard)
    });
});