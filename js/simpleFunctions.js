// --------------------
// Open Swiper For Choosed Images
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
}

function open3dProjectLibrary(modelArray) {
        const modelViewer = $('#model-viewer-view');
        const modelName = modelArray[0];
        modelViewer.attr('src', `3d/${modelName}.gltf`);

    $("#projects-project-view-3D").fadeIn(300);
    $("body").css("overflow", "hidden");
}

function openFilmProjectLibrary() {
    $("#projects-project-view-film").fadeIn(300);
    $("body").css("overflow", "hidden");
}

// --------------------
// Scroll To Top Button
// --------------------
function backToTop() {
    $("html, body").scrollTop(0);
}

// --------------------
// Show Notification
// --------------------
function showNotification(title, content, result) {
    if ($('#notification').css('display') === 'none') {
        $('#notification').fadeIn(100);

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

        $('#notification').queue(function (show) {
            $(this).css('transform', 'translateX(-50%) translateY(0px)')
            show();
        })

        $('#notification').delay(7000).queue(function (hide) {
            $(this).css('transform', 'translateX(-50%) translateY(300px)')
            $(this).fadeOut(500);
            hide();
        })
    }
}

// --------------------
// Skills Value
// --------------------
const blockbenchPercentage = 95;
const blenderPercentage = 55;
const photoshopPercentage = 100;
const illustratorPercentage = 100;
const premierePercentage = 80;
const afterPercentage = 75;
const htmlCSSPercentage = 80;
const jsPercentage = 50;

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
    else if (skillClassName == "adobe-premiere-pro") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe Premiere Pro");
    }
    else if (skillClassName == "adobe-after-effects") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Adobe After Effects");
    }
    else if (skillClassName == "html-css") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("HTML/CSS");
    }
    else if (skillClassName == "javascript") {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text("Javascript (jQuery)");
    }
    else {
      $(`.${skillClassName} #skills-skill-option-knowledge .skill-name`).text(skillClassName);
    }

    $(`.${skillClassName} #skills-skill-option-knowledge span`).css("width", percentageText);
    $(`.${skillClassName} #skills-skill-option-knowledge-percentage`).text(percentageText);

    if (percentage >= 99) {
        $(`.${skillClassName} #skills-skill-option-knowledge span`).css("width", "100%");
    }
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
        if (window.innerWidth > 1100) {
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
        if (window.innerWidth > 1100) {
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
    if (window.innerWidth < 700) {
        $('[id^="projects-project"]').attr('data-aos', 'none');
        $('#projects-container').attr('data-aos', 'none');
    } else {
        return;
    }
}

// --------------------
// Change Visibility Of Color Grading In 3D Object View
// --------------------
function changeColorGrading() {
    const modelViewer = document.querySelector('model-viewer#model-viewer-view');
    
    const existingEffectComposer = modelViewer.querySelector('effect-composer');
    
    if (existingEffectComposer) {
        modelViewer.removeChild(existingEffectComposer);
    } else {
        const effectComposer = document.createElement('effect-composer');
        effectComposer.setAttribute('render-mode', 'quality');
        effectComposer.setAttribute('msaa', '8');
        
        const colorGradeEffect = document.createElement('color-grade-effect');
        colorGradeEffect.setAttribute('blend-mode', 'DEFAULT');
        colorGradeEffect.setAttribute('opacity', '1');
        // colorGradeEffect.setAttribute('tonemapping', 'ACES_FILMIC');
        colorGradeEffect.setAttribute('brightness', '-0.05');
        colorGradeEffect.setAttribute('contrast', '0');
        colorGradeEffect.setAttribute('saturation', '0.1');
        colorGradeEffect.setAttribute('hue', '0');
        
        effectComposer.appendChild(colorGradeEffect);
        modelViewer.appendChild(effectComposer);
    }
}

// --------------------
// Set Navbar Style (on resize)
// --------------------
function checkNavbarSettings() {
    if (window.scrollY < 10) {
        if (window.innerWidth < 1100) {
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
}

// --------------------
// Hide 3D
// --------------------
function hide3dProjectView() {
    $('#projects-project-view-3D').fadeOut(300);
    $("body").css("overflow", "visible");
}

// --------------------
// Hide Film
// --------------------
function hideFilmProjectView() {
    $('#projects-project-view-film').fadeOut(300);
    $("body").css("overflow", "visible");
    stopVideo();
}

// --------------------
// On/Off Animations
// --------------------
function manageAnimations() {
    let animatedElements = "#multiple-images-bgimage, k, det, .navbar-left-img, .navbar-mid-option-underline, #navbar-mid-mobile-menu-table-option-active, #content-card-image::after, #content-card-image::before, #content-card-content-button::after, #content-card-content-button::before,  #skills-skill::after, #skills-skill::before, #skills-skill-option-knowledge::after, #skills-skill-option-knowledge::before,  #footer-bottom-mid::after, #footer-bottom-mid::before, #footer-mobile-bottom-mid::before, #footer-mobile-bottom-mid::after, #projects-project::after, #projects-project::before, #text-content-top-img::before, #text-content-top-img::after";

    if ($(animatedElements).css("animation-name") === "animation-off") {
        $(".navbar-left-img").css("animation-name", "logo-rotate-1");
        $("k, det").css("animation-name", "gradient-animation");
        $("#multiple-images-bgimage").css("animation-name", "img-bg-1");
        $(".navbar-mid-option-underline, #active").css("animation-name", "RGB-animation-1");
        $('#settings-icon').css('opacity', '1');

        showNotification(getTranslationWithoutLang('manage-animations-on-title'), getTranslationWithoutLang('manage-animations-on-content'), 'success'); 
    }
    else {
        $(animatedElements).css("animation-name", "animation-off");
        $('#settings-icon').css('opacity', '0.4');

        showNotification(getTranslationWithoutLang('manage-animations-off-title'), getTranslationWithoutLang('manage-animations-off-content'), 'success');
    }
}

// --------------------
// Copy Discord ID
// --------------------
function copyDiscordId() {
    let discordID = "744981493159559308";

    navigator.clipboard.writeText(discordID)
    .then(function() {
        showNotification(getTranslationWithoutLang("copy-id-title-success"), getTranslationWithoutLang("copy-id-content-success"), "success");
    })
    .catch(function(err) {
        showNotification(getTranslationWithoutLang("copy-id-title-error"), getTranslationWithoutLang("copy-id-content-error") + err, "fail");
    })
}

// --------------------
// Open External Discord Client
// --------------------
function openDiscordClient() {
    window.open('discord:/users/744981493159559308', '_blank')
    showNotification(getTranslationWithoutLang("open-client-title-success"), getTranslationWithoutLang("open-client-content-success"), "success");
}

// --------------------
// Scrool To Choosed Element
// --------------------
function scrollToElement(element) {
    $('#navbar-mid-mobile-menu-table').delay(700).fadeOut(400);
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
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

// --------------------
// Open Mail:to
// --------------------
function openMail() {
    let mail = "redsekk0@gmail.com";

    const mailtoLink = `mailto:${mail}?subject=Order&body=`;
    window.location.href = mailtoLink;

    navigator.clipboard.writeText(mail)
    .then(function() {
        showNotification(getTranslationWithoutLang("copy-mail-title-success"), getTranslationWithoutLang("copy-mail-content-success"), "success");
    })
    .catch(function(err) {
        showNotification(getTranslationWithoutLang("copy-mail-title-error"), getTranslationWithoutLang("copy-mail-content-error") + err, "fail");
    })
}
