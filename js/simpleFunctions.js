// --------------------
// Open Images Project Library
// --------------------
function openProjectLibrary(fileNames) {
    $('.swiper-slide').remove();

    if ($('#scaling-info').hasClass('scale-off')) {
        for (let i = 0; i < fileNames.length; i++) {
            $('.swiper-wrapper').append(`
                <div class="swiper-slide">
                    <img src="projects_gallery/${fileNames[i]}.webp" alt="Projects Image ${i + 1}">
                </div>
            `);
        }
    } else {
        for (let i = 0; i < fileNames.length; i++) {
            $('.swiper-wrapper').append(`
                <div class="swiper-slide">
                    <img src="projects_gallery/${fileNames[i]}.webp" style="width: 100%; height: 100%;" alt="Projects Image ${i + 1}">
                </div>
            `);
        }
    }

    $('.swiper-slide').each(function(index) {
        if (fileNames[index]) {
            $(this).find('img').attr('src', `projects_gallery/${fileNames[index]}.webp`);
        }
    });

    $("#projects-project-view").fadeIn(300);
    $("body").css("overflow", "hidden");
    $('#info-bar').fadeOut(300);
    $('#spotify-info').css('display', 'none');
}

function open3dProjectLibrary(modelArray) {
    $('.swiper-slide').remove();

    const scaleOff = $('#scaling-info').hasClass('scale-off');

    for (let i = 0; i < modelArray.length; i++) {
        const modelName = modelArray[i];
        const src = `3d/${modelName}.gltf`;

        $('.swiper-wrapper').append(`
            <div class="swiper-slide">
                <model-viewer
                    src="${src}"
                    camera-controls
                    auto-rotate
                     style="width: 100%; height: 100%;"
                ></model-viewer>
            </div>
        `);
    }

    $("#projects-project-view").fadeIn(300);
    $("body").css("overflow", "hidden");
    $('#info-bar').fadeOut(300);
    $('#spotify-info').css('display', 'none');
}



// --------------------
// Show Notification
// --------------------
let notificationTimer;

function showNotification(title, content, result) {
    let visible = $('#notification').css('display') !== 'none';

    if (!visible) {
        $('#notification').fadeIn(100);
        $("#notification-title").text(getTranslationWithoutLang("notification-error"));
        $("#notification-title").text(title);
        $("#notification-content").text(content);

        if (result === "success") {
            // Success
            $("#notification").css('box-shadow', '0 0 10px rgba(51, 85, 47, 0.5)');
            $("#notification").css('border', 'rgb(133, 255, 129, 0.5) solid 1px');
            $("#notification-content").css('color', 'rgb(102, 187, 95)');
        } else {
            // Fail
            $("#notification").css('box-shadow', '0 0 10px rgba(85, 47, 47, 0.5)');
            $("#notification").css('border', 'rgb(255, 129, 129, 0.5) solid 1px');
            $("#notification-content").css('color', 'rgb(187, 95, 95)');
        }

        $('#notification').queue(function(next) {
            $(this).css('transform', 'translateX(-50%)');
            next();
        });

        if (notificationTimer) {
            clearTimeout(notificationTimer);
        }

        notificationTimer = setTimeout(function() {
            $('#notification').css('transform', 'translateX(900%)');
            $('#notification').delay(1000).queue(function(next) {
                $(this).css('display', 'none');
                next();
            });
        }, 5000);

    } else {
        $('#notification').css('transform', 'translateX(900%)');

        $('#notification').delay(500).fadeIn(500);
        $("#notification-title").delay(500).text(getTranslationWithoutLang("notification-error"));
        $("#notification-title").delay(500).text(title);
        $("#notification-content").delay(500).text(content);

        if (result === "success") {
            // Success
            $("#notification").css('box-shadow', '0 0 10px rgba(51, 85, 47, 0.5)');
            $("#notification").css('border', 'rgb(133, 255, 129, 0.5) solid 1px');
            $("#notification-content").css('color', 'rgb(102, 187, 95)');
        } else {
            // Fail
            $("#notification").css('box-shadow', '0 0 10px rgba(85, 47, 47, 0.5)');
            $("#notification").css('border', 'rgb(255, 129, 129, 0.5) solid 1px');
            $("#notification-content").css('color', 'rgb(187, 95, 95)');
        }

        $('#notification').queue(function(next) {
            $(this).css('transform', 'translateX(-50%)');
            next();
        });

        if (notificationTimer) {
            clearTimeout(notificationTimer);
        }

        notificationTimer = setTimeout(function() {
            $('#notification').css('transform', 'translateX(900%)');
            $('#notification').delay(1000).queue(function(next) {
                $(this).css('display', 'none');
                next();
            });
        }, 5000);
    }
}

