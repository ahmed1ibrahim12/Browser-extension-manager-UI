// let isDarkMode = true;

// function toggleMode() {
//   isDarkMode = !isDarkMode;
//   if (isDarkMode) {
//     document.body.style.background = `linear-gradient(180deg, #040918 0%, #091540 100%)`;
//     document.getElementById('mode-icon').src = 'assets/images/icon-sun.svg';
//     document.getElementById('list-title').style.color = 'white';
//     document.querySelectorAll('.extension').forEach(extension => {
//       extension.classList.remove('light-bg');  // Remove light class
//       extension.classList.add('dark-bg');     // Add dark class
//       extension.style.border = `2px solid hsl(226, 11%, 37%)`;
//       extension.style.color = `hsl(0, 0%, 78%)`;
//       extension.querySelector('.extension-title').style.color = `hsl(200, 60%, 99%)`;
//       document.querySelector('.navbar').style.background = `hsl(227, 75%, 14%)`;
//       document.querySelector('.darkmode').style.background = `hsl(225, 23%, 24%)`;
//     });
//   } else {
//     document.body.style.background = `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`;
//     document.getElementById('mode-icon').src = 'assets/images/icon-moon.svg';
//     document.getElementById('list-title').style.color = 'hsl(226, 25%, 17%)';
//     document.querySelectorAll('.extension').forEach(extension => {
//       extension.classList.remove('dark-bg');   // Remove dark class
//       extension.classList.add('light-bg');     // Add light class
//       extension.style.border = `2px solid hsl(0, 0%, 93%)`;
//       extension.style.color = `hsl(0, 0%, 93%)`;
//       extension.querySelector('.extension-title').style.color = `hsl(227, 75%, 14%)`;
//       document.querySelector('.navbar').style.background = `hsl(200, 60%, 99%)`;
//       document.querySelector('.darkmode').style.background = `hsl(0, 0%, 93%)`;
//     });
//   }
// }

function toggleMode() {
  const button = document.querySelector('.darkmode');
  const icon = button.querySelector('#mode-icon');
  const body = document.body;
  const extensions = document.querySelectorAll('.main-content'); // select all elements with class "extension"

  if (body.classList.contains('darkmode')) {
    // Switch to light mode
    icon.src = 'assets/images/icon-sun.svg';
    icon.alt = 'light-mode';
    body.style.backgroundImage = 'linear-gradient(180deg, #040918 0%, #091540 100%)';
    body.classList.remove('darkmode');
    extensions.forEach(extension => extension.classList.remove('light-mode')); // remove class "extension-light" from all elements with class "extension"
  } else {
    // Switch to dark mode
    icon.src = 'assets/images/icon-moon.svg';
    icon.alt = 'dark-mode';
    body.style.backgroundImage = 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)';
    body.classList.add('darkmode');
    extensions.forEach(extension => extension.classList.add('light-mode')); // add class "extension-light" to all elements with class "extension"
  }
}