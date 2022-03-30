function mainBannerSlider() {
    var swiper = new Swiper('.main-banners .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        autoplay: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.main-banners .swiper-button-next',
            prevEl: '.main-banners .swiper-button-prev',
        },
        pagination: {
            el: '.main-banners .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function promoSlider() {
    var swiper = new Swiper('.promo-block .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: '.promo-block .swiper-button-next',
            prevEl: '.promo-block .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            },
            650: {
                slidesPerView: 2.1,
                spaceBetween: 15,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        }
    })
}


$(document).ready(function() {

    let cardSlidersArray = []

    function cardSliders() {
        $(".catalog-block__slider").each(function(index, el) {
            $(el).attr("data-slider-id", `${index}`)
            cardSlidersArray[index] = new Swiper(`.catalog-block__slider[data-slider-id="${index}"] .swiper-container`, {
                slidesPerView: 6,
                spaceBetween: 32,
                navigation: {
                    nextEl: `.catalog-block__slider[data-slider-id="${index}"] .swiper-button-next`,
                    prevEl: `.catalog-block__slider[data-slider-id="${index}"] .swiper-button-prev`,
                },
                breakpoints: {
                    // 320: {
                    //     slidesPerView: 1.1,
                    // },
                    250: {
                        slidesPerView: "auto",
                    },
                    1100: {
                        slidesPerView: 4,
                    },
                    1300: {
                        slidesPerView: 5,
                    },
                    1500: {
                        slidesPerView: 6,
                    },
                }
            })
        })
    }


    mainBannerSlider()
    cardSliders()
    promoSlider()


    $(".catalog-card__pag-item").mouseover(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".catalog-card__top").find(".catalog-card__pag-item").removeClass("catalog-card__pag-item--active")
        $(this).addClass("catalog-card__pag-item--active")
        $(this).parents(".catalog-card__top").find(".catalog-card__img").removeClass("catalog-card__img--active")
        $(this).parents(`.catalog-card__top`).find(`.catalog-card__img[data-tab-path="${path}"]`).addClass("catalog-card__img--active")
    })

    $(".catalog-card__favourite").click(function() {
        $(this).toggleClass("catalog-card__favourite--active")
    })

    $(".catalog-card__stat").click(function() {
        $(this).toggleClass("catalog-card__stat--active")
    })

    $(".catalog-card__cart").click(function() {
        if ($(this).hasClass("catalog-card__cart--active")) {
            $(this).removeClass("catalog-card__cart--active")
            $(this).addClass("catalog-card__cart--loading")
            setTimeout(() => {
                $(this).removeClass("catalog-card__cart--loading")
            }, 500);
        } else {
            $(this).addClass("catalog-card__cart--loading")
            setTimeout(() => {
                $(this).removeClass("catalog-card__cart--loading")
                $(this).addClass("catalog-card__cart--active")
            }, 500);
        }

    })

    $(".catalog-item__products .tab").click(function() {
        cardSliders()
    })
})