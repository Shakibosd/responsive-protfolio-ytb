const image = document.getElementById("logoImage");
image.addEventListener("click", function () {
  window.location.href = "index.html";
});



const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to set dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Function to set light mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
}

// Toggle dark mode
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Check local storage for dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  enableDarkMode();
  // Make sure the toggle reflects the actual state
  darkModeToggle.checked = true;
}