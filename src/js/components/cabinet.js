$(document).ready(function() {


    $(".user-info__edit").click(function() {
        $(this).toggleClass("user-info__edit--active")
        $(this).parents(".user-info__block").find(".user-info__field").toggleClass("user-info__field--disabled")
    })

    $(".user-info__social-btn").click(function() {
        $(this).toggleClass("user-info__social-btn--active")
    })

    $(".user-order__btn").click(function() {
        $(this).toggleClass("user-order__btn--active")
        $(this).parents(".user-order").find(".user-order__hidden").slideToggle()
    })

})