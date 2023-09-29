// Check if a reload has already been performed
if (window.location.search !== '?reloaded') {

    window.location.href = window.location.href + '?reloaded';

}

function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth', // Add smooth scrolling behavior
        });
    }
}

// Add click event listeners to your navigation links
const navLinks = document.querySelectorAll('.nav-links a');
const navLinks2 = document.querySelectorAll('.li-link--none');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

navLinks2.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const offcanvasMenu = document.getElementById("offcanvas-menu");
    const overlay = document.querySelector(".overlay");
    const lines = document.querySelectorAll(".line");

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            offcanvasMenu.style.top = "0";
            lines.forEach(function (line) {
                line.style.stroke = "#fff";
            });
            overlay.style.display = "block";
        } else {
            offcanvasMenu.style.top = "-400px";
            lines.forEach(function (line) {
                line.style.stroke = "#000";
            });
            overlay.style.display = "none";
        }
    });
});

ScrollReveal().reveal('.home__hero', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.reveal', {
    delay: 500,
    duration: 1000,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    viewFactor: 0.2,
});

ScrollReveal().reveal('.about__container--left', {
    delay: 200,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.about__title', {
    delay: 200,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.about__subtitle', {
    delay: 400,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.project__title', {
    delay: 200,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

// Select all the project elements
const projectElements = document.querySelectorAll('.project');
const projectElements2 = document.querySelectorAll('.projects--none');

// Initialize ScrollReveal
projectElements.forEach((project, index) => {
  ScrollReveal().reveal(project, {
    delay: 200 * index,   // Delay increases for each project
    duration: 500, // Duration of the animation
    easing: 'ease-in-out', // Animation easing
    origin: 'bottom', // Where the animation comes from (top, bottom, left, right)
    distance: '50px', // Distance the element moves during the animation
    reset: true // Resets the animation when the element goes out of view
  });
});

projectElements2.forEach((project, index) => {
    ScrollReveal().reveal(project, {
        delay: 500 * index,   // Delay increases for each project
        duration: 1000, // Duration of the animation
        easing: 'ease-in-out', // Animation easing
        origin: 'left', // Where the animation comes from (top, bottom, left, right)
        distance: '50px', // Distance the element moves during the animation
        reset: true // Resets the animation when the element goes out of view
    });
});

ScrollReveal().reveal('.contact__container--left', {
    delay: 200,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.contact__title', {
    delay: 200,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.contact__col', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.form--none', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.contact__col--none', {
    delay: 500,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});