// --------------------
// Skills Value
// --------------------
const blockbenchPercentage = 100;
const blenderPercentage = 75;
const photoshopPercentage = 100;
const illustratorPercentage = 100;
const indesignPercentage = 80;
const premierePercentage = 80;
const afterPercentage = 75;
const itemsadderPercentage = 85;
const nexoPercentage = 70;
const megPercentage = 60;
const cosmeticscorePercentage = 85;
const soon = "??";

function setSkillPercentage(skillClassName, percentage) {
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    const percentageText = `${percentage}%`;

    if (skillClassName == "adobe-photoshop") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe Photoshop");
    }
    else if (skillClassName == "adobe-illustrator") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe Illustrator");
    }
    else if (skillClassName == "adobe-indesign") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe InDesign");
    }
    else if (skillClassName == "soon") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Soon...");
    }
    else if (skillClassName == "adobe-premiere-pro") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe Premiere Pro");
    }
    else if (skillClassName == "adobe-after-effects") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe After Effects");
    }
    else if (skillClassName == "itemsadder") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("ItemsAdder v3 & v4");
    }
    else if (skillClassName == "nexo") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Nexo");
    }
    else if (skillClassName == "modelengine") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("ModelEngine v4");
    }
    else if (skillClassName == "cosmeticscore") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("CosmeticsCore");
    }
    else {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text(skillClassName);
    }

    if (skillClassName == "soon") {
        $(`.${skillClassName} #skills-skill-option-knowledge span`).css("animation-name", "soon-anim");
    } else {
        $(`.${skillClassName} #skills-skill-option-knowledge span`).css("width", percentageText);
    }

    $(`.${skillClassName} #skills-skill-option-knowledge-percentage`).text(percentageText);
}

// --------------------
// Addon For Performance
// --------------------
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// --------------------
// Manage Scaling Image In Project Library
// --------------------
function manageProjectScaling() {
    let element = $('#scaling-info');

    if ($(element).hasClass('scale-off')) {
        $(element).removeClass('scale-off').addClass('scale-on');
        $(element).text(getTranslationWithoutLang('carousel-scaling-2-on'));
        $('#scale-on-description').fadeIn(0);
        $('.swiper-slide img').css({
            'width': '100%',
            'height': '100%'
        })
    } else {
        $(element).removeClass('scale-on').addClass('scale-off');
        $(element).text(getTranslationWithoutLang('carousel-scaling-2-off'));
        $('#scale-on-description').fadeOut(0);
        $('.swiper-slide img').css({
            'width': 'unset',
            'height': 'unset'
        })
    }
}

// --------------------
// Change Navbar On Scroll (debounce)
// --------------------
function checkScrollValue() {
    if (window.scrollY < 10) {
        if (window.innerWidth > 1200) {
            document.querySelectorAll('#info-bar').forEach(element => {
                element.classList.add("onTop");
            });
            document.querySelectorAll('#spotify-info').forEach(element => {
                element.classList.add("onTop");
            });
            $("#collapse-arrow").css({
                'display': 'none',
            })

            $('#navbar-pre').css({
                'top': '20px',
            });
            $('#navbar').css({
                'width': '90%',
                'border-top': 'var(--border-2)',
                'border-left': 'var(--border-2)',
                'border-right': 'var(--border-2)',
                'border-radius': '30px 30px 0 0',
            });
        } 
    } else {
        if (window.innerWidth > 1200) {
            document.querySelectorAll('#info-bar').forEach(element => {
                element.classList.remove("onTop");
            });
            document.querySelectorAll('#spotify-info').forEach(element => {
                element.classList.remove("onTop");
            });
            $("#collapse-arrow").css({
                'display': 'block',
            })
            $('#navbar-pre').css({
                'top': '0',
            });
            $('#navbar').css({
                'width': '100%',
                'border-top': 'none',
                'border-left': 'none',
                'border-right': 'none',
                'border-radius': '0',
            });
        } else {
            $("#collapse-arrow").css({
                'display': 'block',
            })
            $('#navbar-pre').css({
                'top': '0',
            });
            $('#navbar').css({
                'width': '100%',
                'border-top': 'none',
                'border-left': 'none',
                'border-right': 'none',
                'border-radius': '0',
            });
        }
    }
}

