const toggle = document.querySelector('.toggle-dark');

toggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark');
})