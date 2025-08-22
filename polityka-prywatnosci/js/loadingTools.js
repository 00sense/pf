console.warn = function () {};
console.log = function() {};
console.error = function () {};

let liczbaOpini = 17;

$(document).ready(function() {

    function myAvatar() {
        const img = document.querySelector("#content-card-image img");
        const img2 = document.querySelector("#text-content-main img");
        const img3 = document.querySelector(".profilowe img");

        fetch("https://discordlookup.mesalytic.moe/v1/user/744981493159559308")
            .then(r => r.json())
            .then(data => {
                if (data?.avatar?.link) {
                    $(img).attr("src", data.avatar.link);
                    $(img2).attr("src", data.avatar.link);
                    $(img3).attr("src", data.avatar.link);
                } else {
                    console.warn(`Brak avatara dla 744981493159559308`);
                }
            })
            .catch(err => {
                console.error(`Błąd przy pobieraniu danych dla 744981493159559308`, err);
            });
    }

    myAvatar();

    AOS.init();

$(function () {
    let pre = "Sensee • ";
    let index = 0;
    const windowNames = [
        "Portfolio • Sensee ツ",
        pre + "Graphic Designer ツ",
        pre + "Animator ツ",
        pre + "3D Designer ツ",
        pre + "Minecraft Modder ツ"
    ];
    let titleInterval;
    let isActive = true;

    function isWindowReallyActive() {
        return !document.hidden && document.hasFocus() && window.outerHeight > 0 && window.screenY > -10000;
    }

    function updateTitle() {
        effectsElement = document.querySelector('[value="2"]');

        if (effectsElement.classList.contains("disable")) {
            stopRotation();
            return;
        }
        if (!isWindowReallyActive()) return;

        document.title = windowNames[index];
        const delay = (index === 0) ? 4000 : 1000;
        index = (index + 1) % windowNames.length;

        titleInterval = setTimeout(updateTitle, delay);
    }

    function startRotation() {
        effectsElement = document.querySelector('[value="2"]');

        if (effectsElement.classList.contains("disable")) {
            return;
        }
        clearTimeout(titleInterval);
        isActive = true;
        updateTitle();
    }

    function stopRotation() {
        document.title = windowNames[0];
        clearTimeout(titleInterval);
        isActive = false;
    }

    setInterval(() => {
        if (isWindowReallyActive()) {
            if (!isActive) startRotation();
        } else {
            if (isActive) stopRotation();
        }
    }, 1000);

    $(window).on("focus", startRotation);
    $(window).on("blur", stopRotation);

    $(document).on("visibilitychange", function () {
        if (!document.hidden) {
            startRotation();
        } else {
            stopRotation();
        }
    });

    updateTitle();
});

// Dominujacy kolor (Spotify)
    const img = document.getElementById("spotify-real-img");

    img.crossOrigin = "anonymous";

    img.onload = function () {
        let ct = new ColorThief();
        let [r, g, b] = ct.getColor(img);

        function generateVariants([r, g, b], lightenPercent = 25, darkenPercent = 25) {
            const lighten = (value) => Math.min(255, value + (255 - value) * (lightenPercent / 100));
            const darken = (value) => Math.max(0, value - value * (darkenPercent / 100));

            const light = [
                Math.round(lighten(r)),
                Math.round(lighten(g)),
                Math.round(lighten(b))
            ];

            let dark = [
                Math.round(darken(r)),
                Math.round(darken(g)),
                Math.round(darken(b))
            ];

            if (Math.max(...dark) < 60) {
                const i = dark.indexOf(Math.max(...dark));
                dark[i] = 60;
            }

            const toRgbString = ([r, g, b]) => `${r}, ${g}, ${b}`;

            return {
                light: toRgbString(light),
                dark: toRgbString(dark)
            };
        }

        const {light, dark} = generateVariants([r, g, b]);

        $('html').css('--spotify-1-color', light);
        $('html').css('--spotify-2-color', dark);
    };
});

// --------------------
// Hide Loading Animation
// --------------------
$(window).on('load', function() {
    $('#loader').delay(300).fadeOut('slow'); 
    $('#preloader-text-line')
        .delay(0)
        .queue(function (next) {
            $(this).css('padding', '2px 0px'); 
            $(this).css('opacity', '0.4'); 
            next();
            });
    $('body')
        .delay(0)
        .queue(function (next2) {
            $("html, body").css('overflow', 'visible'); 
            next2();
            });        
    $('#bg').delay(100).fadeOut('slow');

    setTimeout(function() {
        $('loader').remove();
        $('scripts').remove();
    }, 10000);
});