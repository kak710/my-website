document.addEventListener('DOMContentLoaded', function() {
    const hardSkillsSection = document.getElementById('hard-skills');
    const softSkillsSection = document.getElementById('soft-skills');

    const options = {
        threshold: 0.5 // Trigger when the section is 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, options);

    observer.observe(hardSkillsSection);
    observer.observe(softSkillsSection);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the fireworks container
    const fireworksContainer = document.querySelector('.firework-container');

    // Add the 'animate' class to start the animation
    fireworksContainer.classList.add('animate');
});
