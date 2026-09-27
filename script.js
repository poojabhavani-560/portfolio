/* ==========================================
   LUCIDE ICONS
========================================== */

lucide.createIcons();


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement =
    document.getElementById("typing");

const words = [

    "Software Development",
    "Artificial Intelligence",
    "Data Analytics",
    "Data Science",
    "Full Stack Development"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;

        }


        setTimeout(typeEffect, 70);

    }


    else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex >= words.length) {

                wordIndex = 0;

            }


            setTimeout(typeEffect, 350);

            return;

        }


        setTimeout(typeEffect, 35);

    }

}


if (
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    typeEffect();

} else {

    typingElement.textContent = words[0];

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =

    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");


const sectionObserver =

    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(function (link) {

                        link.classList.remove("active");


                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});