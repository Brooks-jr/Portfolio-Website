// FULL-PAGE
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home-section', 'work-section', 'about-section', 'social-section'],
        responsiveSlides: true,
        navigation: true,
        slidesNavigation: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: true,
        continuousHorizontal: true,
        navigationTooltips: ['.Home', '.Work', '.About', '.Social']
    });
});

// video playback rate
$(function () {
    document.getElementById('cover-video').playbackRate = 5;
});

// hamburger
var $hamburger = $(".hamburger");

$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
});
// menu link
var $menuLink = $(".menu__item-name");

$menuLink.on("click", function (e) {
    $hamburger.toggleClass("is-active");
});

// open/close menu
function toggleNav() {
    var n = document.getElementById("myNav");
    if (n.style.width === "0%") {
        n.style.width = "100%";
    }
    else if (n.style.width === "100%") {
        n.style.width = "0%";
    } else {
        n.style.width = "100%";
    }
}

// trigger animation on scroll
$(function () {
    new WOW().init();
});

// TOGGLE PROJECT SLIDES
// vesco
function toggleVescoSlide() {
    var v = document.getElementById("vescoSlide");
    
    if (v.style.width === "0%") {
        v.style.width = "100%";
    }
    else if (v.style.width === "100%") {
        v.style.width = "0%";
    } else {
        v.style.width = "100%";
    }
}
// portfolio
function togglePortfolioSlide() {
    var p = document.getElementById("portfolioSlide")
    
    if (p.style.width === "0%") {
        p.style.width = "100%";
    }
    else if (p.style.width === "100%") {
        p.style.width = "0%";
    } else {
        p.style.width = "100%";
    }
}
// illustrations
function toggleIllustrationSlide() {
    var p = document.getElementById("illustrationSlide")
    
    if (p.style.width === "0%") {
        p.style.width = "100%";
    }
    else if (p.style.width === "100%") {
        p.style.width = "0%";
    } else {
        p.style.width = "100%";
    }
}