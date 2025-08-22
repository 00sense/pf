let currentLanguage = localStorage.getItem('language') || 'pl'; 

function setLanguageOnLoad() {
    updateTranslations(currentLanguage);
    setButtonStyles(currentLanguage);
}

let translations = {
    "pl": {
        "notification-success": "Sukces!",
        "notification-error": "Wystąpił błąd!",

        "change-language-error": "Hej! Kilkutronie próbujesz zmienić język, na ten który masz aktualnie wybrany! Spróbuj wybrać inny, jeśli występują z tym problemy skontaktuj się na Discordzie ツ",
        "copy-id-content-error": "Nie udało się skopiować tekstu, błąd który wystąpił: ",
        "copy-id-content-success": "Pomyślnie skopiowano ID profilu Discord do Twojego schowka! Teraz możesz wkleić je w miejscu przeznaczonym do dodania znajomego lub gdziekolwiek indziej chcesz!",
        "copy-mail-content-error": "Nie udało się skopiować tekstu, błąd który wystąpił: ",
        "copy-mail-content-success": "Mój mail został pomyślnie skopiowany do Twojego schowka! Do usłyszenia!",
        "open-client-content-success": "Profil Discord został otwarty, jeśli nie została otwarta aplikacja Discord - skopiuj id i dodaj mnie manualnie!",
        "open-client-content-error": "Profil Discord nie mógł zostać otwarty dlatego, że prawdopodobnie używasz urządzenia mobilnego. Skopiuj id i dodaj mnie manualnie!",

        "info-bar-1": "Jestem aktualnie online, napisz na Discordzie! (Kliknij ponownie)",
        "info-bar-2": "Wyłącz/Włącz animacje (Kliknij ponownie)",
        "info-bar-3": "Przejdź na sklep (Kliknij ponownie)",
        "info-bar-4": "Wyłącz/Włącz widoczność informacji o Spotify (Kliknij ponownie)",

        "menu": "Menu",
        "home": "Strona główna",
        "shop": "Sklep",
        "regulamin": "Regulamin",
        "polityka-prywatnosci": "Polityka prywatności",
        "language": "Język",
        "created-by-1": "Strona w całości stworzona i zaprojektowana przez",
        "created-by-2": " sensee",
        "copyright": " • © 2025 Sensee - Wszelkie prawa zastrzeżone",
        "aboutme-main-text": "Polityka prywatności",
        "aboutme-contact-1": "Dziękuję za Twoją uwagę!",
        "aboutme-contact-2": "Zachęcam Cię do kontaktu na ",
        "aboutme-contact-3": "DISCORDZIE, ",
        "aboutme-contact-4": "gdzie możemy omówić szczegóły potencjalnej współpracy lub po prostu wymienić się pomysłami. Jestem otwarty na każdą rozmowę i nowe wyzwania",
        "aboutme-open-profile": "Otwórz profil",
        "aboutme-copy-id": "Skopiuj ID profilu",
        "spotify-track": "Odtwórz na spotify",
    },

    "en": {
        "notification-success": "Success!",
        "notification-error": "An error occurred!",

        "change-language-error": "Hey! You've been trying to change the language to the one you currently have selected for a few times! Try choosing a different one, if you're having trouble with that contact us on Discord ツ",
        "copy-id-content-error": "The text could not be copied, the error occurred: ",
        "copy-id-content-success": "Discord profile ID successfully copied to your clipboard! Now you can paste it in the space for adding a friend or anywhere else you want!",
        "copy-mail-content-error": "The text could not be copied, the error occurred: ",
        "copy-mail-content-success": "My email has been successfully copied to your clipboard! Talk to you soon!",
        "open-client-content-success": "The Discord profile has been opened. If the Discord app didn't launch, copy the ID and add me manually!",
        "open-client-content-error": "The Discord profile could not be opened because you are likely using a mobile device. Please copy the ID and add me manually!",

        "info-bar-1": "I'm currently online, feel free to message me on Discord! (Click again)",
        "info-bar-2": "Enable/Disable animations (Click again)",
        "info-bar-3": "Go to shop! (Click again)",
        "info-bar-4": "Enable/Disable visibility of Spotify information (Click again)",

        "menu": "Menu",
        "home": "Home",
        "shop": "Shop",
        "regulamin": "Terms of service",
        "polityka-prywatnosci": "Privacy Policy",
        "language": "Language",
        "created-by-1": "A website entirely created and designed by",
        "created-by-2": " sensee",
        "copyright": " • © 2025 Sensee - All rights reserved",
        "aboutme-main-text": "Privacy Policy",
        "aboutme-contact-1": "Thank you for your attention!",
        "aboutme-contact-2": "I encourage you to reach out on ",
        "aboutme-contact-3": "DISCORD, ",
        "aboutme-contact-4": "where we can discuss the details of potential collaboration or simply exchange ideas. I am open to any conversation and new challenges",
        "aboutme-open-profile": "Open profile",
        "aboutme-copy-id": "Copy profile ID",

        "spotify-track": "Listen on spotify",
    }
};

$(document).ready(function() {
        setLanguageOnLoad();
    
        let errorCount = 0;
        $("svg[data-lang]").on("click", function () {
            const selectedLanguage = $(this).data("lang");
            if (selectedLanguage === "en") {
                alert ("Brak tłumaczenia polityki prywatności dla tego języka!")
            }
    
            if (currentLanguage === selectedLanguage) {
                errorCount++;
    
                if (errorCount === 5) {
                        alert(getTranslationWithoutLang('change-language-error'));
                    errorCount = 0;
                }
                return;
            }
            currentLanguage = selectedLanguage;
            localStorage.setItem('language', currentLanguage);
            updateTranslations(currentLanguage);
            setButtonStyles(currentLanguage);
        });
});

function updateTranslations(language) {
    $("[data-translate]").each(function () {
        const key = $(this).data("translate");
        if (translations[language][key]) {
            const $element = $(this);

            const textNode = $element.contents().filter(function () {
                return this.nodeType === 3;
            }).first();

            if (textNode.length) {
                $element.fadeOut(200, function () {
                    textNode[0].nodeValue = translations[language][key];
                    $element.fadeIn(500);
                });
            }
        }
    })
}

function setButtonStyles(language) {
    if (language === 'pl') {
        $('[data-lang="pl"]').css('fill', '#fff');
        $('[data-lang="pl"]').css('filter', 'drop-shadow(0 0 5px #ffffff85)');
        $('[data-lang="en"]').css('fill', '#b4b4b4');
        $('[data-lang="en"]').css('filter', 'drop-shadow(0 0 5px transparent)');
    } else {
        $('[data-lang="en"]').css('fill', '#fff');
        $('[data-lang="en"]').css('filter', 'drop-shadow(0 0 5px #ffffff85)');
        $('[data-lang="pl"]').css('fill', '#b4b4b4');
        $('[data-lang="pl"]').css('filter', 'drop-shadow(0 0 5px transparent)');
    }
}

function getTranslationWithoutLang(key) {
    if (currentLanguage === 'en') {
        return translations['en'][key];
    } else if (currentLanguage === 'pl') {
        return translations['pl'][key];
    } else {
        return 'Translation for ' + key + ' not found!';
    }
}