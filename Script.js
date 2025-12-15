// Zorgt ervoor dat de voorkeur van de gebruiker wordt opgeslagen in localStorage
const themeToggleButton = document.getElementById('theme-toggle');

// Laad de opgeslagen voorkeur bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌞';  // De knop wijzigt naar zon icoon
  } else {
    document.body.classList.add('light-mode');
    themeToggleButton.textContent = '🌙';  // De knop wijzigt naar maan icoon
  }
});

// Toggle de thema en sla de voorkeur op
themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌞';  // Zon icoon voor donker
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeToggleButton.textContent = '🌙';  // Maan icoon voor licht
    localStorage.setItem('theme', 'light');
  }
});
