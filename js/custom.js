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
});

// open/close menu
function toggleNav() {
   var x = document.getElementById("myNav");
   if (x.style.width === "0%") {
        x.style.width = "100%";
    }
    else if (x.style.width === "100%") {
    x.style.width = "0%";
    } else {
       x.style.width = "100%";
   }
}

