$(window).on('load', function() {
    $('.loader').fadeOut(1000);
    $('.content').fadeIn(1000);
})

let roadmap = $('.roadmap-content');
let roadmapButton = $('.toggle-roadmap');

roadmap.hide();

roadmapButton.click(function() {
    roadmap.toggle();

    nameToggle();
})


function nameToggle(){
    if(roadmapButton.html() == "Open"){
        roadmapButton.html("Close");
    } else {
        roadmapButton.html("Open");
    }
}
