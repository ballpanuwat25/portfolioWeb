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
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Initialize ScrollReveal
ScrollReveal().reveal('.about__profile', {
    delay: 200,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'left',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.about__title', {
    delay: 200,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'right',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.about__subtitle', {
    delay: 400,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'right',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.project__title', {
    delay: 200,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'left',
    distance: '50px',
    reset: true
});

const projectElements = document.querySelectorAll('.project');

projectElements.forEach((project, index) => {
    ScrollReveal().reveal(project, {
        delay: 200 * index,
        duration: 500,
        easing: 'ease-in-out',
        origin: 'bottom',
        distance: '50px',
        reset: true
    });
});

ScrollReveal().reveal('.contact__title', {
    delay: 200,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'right',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.contact__container--left', {
    delay: 300,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'left',
    distance: '50px',
    reset: true
});

ScrollReveal().reveal('.contact__col', {
    delay: 400,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'bottom',
    distance: '50px',
    reset: true
});