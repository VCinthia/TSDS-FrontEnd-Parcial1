
document.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
        const menu = document.querySelector('.nav ul');
        menu.classList.toggle('active');
    }

    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
});

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector('.nav ul');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }


} document.addEventListener('click', closeMenuOnClickOutside);