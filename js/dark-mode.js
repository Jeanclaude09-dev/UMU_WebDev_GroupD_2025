const toggle = document.getElementById("darkModeToggle");
const html = document.documentElement; // store the content of the <html> tag so we can change global properties like changing theme
const darkIcon = document.querySelector(".dark-mode-icon"); //querySelector search in the document the element that have that specific class name
const lightIcon = document.querySelector(".light-mode-icon");

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"; // `localStorage.getItem` check if the browser stores an item with the key "theme" and return the value if any or return null

if (currentTheme === "dark") {
  html.classList.add("dark");
  darkIcon.classList.add("hidden");
  lightIcon.classList.remove("hidden");
}

// Toggle dark mode on button click
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  // Toggle icons
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  // Save preference
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
