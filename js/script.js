$(window).on('load', function() {
    $('.loader').fadeOut(1000);
    $('.content').fadeIn(1000);
})

let roadmap = $('.roadmap-content');
let roadmapButton = $('.toggle-roadmap');

roadmapButton.click(function() {
    roadmap.toggle();
})
