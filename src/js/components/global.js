$(document).ready(function() {

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7          -    ' });


    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".tab-parent").find(".tab").removeClass("tab--active")
        $(this).parents(".tab-parent").find(`.tab[data-tab-path="${path}"]`).addClass("tab--active")
        $(this).parents(".tab-parent").find(".tab__content").removeClass("tab__content--active")
        $(this).parents(".tab-parent").find(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
    })



    document.querySelectorAll(".custom-select").forEach(el => {
        el.onclick = function() {
            el.classList.toggle("custom-select--active")
        }

        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(el);
            if (!withinBoundaries) {
                el.classList.remove("custom-select--active")
            }
        });
    })

    function unselectOption(dropdown) {
        for (let elem of dropdown.getElementsByTagName('div')) {
            elem.classList.remove("custom-select__dropdown-item--selected")
        }
    }

    document.querySelectorAll(".custom-select__dropdown-item").forEach(el => {
        el.onclick = function() {
            unselectOption(el.closest(".custom-select__dropdown"))
            el.classList.add("custom-select__dropdown-item--selected")
            for (let elem of el.closest(".custom-select").getElementsByTagName('input')) {
                elem.setAttribute("value", el.innerHTML)
            }
        }
    })

    function cartCalc() {
        $('.cartcalc .ccalc-minus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            if (a > 1) {
                let b = +a - 1;
                $(this).closest('.cartcalc').find('input').val(b);
                if (+a === 2) {
                    $(this).addClass("ccalc-minus--disable")
                }
            } else {
                $(this).closest('.cartcalc').find('input').val(a);
            }
        });
        $('.cartcalc .ccalc-plus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            let b = +a + 1;
            $(this).siblings(".ccalc-minus").removeClass("ccalc-minus--disable")
            $(this).closest('.cartcalc').find('input').val(b);
        });
    }

    cartCalc()

    $(".copy-code").click(function() {
        let copyElement = $(this).children("span")
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(copyElement).html()).select();
        document.execCommand("copy");
        $temp.remove();
        $("body").append(`<div class="text-copied">Скопировано</div>`)
        setTimeout(() => {
            $(".text-copied").remove()
        }, 2000);
    })

    $("input[name='orderTab']").change(function() {
        let val = $(this).val()
        $(".order__content").removeClass("order__content--active")
        $(`.order__content[data-tab-path="${val}"]`).addClass("order__content--active")
    })

    $(".order__address-btn").click(function() {
        $(this).toggleClass("order__address-btn--active")
        $(this).parents(".order__address").find(".order__address-hidden").slideToggle()
    })

    $("input[name='formTab']").change(function() {
        let val = $(this).val()
        $(".contacts__form-content").removeClass("contacts__form-content--active")
        $(`.contacts__form-content[data-tab-path="${val}"]`).addClass("contacts__form-content--active")
    })
})


function closeModal() {
    $("body").removeClass("fixed-body")
    $(".modal-backdrop").remove()
    $(".modal").removeClass("modal--active")
}