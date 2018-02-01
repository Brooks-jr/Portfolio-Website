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

$(function () {
    document.getElementsByClassName('sc-vid').playbackRate = 10;
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
    var i = document.getElementById("illustrationSlide")
    
    if (i.style.width === "0%") {
        i.style.width = "100%";
    }
    else if (i.style.width === "100%") {
        i.style.width = "0%";
    } else {
        i.style.width = "100%";
    }
}

// slide back
function slideBack() {
    var v = document.getElementById("vescoSlide");
    var p = document.getElementById("portfolioSlide")
    var i = document.getElementById("illustrationSlide")
    
    if (v.style.width === "100%" || p.style.width === "100%" || i.style.width === "100%") {
        v.style.width = "0%";
        p.style.width = "0%";
        i.style.width = "0%";
        
    }else {
        v.style.width = "0%";
        p.style.width = "0%";
        i.style.width = "0%";
    }
}

$(document).on('click', '.view-project', function(){
    $.fn.fullpage.setAllowScrolling(false);
});
  
$(document).on('click', '.close-slide, .hamburger', function(){
    $.fn.fullpage.setAllowScrolling(true);
});