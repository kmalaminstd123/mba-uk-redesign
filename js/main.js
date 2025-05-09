const wow = new WOW()

wow.init()

// loader functionality

const loader = document.querySelector('.loader')

window.addEventListener('load', ()=> {
    if(loader){
        
        // for testing or developement
        // setTimeout(()=> {
           // loader.style.display = 'none'
        // }, 2000)

        // production code
        loader.style.display = 'none'
    }
})


// Timeline scroll animations
$(document).ready(function() {
    const timelineSteps = $('.timeline-step');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateTimeline() {
        timelineSteps.each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    }
    
    $(window).on('scroll resize', animateTimeline);
    animateTimeline();
});

// swiper slider

if(document.querySelector('.mba-hero-swiper')){

    const mba_hero_swiper = new Swiper('.mba-hero-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        autoplay: true,
        slidesPerView: 1,
    })
}

// swiper slider
