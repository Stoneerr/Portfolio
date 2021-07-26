//Files
const path = (file) => "../docs/" + file;
const cv = path("CV.pdf");

// Buttons
const btn_cv = document.getElementById("cv");

/* Download CV */
btn_cv.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(cv);
});
