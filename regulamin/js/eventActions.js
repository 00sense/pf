$(document).ready(function() {

    $(document).mousedown(function (event) {
        if (!$(event.target).closest("[id='info-bar-item']").length) {
            $("[id='info-bar-more']").css("transform", "scaleX(0)");
        }
    });
    
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