console.warn = function () {};
console.log = function() {};
console.error = function () {};

$(document).ready(function() {

    AOS.init();
    
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

    // --------------------
    // Window Title Animation
    // --------------------
    let index = 0;
    function updateTitle() {
        const windowNames = ["Portfolio • Sensee ツ", "Graphic Designer ツ", "Editor/Animator ツ", "3D Designer ツ", "Minecraft Modder ツ"];

        document.title = windowNames[index];
        // Czas pierwszego : czas reszty (ms)
        let delay = (index === 0) ? 4000 : 1000;
        index = (index + 1) % windowNames.length;
        setTimeout(updateTitle, delay);
    }
    updateTitle();

    // --------------------
    // Loading Skills Value
    // --------------------
    setSkillPercentage("adobe-photoshop", photoshopPercentage);
    setSkillPercentage("adobe-illustrator", illustratorPercentage);
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
            2400: {
                slidesPerView: 3,
            },
        },
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 8000, 
            disableOnInteraction: false, 
          },
        speed: 350, // Speed (ms)
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
    img.src = "https://url-to-your-api.com/image.jpg";
    img.onload = function () {
    Vibrant.from(img).getPalette().then((palette) => {
    const dominantHex = palette.Vibrant.getHex();
    const dominantRGB = palette.Vibrant.getRgb();
    dominantRgbDarkened = darkenRgb(dominantRGB[0], dominantRGB[1], dominantRGB[2], 40);
    $('html').css('--spotify-1-color', dominantHex);
    $('html').css('--spotify-2-color', dominantRgbDarkened);
  });
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
                        console.error('Błąd podczas parsowania tablicy w openProjectLibrary:', error);
                    }
                }
            }
        });

        $('[id="film-image"]').each(function () {
            const projectValue = $(this).attr('value');
            const onclickValue = $(this).attr('onclick');
            
            if (onclickValue) {
                const match = onclickValue.match(/openSpecificProjectLibrary\((\[[^\]]*\])\)/);

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
    }
    updateAmountNumbers();
});