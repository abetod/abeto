// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add menu toggle button to navbar
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.id = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    // Find navbar and insert menu toggle button
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Check if menu toggle already exists
        const existingToggle = document.getElementById('menu-toggle');
        if (!existingToggle) {
            navbar.appendChild(menuToggle);
        }
        
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            // Mobile menu toggle functionality
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
            
            // Close menu when clicking a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Close menu with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize photo gallery
    initializePhotoGallery();
    
    // Initialize FAQ functionality
    initializeFAQ();
});

// Photo gallery functionality
let slideIndex = 1;

function initializePhotoGallery() {
    showSlides(slideIndex);
    
    // Auto-slide functionality (optional)
    setInterval(() => {
        plusSlides(1);
    }, 7000); // Change image every 7 seconds
}

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

// FAQ functionality
function initializeFAQ() {
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
}

// Hover effect functions (optional)
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

// Close mobile menu on window resize (optional)
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
});