window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const scaleFactor = 1 + (scrolled * 0.0001); // Adjust the zoom speed as needed
    document.querySelector('header::before').style.transform = `scale(${scaleFactor})`;
});
window.addEventListener('scroll', function() {
    const introSection = document.querySelector('.introduction-section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = introSection.offsetHeight;

    const scaleValue = 1 + (scrollPosition / (sectionHeight + windowHeight) * 0.1);
    introSection.style.backgroundSize = `${scaleValue * 100}%`;

    const header = document.querySelector('header');
    const headerScaleValue = 1 + (scrollPosition / windowHeight * 0.1);
    header.style.backgroundSize = `${headerScaleValue * 100}%`;
});
// JavaScript to trigger the scroll down animation when the section comes into view
document.addEventListener("DOMContentLoaded", function() {
    var telecomSection = document.querySelector("#telecom-section");

    // Function to handle the intersection observer
    function handleIntersect(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                telecomSection.classList.add("active");
            } else {
                telecomSection.classList.remove("active");
            }
        });
    }

    // Create the intersection observer
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(handleIntersect, options);

    // Start observing the section
    observer.observe(telecomSection);
});
document.addEventListener("DOMContentLoaded", function() {
    // Select the section to observe
    var aiSection = document.querySelector("#ai-section");

    // Function to handle the intersection observer
    function handleIntersect(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add a class to trigger the animation when the section enters the viewport
                aiSection.classList.add("visible");
            }
        });
    }

    // Create the intersection observer
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Trigger the animation when at least 50% of the section is visible
    };

    var observer = new IntersectionObserver(handleIntersect, options);

    // Start observing the section
    observer.observe(aiSection);
});
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");
    const bwImage = document.querySelector(".bw-image");
    const coloredImage = document.querySelector(".colored-image");

    imageContainer.addEventListener("mouseenter", function() {
        bwImage.style.filter = "grayscale(0%)";
    });

    imageContainer.addEventListener("mouseleave", function() {
        bwImage.style.filter = "grayscale(100%)";
    });
});


