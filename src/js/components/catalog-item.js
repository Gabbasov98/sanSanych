function catalogGallery() {
    var swiper = new Swiper(".product .mySwiper", {
        spaceBetween: 15,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical"
    });
    var swiper2 = new Swiper(".product .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".product .swiper-button-next",
            prevEl: ".product .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
            },
        }
    });
}

function modalSlider() {
    var swiper = new Swiper('.catalog-modal .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.catalog-modal .swiper-button-next',
            prevEl: '.catalog-modal .swiper-button-prev',
        },
        pagination: {
            el: '.catalog-modal .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

$(document).ready(function() {

    catalogGallery()
    modalSlider()


    $(".product__group-all").click(function() {
        $(this).parents(".product__group").find(".product__group-radio--hidden").addClass("product__group-radio--show")
        $(this).remove()
    })

    $(".product__property-all").click(function() {
        $(this).parents(".product__property").find(".product__property-item--hidden").addClass("product__property-item--show")
        $(this).remove()
    })

    $(".product-preview__btn").click(function() {
        $(this).toggleClass("product-preview__btn--active")
    })

    $(".product-preview__favourite").click(function() {
        $(this).toggleClass("product-preview__favourite--active")
    })

    $(".product-delivery__more").click(function() {
        $(this).toggleClass("product-delivery__more--active")
        $(this).parents("table").find(".product-delivery__row-hide").toggleClass("product-delivery__row-hidden")
    })

    $(".set-card__cart").click(function() {
        $(this).toggleClass("set-card__cart--active")
    })

    $(".catalog-modal__cart-favourite").click(function() {
        $(this).toggleClass("catalog-modal__cart-favourite--active")
    })

    $(".cart-card__favourite").click(function() {
        $(this).toggleClass("cart-card__favourite--active")
    })



    $(".catalog-item__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".catalog-item__tab").removeClass("catalog-item__tab--active")
        $(this).addClass("catalog-item__tab--active")
        $(".catalog-item__content").removeClass("catalog-item__content--active")
        $(`.catalog-item__content[data-tabs-path="${path}"]`).addClass("catalog-item__content--active")
    })

    $(".catalog-modal__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".catalog-modal__tab").removeClass("catalog-modal__tab--active")
        $(this).addClass("catalog-modal__tab--active")
        $(".catalog-modal__content").removeClass("catalog-modal__content--active")
        $(`.catalog-modal__content[data-tabs-path="${path}"]`).addClass("catalog-modal__content--active")
        modalSlider()
    })


    var canvas = document.getElementById('canvas');

    if (canvas) {
        var url = '../img/bonus.svg';

        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = url;
        img.onload = function() {
            var width = Math.min(500, img.width);
            var height = img.height * (width / img.width);

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
        };

        var isPress = false;
        var old = null;
        canvas.addEventListener('mousedown', function(e) {
            isPress = true;
            old = { x: e.offsetX, y: e.offsetY };
        });
        canvas.addEventListener('mousemove', function(e) {
            if (isPress) {
                var x = e.offsetX;
                var y = e.offsetY;
                ctx.globalCompositeOperation = 'destination-out';

                ctx.beginPath();
                ctx.arc(x, y, 10, 0, 2 * Math.PI);
                ctx.fill();

                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.moveTo(old.x, old.y);
                ctx.lineTo(x, y);
                ctx.stroke();

                old = { x: x, y: y };

            }
        });
        canvas.addEventListener('mouseup', function(e) {
            isPress = false;
        });
    }


})