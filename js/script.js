$(window).on('load', function() {
    $('.loader').fadeOut(1000);
    $('.content').fadeIn(1000);
})

$("#personal").click(function () {
    $(".personalWork").show(300);
    $(".studentWork").hide(300);
})

$("#student").click(function () {
    $(".personalWork").hide(300);
    $(".studentWork").show(300);
})
