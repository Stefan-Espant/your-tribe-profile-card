function openSubject(subjectName) {
    const subjects = document.getElementsByClassName("subject")
    for (let subject of subjects) subject.style.display = "none"
    document.getElementById(subjectName).style.display = "inline-flex";  
  }