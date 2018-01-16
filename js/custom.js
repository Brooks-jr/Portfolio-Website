// FULL-PAGE
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home-section', 'work-section', 'about-section', 'social-section'],
        responsiveSlides: true
    });
});

// video playback rate
$(function () {
    document.getElementById('cover-video').playbackRate = 4;
});

// hamburger
var $hamburger = $(".hamburger");

$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");

    // open menu
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    // close menu
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
});