// --------------------
// Change To Fix Buggdy AOS
// --------------------
function checkProjectVisibility() {
    if (window.innerWidth < 1500) {
        $('[id^="projects-project"]').attr('data-aos', 'none');
        $('#projects-container').attr('data-aos', 'none');
        $('#feedback-container').attr('data-aos', 'none');
        $('#swiper-opinion-navigation').attr('data-aos', 'none');
        $('#swiper-opinion-info-buttons').attr('data-aos', 'none');
        $('[id^="feedback-opinion"]').attr('data-aos', 'none');
    } else {
        return;
    }
}

// --------------------
// Change Camera Controls
// --------------------
function changeCameraControls() {
    const modelViewer = document.querySelector('model-viewer#model-viewer-view');

    if (modelViewer.hasAttribute('auto-rotate')) {
        modelViewer.removeAttribute('auto-rotate');
    } else {
        modelViewer.setAttribute('auto-rotate', '');
    }
}

// --------------------
// Set Navbar Style (on resize)
// --------------------
function checkNavbarSettings() {
    if (window.scrollY < 10) {
        if (window.innerWidth < 1200) {
            document.querySelectorAll('#info-bar').forEach(element => {
                element.classList.remove("onTop");
            });
            document.querySelectorAll('#spotify-info').forEach(element => {
                element.classList.remove("onTop");
            });
            $('#navbar-pre').css({
                'top': '0',
            });
            $('#navbar').css({
                'width': '100%',
                'border-top': '0',
                'border-left': '0',
                'border-right': '0',
                'border-radius': '0',
            });
        } else {
            document.querySelectorAll('#info-bar').forEach(element => {
                element.classList.add("onTop");
            });
            document.querySelectorAll('#spotify-info').forEach(element => {
                element.classList.add("onTop");
            });
            $('#navbar-pre').css({
                'top': '20px',
            });

            $('#navbar').css({
                'width': '90%',
                'border-top': 'var(--border-2)',
                'border-left': 'var(--border-2)',
                'border-right': 'var(--border-2)',
                'border-radius': '30px 30px 0 0',
            });
        }
    }
}

// --------------------
// Hide Swiper
// --------------------
function hideProjectView() {
    $('#projects-project-view').fadeOut(300);
    $("body").css("overflow", "visible");
    $('.swiper-slide').remove();
    $('#info-bar').fadeIn(300);
    $('#spotify-info').css('display', 'flex');
}

// --------------------
// On/Off Animations
// --------------------
let animatedElements = "k, det, .navbar-left-img, .navbar-mid-option-underline, ki";

function turnOnAnimations() {
    effectsElement = document.querySelector('[value="2"]');

    if (effectsElement.classList.contains("disable")) {
        return;
    }

    $(".navbar-left-img").css("animation-name", "logo-rotate-1");
    $("k, det, ki").css("animation-name", "gradient-animation");
    $(".navbar-mid-option-underline, #active").css("animation-name", "RGB-animation-1");
    $('#settings-icon').css('opacity', '1');
    $('#spotify-img').removeClass('offAnim');
    $('.soon span').css('animation-name', 'soon-anim');
}

function turnOffAnimations() {
    $(animatedElements).css("animation-name", "animation-off");
    $('#settings-icon').css('opacity', '0.4');
    $('#spotify-img').addClass('offAnim');
    $('.soon span').css('animation-name', 'offAnim');
}

function manageAnimations() {
    if ($(animatedElements).css("animation-name") === "animation-off") {
        effectsElement = document.querySelectorAll('[value="2"]');
        effectsElement.forEach((el) => {
            el.className = "";
            el.classList.add("enable");
        });
        turnOnAnimations();
    }
    else {
        effectsElement = document.querySelectorAll('[value="2"]');
        effectsElement.forEach((el) => {
            el.className = "";
            el.classList.add("disable");
        });
        turnOffAnimations();
    }
}

// --------------------
// Copy Discord ID
// --------------------
function copyDiscordId() {
    let discordID = "744981493159559308";

    navigator.clipboard.writeText(discordID)
    .then(function() {
        showNotification(getTranslationWithoutLang("notification-success"), getTranslationWithoutLang("copy-id-content-success"), "success");
    })
    .catch(function(err) {
        showNotification(getTranslationWithoutLang("notification-error"), getTranslationWithoutLang("copy-id-content-error") + err, "fail");
    })
}

