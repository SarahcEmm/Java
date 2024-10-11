
const toggleButton = document.getElementById('toggle-button');
const body = document.body;


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
