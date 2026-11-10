/*Prompt: Help me add a dark/light mode toggle to my portfolio using a separate JavaScript file. 
Use DOM selection and an event listener, and make sure the button text updates to reflect the active theme. 
I also want the user’s selected theme to persist after the page is refreshed.

ChatGPT helped me create the theme-toggle JavaScript using
document.getElementById(), addEventListener(), classList.toggle(),
conditional button text, and localStorage to remember the selected
theme after refresh. I also adapted the CSS for the dark-mode palette.
*/

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀ Light Mode";
}

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☾ Dark Mode";
  }
});

ScrollReveal().reveal(
  ".intro, #about, #skills, #projects, #contact, .case-study-header, figure, details, address",
  {
    distance: "25px",
    duration: 800,
    origin: "bottom",
    interval: 100
  }
);

ScrollReveal().reveal("#projects article", {
  distance: "30px",
  duration: 800,
  origin: "bottom",
  interval: 150
});

ScrollReveal().reveal(
  ".case-study-header, main section, figure, details, address",
  {
    distance: "25px",
    duration: 800,
    origin: "bottom",
    interval: 100
  }
);

/*GLightBox Feature*/
const lightbox = GLightbox({
  selector: ".glightbox"
});