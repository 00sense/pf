$(document).ready(function() {

    // --------------------
    // Hide Swiper When Click Outside (not move, only click)
    // --------------------
    $(document).mousedown(function(event) {
        if ($("#projects-project-view").css('display') === 'flex') {
            if (!$(event.target).closest('#carousel-tools, #carousel-view, #multiple-images, #single-image').length) {
                hideProjectView();
            }
        }
    });

    $(document).mousedown(function (event) {
        if (!$(event.target).closest("[id='info-bar-item']").length) {
            $("[id='info-bar-more']").css("transform", "scaleX(0)");
        }
    });

    // --------------------
    // Hide Swiper When Click On Close Button
    // --------------------
    $("#close-icon").click(hideProjectView);
    
    // --------------------
    // Show/Hide Menu (Mobile)
    // --------------------
    $("#navbar-mid-mobile-menu").click(function() {
        if ($("#navbar-mid-mobile-menu-table").css("display") === "none") {
            $("#navbar-mid-mobile-menu-table").fadeIn(200);
            $("#info-bar").fadeOut(200);
            $("#spotify-info").fadeOut(200);
        }
        else {
            $("#navbar-mid-mobile-menu-table").fadeOut(200);
            $("#info-bar").fadeIn(200);
            $("#spotify-info").fadeIn(200);
        }
    });

    // --------------------
    // Expand/Collapse Projects List
    // --------------------
    $("#show-more").click(function() {
        if ($("#projects-container").hasClass("hidden")) {
            if (window.innerWidth > 700) {
                $("#projects-container").css('height', '1100px');
            } else {
                $("#projects-container").css('height', '900px');
            }

            $("#projects-container").removeClass("hidden");

            $("#show-more").text(getTranslationWithoutLang("show-more-projects"));
        } else {
            $("#projects-container").css('height', 'unset');
            $("#projects-container").addClass("hidden");

            $("#show-more").text(getTranslationWithoutLang("collapse-projects"));
        }
    })
});

// --------------------
// Debounces
// --------------------
window.addEventListener('load', () => {
    debounce(checkNavbarSettings, 10)();
    debounce(checkProjectVisibility, 10)();
});

window.addEventListener('scroll', () => {
    debounce(checkScrollValue, 10)();
    debounce(checkScrollBeyondFeedback, 100)();
});

window.addEventListener('resize', () => {
    debounce(checkNavbarSettings, 100)();
    debounce(checkProjectVisibility, 100)();
});

$(function () {
    let isActive = true;

    function isWindowReallyActive() {
        return !document.hidden && document.hasFocus() && window.outerHeight > 0 && window.screenY > -10000;
    }

    function startRotation() {
        isActive = true;
        turnOnAnimations();
    }

    function stopRotation() {
        turnOffAnimations();
        isActive = false;
    }

    setInterval(() => {
        if (isWindowReallyActive()) {
            if (!isActive) startRotation();
        } else {
            if (isActive) stopRotation();
        }
    }, 1000);

    $(window).on("focus", turnOnAnimations);
    $(window).on("blur", turnOffAnimations);

    $(document).on("visibilitychange", function () {
        if (!document.hidden) {
            startRotation();
        } else {
            stopRotation();
        }
    });
});