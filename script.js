const themeToggle = document.getElementById('theme-toggle');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
const savedTheme = localStorage.getItem('ifty-portfolio-theme');
if (savedTheme === 'light') document.documentElement.classList.add('light');
function updateToggle() {const light = document.documentElement.classList.contains('light');themeToggle.textContent = light ? '☾' : '☀︎';themeToggle.setAttribute('aria-pressed', String(light));}
updateToggle();
themeToggle.addEventListener('click', () => {document.documentElement.classList.toggle('light');localStorage.setItem('ifty-portfolio-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');updateToggle();});
