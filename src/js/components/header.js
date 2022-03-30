$(document).ready(function() {

    $(".nav__item").hover(onIn, onOut);

    $(".nav .modal-backdrop2").click(function() {
        $(".nav__item").removeClass("nav__item--active")
        $(".nav__item2").removeClass("nav__item--active")
    })

    $(".nav__item2 .nav__item-show").click(function() {
        if ($(this).parents(".nav__item2").hasClass("nav__item--active")) {
            $(this).parents(".nav__item2").removeClass("nav__item--active")
        } else {
            $(this).parents(".nav__item2").addClass("nav__item--active")
        }
    })


    if (window.innerWidth > 1200) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 120) {
                $(".header").addClass("header--sticky")
            } else {
                $(".header").removeClass("header--sticky")
            }
            if ($(this).scrollTop() > 180) {
                $(".header").addClass("header--sticky2")
            } else {
                $(".header").removeClass("header--sticky2")
            }
        })

        if ($(this).scrollTop() > 120) {
            $(".header").addClass("header--sticky")
        } else {
            $(".header").removeClass("header--sticky")
        }
        if ($(this).scrollTop() > 180) {
            $(".header").addClass("header--sticky2")
        } else {
            $(".header").removeClass("header--sticky2")
        }
    }


    $(".header__cart").click(function() {
        $(this).addClass("header__cart--disable")
        $(".header-cart").addClass("header-cart--active")
    })

    $(".header-cart__close").click(function() {
        $(".header-cart").removeClass("header-cart--active")
        $(".header__cart").removeClass("header__cart--disable")
    })

    $(document).mouseup(function(e) {
        var div = $('.header-cart');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("header-cart--active")) {
                $(div).removeClass("header-cart--active")
                $(".header__cart").removeClass("header__cart--disable")
            }
        }
    });

    $(".header-catalog__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".header-catalog__tab").removeClass("header-catalog__tab--active")
        $(this).addClass("header-catalog__tab--active")
        $(".header-catalog").find(".header-catalog__content").removeClass("header-catalog__content--active")
        $(".header-catalog").find(`.header-catalog__content[data-tab-path="${path}"]`).addClass("header-catalog__content--active")
    })

    $(".header__catalog-btn").click(function() {
        if (window.innerWidth > 1200) {
            $(this).addClass("header__catalog-btn--disable")
            $(".header-catalog").addClass("header-catalog--active")
        } else {
            $("body").addClass("fixed-body")
            $(".header-menu__content").removeClass("header-menu__content--active")
            $(".header-menu__content--catalog").addClass("header-menu__content--active")
            $(".header-menu__bg").show()
            $(".header-menu").addClass("header-menu--active")
        }

    })

    $(document).mouseup(function(e) {
        var div = $('.header-catalog');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("header-catalog--active")) {
                $(div).removeClass("header-catalog--active")
                $(".header__catalog-btn").removeClass("header__catalog-btn--disable")
            }
        }
    });

    $("button.header-bottom__link").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".header-bottom__link").removeClass("header-bottom__link--active")
        $(this).addClass("header-bottom__link--active")
        $(".header-catalog2").addClass("header-catalog2--active")
        $(".header-catalog2").find(".header-catalog2__content").removeClass("header-catalog2__content--active")
        $(".header-catalog2").find(`.header-catalog2__content[data-tab-path="${path}"]`).addClass("header-catalog2__content--active")
    })

    $(".header-middle").mouseover(function() {
        if ($(".header-catalog2").hasClass("header-catalog2--active")) {
            $(".header-catalog2").removeClass("header-catalog2--active")
            $(".header-bottom__link").removeClass("header-bottom__link--active")
        }
    })

    $(document).mouseup(function(e) {
        var div = $('.header-catalog2');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).hasClass("header-catalog2--active")) {
                $(div).removeClass("header-catalog2--active")
                $(".header-bottom__link").removeClass("header-bottom__link--active")
            }
        }
    });

    $("#header-search").keyup(function() {
        let inputValue = $(this).val()
        if (inputValue) {
            $(".header-search").addClass("header-search--active")
        } else {
            $(".header-search").removeClass("header-search--active")
        }
    })

    $("#header-search").click(function() {
        let inputValue = $(this).val()
        if (inputValue) {
            $(".header-search").addClass("header-search--active")
        }
    })

    $(".header-search .modal-backdrop2").click(function() {
        $(".header-search").removeClass("header-search--active")
    })

    $(".header-search__close").click(function() {
        $("#header-search").val("")
        $(".header-search").removeClass("header-search--active")
    })

    $(".header-menu__nav2-item-show").click(function() {
        $(this).parents(".header-menu__nav2-item").toggleClass("header-menu__nav2-item--active")
        $(this).siblings(".header-menu__nav2-item-hidden").slideToggle()
    })

    $(".header-menu__catalog-btn").click(function() {
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--catalog").addClass("header-menu__content--active")
    })

    $(".header-menu__close[data-target='catalog']").click(function() {
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--catalog").addClass("header-menu__content--active")
    })

    $(".header-menu__catalog-link").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(`.header-menu__content[data-tab-path="${path}"]`).addClass("header-menu__content--active")
    })

    $(".header-menu__close[data-target='menu']").click(function() {
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--menu").addClass("header-menu__content--active")
    })

    $(".header__burger").click(function() {
        $("body").addClass("fixed-body")
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--menu").addClass("header-menu__content--active")
        $(".header-menu__bg").show()
        $(".header-menu").addClass("header-menu--active")
    })

    $(".header-menu__bg").click(function() {
        $("body").removeClass("fixed-body")
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--menu").addClass("header-menu__content--active")
        $(".header-menu__bg").hide()
        $(".header-menu").removeClass("header-menu--active")
    })

    $(".header-menu__close[data-target='close']").click(function() {
        $("body").removeClass("fixed-body")
        $(".header-menu__content").removeClass("header-menu__content--active")
        $(".header-menu__content--menu").addClass("header-menu__content--active")
        $(".header-menu__bg").hide()
        $(".header-menu").removeClass("header-menu--active")
    })

});


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.addClass("nav__item--active")

            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).removeClass("nav__item--active")
    }
}