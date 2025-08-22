const themeSwitch = document.querySelector('.theme-switch');
const html = document.documentElement;
const icon = themeSwitch.querySelector('i');

themeSwitch.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    localStorage.setItem('theme', newTheme);
});

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';



