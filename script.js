// Toggle the burger menu on mobile view
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Show and hide content based on tab click
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.content-section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Get the target section from the clicked link
        const targetSection = document.getElementById(link.getAttribute('data-target'));
        
        // Show the target section
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});