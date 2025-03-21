function addHoverEffect(element) {
    element.style.transform = "scale(1.05)";
    element.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
    element.style.backgroundColor = "#ffcc00";
    element.style.color = "#333";
}

function removeHoverEffect(element) {
    element.style.transform = "scale(1)";
    element.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    element.style.backgroundColor = "white";
    element.style.color = "#444";
}
let slideIndex = 1;

// Initialize the gallery on page load
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls (optional if you have thumbnails)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");

    if (slides.length === 0) return; // No slides found!

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Auto-slide functionality (optional)
setInterval(() => {
    plusSlides(1);
}, 7000); // Change image every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Close all answers except the current one
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) item.style.display = 'none';
            });

            // Toggle current answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

