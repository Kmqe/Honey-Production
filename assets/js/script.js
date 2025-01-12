const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close")
const navMenu = document.querySelector(".nav__list");
const faq_item = document.querySelectorAll(".faq-item");
const toggle_ele = document.querySelectorAll(".toggle-ele");
const faq_answer = document.querySelectorAll(".faq-answer");

console.log(faq_item)

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


faq_item.forEach((item, index) => {
    item.addEventListener("click", () => {
        faq_item.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
                toggle_ele[otherIndex].classList.remove("expanded");
                faq_answer[otherIndex].classList.remove("show");
            }
        });

        toggle_ele[index].classList.toggle("expanded");
        faq_answer[index].classList.toggle("show");
    });
});







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
        nextEl: '.services-next',
        prevEl: '.services-prev',
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
        nextEl: '.type-next',
        prevEl: '.type-prev',
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

new Swiper('.store_slider', {
    loop: true,
    lazy: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination-store',
        clickable: true,
        // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.store-next',
        prevEl: '.store-prev',
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
            slidesPerView: 4
        }
    }
});



new Swiper('.testimonials_slider', {
    // loop: true,
    lazy: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination-testimonials',
        clickable: true,
        // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
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





new Swiper('.blog_slider', {
    loop: true,
    lazy: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination-blog',
        clickable: true,
        // dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.blog-next',
        prevEl: '.blog-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        }
    }
});