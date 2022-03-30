$(document).ready(function() {


    $(".filter__show").click(function() {
        $(this).parents(".filter__group").toggleClass("filter__group--active")
        console.log(true)
    })

    $(".filter__check-all").click(function() {
        $(this).toggleClass("filter__check-all--active")
        $(this).parents(".filter__group").find(".filter__check--hidden").toggleClass("filter__check--show")
    })


    $(".filter__slider").each(function(index, el) {

        $(el).attr("data-slider", index)

        let slider = $(el).attr("data-slider")
        let min = $(el).attr("data-slider-min")
        let max = $(el).attr("data-slider-max")

        initSliders(slider, min, max)
    });

    $(".catalog-sort__btn").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".catalog-sort__btn").removeClass("catalog-sort__btn--active")
        $(this).addClass("catalog-sort__btn--active")
        $(".catalog-page__view").removeClass("catalog-page__view--active")
        $(`.catalog-page__view[data-tabs-path="${path}"]`).addClass("catalog-page__view--active")
    })

    $(".filter-btn").click(function() {
        $(".filter").addClass("filter--active")
        $("body").addClass("fixed-body")
    })

    $(".filter__close").click(function() {
        $(".filter").removeClass("filter--active")
        $("body").removeClass("fixed-body")
    })

    $(".product-preview__comprasion").click(function() {
        $(this).toggleClass("product-preview__comprasion--active")
    })

})

function initSliders(parent, min, max) {
    const rangeSlider = document.querySelector(`[data-slider="${parent}"] .range-slider`)
    const rangeInput0 = document.querySelector(`[data-slider="${parent}"] .range-slider__input1`)
    const rangeInput1 = document.querySelector(`[data-slider="${parent}"] .range-slider__input2`)
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [+min, +max],
            connect: true,
            step: 1,
            range: {
                'min': +min,
                'max': +max
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };
}