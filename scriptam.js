document.addEventListener("DOMContentLoaded", function() {
    const textAppearSection = document.getElementById('text-Appear-Section');
    const textAppear = document.getElementById('text-Appear');
    const words = textAppear.getElementsByTagName('span');
    const totalWords = words.length;

    // Function to check if an element is in viewport
    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to display words in stages as the section comes into view
    const displayWordsInStages = () => {
        let stage = Math.floor(window.scrollY / (textAppearSection.offsetHeight / 4));
        let wordsToShow = Math.ceil(totalWords * ((stage + 1) / 4));
        
        for (let i = 0; i < totalWords; i++) {
            if (i < wordsToShow) {
                words[i].style.opacity = '1';
                words[i].style.transition = 'opacity 0.5s ease-in-out';
            } else {
                words[i].style.opacity = '0';
            }
        }
    };

    // Event listener for scrolling to trigger the animation
    window.addEventListener('scroll', () => {
        if (isInViewport(textAppearSection)) {
            displayWordsInStages();
        }
    });

    // Initial invocation of displayWordsInStages in case the section is already in view
    displayWordsInStages();
});

// Function to change slides in the final section
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


