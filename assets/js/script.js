const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close")
const navMenu = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
    navToggle.classList.add("hide")
    navClose.classList.add("show")
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.classList.remove("hide")
    navClose.classList.remove("show")
})


new Swiper('.card_container', {
    loop: true,
    speed: 1000,
    lazy: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination-services',
        clickable: true,
        // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


new Swiper('.cards_honey', {
    loop: true,
    speed: 1000,
    lazy: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination-honey',
        clickable: true,
        // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        }
    }
});