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
    },
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
    // clickStartPreventDefault: false,
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
    // loop: true,
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