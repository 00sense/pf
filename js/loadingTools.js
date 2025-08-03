console.warn = function () {};
console.log = function() {};
console.error = function () {};

let liczbaOpini = 16;

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

    function ustawAvataryDiscorda() {
        const idUzytkownikow = [
            "307503795192070144", // o1
            "865654945683734587", // o2
            "616308905928294422", // o3
            "1313411082601369605", // o4
            "723832148297121792", // o5
            "417353906809733125", // o6
            "1313941413955899437", // o7
            "322099049840771072", // o8
            "1296215137258049680", // o9
            "547796325421416448", // o10
            "1141663111863083019", // o11
            "418444890020773889",  // o12
            "211083431101071361", // o13
            "770999192734007298", // o14
            "1400872047705591869", // o15
            "1148378265132728371", // o16
        ];

        idUzytkownikow.forEach((id, index) => {
            const numer = index + 1;
            const selektor = `.o${numer} img`;

            fetch("https://discordlookup.mesalytic.moe/v1/user/" + id)
                .then(r => r.json())
                .then(data => {
                    if (data?.avatar?.link) {
                        $(selektor).attr("src", data.avatar.link);
                    } else {
                        console.warn(`Brak avatara dla .o${numer} (${id})`);
                        $(selektor).attr("src", `assets/discordblue.webp`);
                    }
                })
                .catch(err => {
                    console.error(`Błąd przy pobieraniu danych dla .o${numer} (${id}):`, err);
                });
        });
    }

    ustawAvataryDiscorda();
    
    // --------------------
    // Loading Text Animation
    // --------------------
    function textChangeAnimation() {
        let index = 0;
        let text = $("#preloader-text");
        var content = [''];

        if (currentLanguage === 'en') {
            var content = ['Loading 3D models...', 'Loading hours of swearing...', 'Loading my hard work...', 'Loading graphics...'];
        } else {
            var content = ['Ładowanie modeli 3D...', 'Ładowanie godzin frustracji...', 'Ładowanie mojej ciężkiej pracy...', 'Ładowanie grafik...'];
        }
        text.text(content[index]);
        let intervalId = setInterval(updateContent, 600);

        function updateContent() {
            if ($("#loader").css("display") === "flex") {
                text.fadeOut(400, function () {
                    $("#preloader-text").text(content[index]).fadeIn(300);
                });
                index = (index + 1) % content.length;
            } else {
                clearInterval(intervalId);
            }
        }
    }
    textChangeAnimation();

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

    // --------------------
    // Loading Skills Value
    // --------------------
    setSkillPercentage("adobe-photoshop", photoshopPercentage);
    setSkillPercentage("adobe-illustrator", illustratorPercentage);
    setSkillPercentage("adobe-indesign", indesignPercentage);
    setSkillPercentage("soon", soon);
    setSkillPercentage("adobe-premiere-pro", premierePercentage);
    setSkillPercentage("adobe-after-effects", afterPercentage);
    setSkillPercentage("blockbench", blockbenchPercentage);
    setSkillPercentage("blender", blenderPercentage);
    setSkillPercentage("html-css", htmlCSSPercentage);
    setSkillPercentage("javascript", jsPercentage);

    // --------------------
    // Set Default Options Of Translations
    // --------------------
    $('#scaling-info').text(getTranslationWithoutLang('carousel-scaling-2-off'));
    $('#show-more').text(getTranslationWithoutLang('show-more-projects'));

    // --------------------
    // Loading Swiper Responsivity
    // --------------------
    function toggleNavigationVisibility(swiper) {
        const slidesPerView = swiper.params.slidesPerView;
        const totalSlides = swiper.slides.length;
    
        if (slidesPerView >= totalSlides) {
            $('#swiper-opinion-info').css('justify-content', 'space-between');
            $('#swiper-opinion-info').css('width', '100%');
            $('#swiper-opinion-tools').fadeOut(200);

        } else {
            $('#swiper-opinion-info').css('justify-content', 'center');
            $('#swiper-opinion-info').css('width', 'unset');
            $('#swiper-opinion-tools').fadeIn(200);
        }
    }

    // --------------------
    // Loading Swipers Settings
    // --------------------
    const swiper = new Swiper('.swiper-container', {
        allowTouchMove: false,
        spaceBetween: 30,
        loop: false,
        speed: 600, // Speed (ms)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next
            prevEl: '.swiper-button-prev', // Previous
        },
        effect: 'slide',
        zoom: {
            maxRatio: 5, // Max
            minRatio: 1, // Min
        },
    });

    $("#close-icon").click(function() {
        swiper.slideTo(0);
    })

    $("#multiple-images").click(function() {
        swiper.slideTo(0);
    })
    
    const swiperOpinions = new Swiper('.swiper-opinion', {
        wrapperClass: 'swiper-opinion-wrapper',
        slideClass: 'swiper-opinion-slide',
        slidesPerView: 1,
        breakpoints: {
            1500: {
                slidesPerView: 2, 
            },
            1910: {
                slidesPerView: 3,
            },
            2400: {
                slidesPerView: 3,
            },
        },
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000, 
            disableOnInteraction: true, 
          },
        speed: 250, // Speed (ms)
        pagination: {
            el: '.swiper-opinion-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-opinion-button-next', // Next
            prevEl: '.swiper-opinion-button-prev', // Previous
        },
        on: {
            init: function () {
                toggleNavigationVisibility(this);
            },
            resize: function () {
                toggleNavigationVisibility(this);
            }
        },
        effect: 'slide',
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

    // --------------------
    // Underline On Scroll To Container (Navbar)
    // --------------------
    function handleVisibility(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case 'content-container':
                        $('.navbar-mid-option-underline').removeAttr('id');
                        $(`[value="content-container"]`).first().attr("id", "active");
                        break;
                    case 'skills-container':
                        $('.navbar-mid-option-underline').removeAttr('id');
                        $(`[value="skills-container"]`).first().attr("id", "active");
                        break;
                    case 'aboutme-container':
                        $('.navbar-mid-option-underline').removeAttr('id');
                        $(`[value="aboutme-container"]`).first().attr("id", "active");
                        break;
                    case 'projects-project':
                        $('.navbar-mid-option-underline').removeAttr('id');
                        $(`[value="projects-container"]`).first().attr("id", "active");
                        break;
                    case 'feedback-container':
                        $('.navbar-mid-option-underline').removeAttr('id');
                        $(`[value="feedback-container"]`).first().attr("id", "active");
                        break;   
                    default:
                        break;
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleVisibility, {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Opacity
    });

    $('#content-container, #skills-container, #aboutme-container, #projects-project, #feedback-container').each(function() {
        observer.observe(this);
    });
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

$(document).ready(function () {
    function updateAmountNumbers() {

        $('[id="multiple-images"]').each(function () {
            const projectValue = $(this).attr('value');
            const onclickValue = $(this).attr('onclick');
            
            if (onclickValue) { 
                const match = onclickValue.match(/openProjectLibrary\((\[[^\]]*\])\)/);

                if (match) {
                    try {
                        const jsonString = match[1].replace(/'/g, '"');
                        const itemsArray = JSON.parse(jsonString);
                        const itemCount = itemsArray.length;

                        const amountNumberElement = $(`[id="amount-number"][value="${projectValue}"]`);
                        if (amountNumberElement.length) {
                            amountNumberElement.text(itemCount);
                        }
                    } catch (error) {
                        console.error('Błąd podczas parsowania tablicy w openProjectLibrary:', error);
                    }
                }
            }
        });

        $('[id="object-image"]').each(function () {
            const projectValue = $(this).attr('value');
            const onclickValue = $(this).attr('onclick');
            
            if (onclickValue) {
                const match = onclickValue.match(/open3dProjectLibrary\((\[[^\]]*\])\)/);

                if (match) {
                    try {
                        const jsonString = match[1].replace(/'/g, '"');
                        const itemsArray = JSON.parse(jsonString);
                        const itemCount = itemsArray.length;

                        const amountNumberElement = $(`[id="amount-number"][value="${projectValue}"]`);
                        if (amountNumberElement.length) {
                            amountNumberElement.text(itemCount);
                        }
                    } catch (error) {
                        console.error('Błąd podczas parsowania tablicy w open3dProjectLibrary:', error);
                    }
                }
            }
        });
    }
    updateAmountNumbers();

function createColorVariants([r, g, b], lightenRatio = 25, darkenRatio = 35, gainMultiplier = 1.8) {
    const applyGain = ([r, g, b]) => {
        const max = Math.max(r, g, b);
        return [
            Math.min(255, Math.round(r + (r === max ? gainMultiplier * 10 : 0))),
            Math.min(255, Math.round(g + (g === max ? gainMultiplier * 10 : 0))),
            Math.min(255, Math.round(b + (b === max ? gainMultiplier * 10 : 0)))
        ];
    };

    const lightenVal = (val) => Math.min(255, val + (255 - val) * (lightenRatio / 100));
    const darkenVal = (val) => Math.max(0, val - val * (darkenRatio / 100));

    const rawLight = [lightenVal(r), lightenVal(g), lightenVal(b)];
    const rawDark = [darkenVal(r), darkenVal(g), darkenVal(b)];

    const lightColor = applyGain(rawLight);
    let darkColor = applyGain(rawDark);

    if (Math.max(...darkColor) < 60) {
        const maxIndex = darkColor.indexOf(Math.max(...darkColor));
        darkColor[maxIndex] = 60;
    }

    const rgbToString = ([r, g, b]) => `${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;

    return {
        light: rgbToString(lightColor),
        dark: rgbToString(darkColor)
    };
}

function applyColorsFromImages() {
    const colorExtractor = new ColorThief();

    for (let index = 1; index <= liczbaOpini; index++) {
        const imgSelector = `.o${index} img`;
        const imageElement = document.querySelector(imgSelector);

        if (!imageElement) {
            console.warn(`No image found for selector: ${imgSelector}`);
            continue;
        }

        imageElement.crossOrigin = "anonymous";

        imageElement.onload = () => {
            try {
                const [r, g, b] = colorExtractor.getColor(imageElement);
                const { light, dark } = createColorVariants([r, g, b]);

                document.documentElement.style.setProperty(`--o${index}-1-color`, light);
                document.documentElement.style.setProperty(`--o${index}-2-color`, dark);

                console.log(`Image ${index} colors set. Light: ${light}, Dark: ${dark}`);
            } catch (error) {
                console.error(`Error extracting color from image .o${index} img:`, error);
            }
        };

        if (imageElement.complete && imageElement.naturalHeight !== 0) {
            imageElement.onload();
        }
    }
}

applyColorsFromImages();
});