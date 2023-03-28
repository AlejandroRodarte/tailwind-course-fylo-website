// query theme toggle button and dark/light icons
const themeToggle = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// remove .hidden CSS class to either dark or light SVG icon
// depending on the selected color theme
if (colorTheme === 'dark')
  themeToggleLightIcon.classList.remove('hidden');
else themeToggleDarkIcon.classList.remove('hidden');

// helper function to set new color theme in memory and in
// local storage
const setColorTheme = (newColorTheme) => {
  colorTheme = newColorTheme;
  localStorage.setItem(colorThemeKey, newColorTheme);
};

// helper function to toggle .hidden CSS classes on light/dark SVG icons
const toggleIcons = () => {
  themeToggleLightIcon.classList.toggle('hidden');
  themeToggleDarkIcon.classList.toggle('hidden');
};

// theme toggle button click handler
const onThemeToggleClick = () => {
  // if current theme is dark, set to light theme
  // else, set to dark theme
  if (colorTheme === 'dark') setColorTheme('light');
  else setColorTheme('dark');
  // toggle .dark CSS class on <html> and .hidden CSS classes on icons
  htmlElement.classList.toggle('dark');
  toggleIcons();
};

// add listener
themeToggle.addEventListener('click', onThemeToggleClick);
