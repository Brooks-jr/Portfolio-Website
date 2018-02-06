
// =================================================
// -           F U L L - P A G E
// =================================================
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home-section', 'work-section', 'about-section', 'social-section'],
        responsiveSlides: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: true,
        continuousHorizontal: true,
        navigation: true,
        slidesNavigation: true,
        navigationTooltips: ['.Home', '.Work', '.About', '.Social'],
    
        onLeave: function (index, nextIndex, direction) {
            var $isAnimatedWork = $('.work .is-animated');
            var $isAnimatedAbout = $('.about .is-animated');
            var $isAnimatedAbout2 = $('.about .is-animated-2');
            var $isAnimatedAbout3 = $('.about .is-animated-3');
            var $isAnimatedSocial = $('.social .is-animated');
            var $isAnimatedSocial2 = $('.social .is-animated-2');
    
            // work section
            if (index == 1 && nextIndex == 2) {
                $isAnimatedWork.addClass('animated bounceInRight wow data-wow-duration="5s" ').css('animation-delay', '.7s');
            }
    
            // about section
            else if ((index == 1 || index == 2) && nextIndex == 3) {
                $isAnimatedAbout.addClass('animated rollIn wow data-wow-duration="5s"').css('animation-delay', '.7s');
    
                $isAnimatedAbout2.addClass('animated zoomIn wow data-wow-duration="5s"').css('animation-delay', '.7s');
    
                $isAnimatedAbout3.addClass('animated fadeInUpBig wow data-wow-duration="5s"').css('animation-delay', '.7s');
    
            }
    
            // social section
            else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
                $isAnimatedSocial.addClass('animated fadeInUpBig wow data-wow-duration="5s"');
                $isAnimatedSocial.eq(1).css('animation-delay', '.3s');
                $isAnimatedSocial.eq(2).css('animation-delay', '.6s');
                $isAnimatedSocial.eq(3).css('animation-delay', '.9s');
    
                $isAnimatedSocial2.addClass('animated fadeInDownBig wow data-wow-duration="5s"');
            }
        }
    });
});

// =================================================
// -                V I D E O S
// =================================================
$(function () {
    document.getElementById('cover-video').playbackRate = 5;
});

$(function () {
    document.getElementById('vesco-vid-1').playbackRate = 5;
});

$(function () {
    document.getElementById('vesco-vid-2').playbackRate = 5;
});

$(function () {
    document.getElementById('vesco-vid-3').playbackRate = 5;
});

$(function () {
    document.getElementById('vesco-vid-4').playbackRate = 5;
});
// $(function () {
//     document.getElementsByClassName('sc-vid').playbackRate = 5;
// });

// =================================================
// -              H A M B U R G E R
// =================================================
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

// =================================================
// -                W O W
// =================================================
// trigger animation on scroll
$(function () {
    new WOW().init();
});

// =================================================
// -        P R O J E C T - S L I D E S
// =================================================

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

// slide back button
function slideBack() {
    var v = document.getElementById("vescoSlide");
    var p = document.getElementById("portfolioSlide")
    var i = document.getElementById("illustrationSlide")

    if (v.style.width === "100%" || p.style.width === "100%" || i.style.width === "100%") {
        v.style.width = "0%";
        p.style.width = "0%";
        i.style.width = "0%";

    } else {
        v.style.width = "0%";
        p.style.width = "0%";
        i.style.width = "0%";
    }
}

// =================================================
// -            S C R O L L - L O C K
// =================================================

// lock scroll
$(document).on('click', '.view-project', function () {
    $.fn.fullpage.setAllowScrolling(false);
});

// unlock scroll
$(document).on('click', '.close-slide, .hamburger', function () {
    $.fn.fullpage.setAllowScrolling(true);
});

// =================================================
// -             A N I M A T I O N S
// =================================================

