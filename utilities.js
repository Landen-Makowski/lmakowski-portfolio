// ChatGPT helped me add localStorage so the user's dark/light
// theme preference is remembered after the page is refreshed.

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

ScrollReveal().reveal("#about, #skills, #contact", {
  distance: "25px",
  duration: 800,
  origin: "bottom"
});

ScrollReveal().reveal("#projects article", {
  distance: "30px",
  duration: 800,
  origin: "bottom",
  interval: 150
});