// --------------------
// Open External Discord Client
// --------------------
function openDiscordClient() {
    if (window.innerWidth < 1000) {
        showNotification(getTranslationWithoutLang("notification-error"), getTranslationWithoutLang("open-client-content-error"), "fail");
    } else {
        window.open('discord:/users/744981493159559308', '_blank')
        showNotification(getTranslationWithoutLang("notification-success"), getTranslationWithoutLang("open-client-content-success"), "success");
    }
}

// --------------------
// Scrool To Choosed Element
// --------------------
function scrollToElement(element) {
    $('#navbar-mid-mobile-menu-table').delay(700).fadeOut(300);
    $('#info-bar').delay(700).fadeIn(500);
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

}

function hideChooseMenu() {
    $('choose-menu').fadeOut(300);
    $("html, body").css('overflow', 'visible'); 
}

// --------------------
// Hide Navbar Underlines When Scroll To Much
// --------------------
function checkScrollBeyondFeedback() {
    const feedbackElement = $('#feedback-container').get(0);

    if (feedbackElement) {
        const feedbackBottom = feedbackElement.getBoundingClientRect().bottom + window.scrollY;

        if (window.scrollY > feedbackBottom) {
            $('.navbar-mid-option-underline').removeAttr('id');
        }
    }
}

function infoBarAction(id) {

    if (id === "1") {
        const moreElement = document.querySelector(`#info-bar-more[value="${id}"]`);

        if (moreElement) {
            if (moreElement.style.transform === "scaleX(1)") {
                copyDiscordId();
                setTimeout(() => {
                    moreElement.style.transform = "scaleX(0)";
                }, 200)
            } else {
                moreElement.style.transform = "scaleX(1)";
            }
        }
    }

    if (id === "2") {
        const moreElement = document.querySelector(`#info-bar-more[value="${id}"]`);

        if (moreElement) {
            if (moreElement.style.transform === "scaleX(1)") {
                manageAnimations();
                setTimeout(() => {
                    moreElement.style.transform = "scaleX(0)";
                }, 200)
            } else {
                moreElement.style.transform = "scaleX(1)";
            }
        }
    }

    if (id === "3") {
        const moreElement = document.querySelector(`#info-bar-more[value="${id}"]`);

        if (moreElement) {
            if (moreElement.style.transform === "scaleX(1)") {

                location.href = "https://sensee.space/sklep"

                setTimeout(() => {
                    moreElement.style.transform = "scaleX(0)";
                }, 200)
            } else {
                moreElement.style.transform = "scaleX(1)";
            }
        }
    }

    if (id === "4") {
        const moreElement = document.querySelector(`#info-bar-more[value="${id}"]`);

        if (moreElement) {
            if (moreElement.style.transform === "scaleX(1)") {

                spotifyVisibility();

                setTimeout(() => {
                    moreElement.style.transform = "scaleX(0)";
                }, 200)
            } else {
                moreElement.style.transform = "scaleX(1)";
            }
        }
    }
}

function darkenRgb(r, g, b, percentage) {
    const darken = (value) => Math.max(0, value - (value * (percentage / 100)));
  
    return [
      Math.round(darken(r)),
      Math.round(darken(g)),
      Math.round(darken(b))
    ];
}

function lightenRgb(r, g, b, percentage) {
    const lighten = (value) => Math.min(255, value + (255 - value) * (percentage / 100));

    return [
      Math.round(lighten(r)),
      Math.round(lighten(g)),
      Math.round(lighten(b))
    ];
}

function spotifyVisibility() {
    if (document.querySelector('#info-bar-status[value="4"]').classList.contains('enable')) {
        document.querySelector('#spotify-info').style.display = "none";
        document.querySelector('#info-bar-status[value="4"]').className= '';
        document.querySelector('#info-bar-status[value="4"]').classList.add('disable');
    } else {
        document.querySelector('#spotify-info').style.display = "flex";
        document.querySelector('#info-bar-status[value="4"]').className= '';
        document.querySelector('#info-bar-status[value="4"]').classList.add('enable');
    }
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function manageInfoBar() {
    infoBar = document.querySelector('#info-bar');

    if (window.innerWidth > 1200) {
        if (infoBar.style.left !== '-60px') {
            $(infoBar).css('left', '-60px');
            $('#collapse-arrow').removeClass('rotated')
        } else {
            $(infoBar).css('left', '');
            $('#collapse-arrow').addClass('rotated')
        }
    } else {
        if (infoBar.style.left !== '-50px') {
            $(infoBar).css('left', '-50px');
            $('#collapse-arrow').removeClass('rotated')
        } else {
            $(infoBar).css('left', '');
            $('#collapse-arrow').addClass('rotated')
        }
    }
}