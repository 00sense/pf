let currentLanguage = localStorage.getItem('language') || 'en'; 

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
        "instagram-error-content": "Konto Instagram będzie dostępne niedługo",
        "open-client-content-success": "Profil Discord został otwarty, jeśli nie została otwarta aplikacja Discord - skopiuj id i dodaj mnie manualnie!",
        "open-client-content-error": "Profil Discord nie mógł zostać otwarty dlatego, że prawdopodobnie używasz urządzenia mobilnego. Skopiuj id i dodaj mnie manualnie!",
        "manage-animations-off-content": "Pomyślnie wyłączono animacje! Jeśli jednak chcesz wrócić do widoczności animacji, kliknij tą ikonę jeszcze raz!",
        "manage-animations-on-content": "Pomyślnie włączono animacje! W razie problemów z wydajnością lub zawieszaniem się strony wyłącz animacje!",

        "menu": "Menu",
        "home": "Strona główna",
        "skills": "Umiejętności",
        "projects": "Projekty",
        "about-me": "O mnie",
        "contact": "Kontakt & Opinie",
        "language": "Język",
        "created-by-1": "Strona zaprojektowana i stworzona przez",
        "created-by-2": " 0sense",
        "copyright": " • © 2024 Sense - Wszelkie prawa zastrzeżone",
        "read-more": "Dowiedz się więcej",
        "contact-me": "Skontaktuj się!",
        "content-main-text": "Hej! Tu Adrian ツ",
        "content-profession-1": " ",
        "content-profession-2": "Projektant 2D/3D, Montażysta",
        "content-profession-3": "oraz",
        "content-profession-4": "Modyfikator Wizualny Minecraft",
        "content-description": "Grafika to moja pasja, a Minecraft to przestrzeń, w której eksperymentuję i tworzę wizualne cuda. Od 2019 roku rozwijam swoje umiejętności w grafice 2D, a od 2023 roku eksploruję świat 3D. Moje motto? Każdy detal ma znaczenie – precyzja i perfekcja to klucz do sukcesu",
        "skills-main-text": "Umiejętności",
        "skills-skill-category-1": "Projektowanie 3D",
        "skills-skill-category-2": "Projektowanie 2D",
        "skills-skill-category-3": "Montaż/Animacje",
        "skills-skill-category-4": "Programowanie",
        "skills-card-footer-1": "Jestem",
        "skills-card-footer-2": ' "samoukiem"',
        "skills-card-footer-3": "co oznacza, że wszystkie powyższe umiejętności nauczyłem się samodzielnie z doświadczenia, kursów i ciężkiej pracy",
        "carousel-description-1": "UWAGA! ",
        "carousel-description-2": "Niektóre grafiki zostały przygotowane pod konkretne wymiary podane przez klienta! Obrazy mogą mieć słabszą rozdzielczość poprzez dopasowanie do Twojego ekranu!",
        "carousel-scaling-1": "Skalowanie: ",
        "carousel-scaling-2-on": "Włączone",
        "carousel-scaling-2-off": "Wyłączone",
        "projects-main-text": "Projekty",
        "description-usage": "Użyte technologie: ",
        "description-for": "Stworzone dla: ",
        "trust-note-1": "UWAGA! ",
        "trust-note-2": "Nie wszystkie projekty mogą zostać tutaj zaprezentowane. Wynika to z zasad poufności oraz indywidualnych preferencji klientów, którzy cenią sobie dyskrecję i ochronę swoich danych. Szanuję ich zaufanie oraz priorytetowo traktuję kwestie prywatności, dlatego zawsze dostosowuję się do ich wymagań",
        "show-more-projects": "Pokaż więcej projektów",
        "collapse-projects": "Zwiń projekty",
        "aboutme-main-text": "O mnie",
        "aboutme-top-1": "Hej, poznaj mnie!",
        "aboutme-top-2": 'Witaj w moim świecie',
        "aboutme-content-1": "Cześć! Nazywam się Adrian, mam 17 lat i od 5 lat mam okazję tworzyć świat grafiki 2D, a od niedawna także wkraczam w tajniki modelowania 3D. Choć programowanie jeszcze nie jest moją główną pasją, zgłębiam HTML i CSS, aby móc jeszcze lepiej tworzyć kompleksowe projekty. W codziennej pracy korzystam z pakietu Adobe – Photoshop i Illustrator to moje podstawowe narzędzia, ale jeśli chodzi o modele 3D, najczęściej sięgam po Blockbench'a i Blender'a",
        "aboutme-content-2": "W trakcie mojej kariery stworzyłem już wiele różnych projektów, które pozwoliły mi zyskać doświadczenie w różnych dziedzinach. Przykładowo, przygotowywałem banery na platformy streamingowe, zarządzałem grafiką na potrzeby social mediów i tworzyłem część oprawy graficznej dla serwerów Minecraft, zarówno na Discordzie, jak i na samym serwerze. Z wszystkich projektów współpraca z TabMC.pl jest dla mnie szczególnie cenna – to właśnie tam miałem okazję rozwijać swoje umiejętności, stawiać czoła trudnym wyzwaniom i dostarczać rozwiązania, które spotkały się z dużym uznaniem",
        "aboutme-content-3": "Co mnie inspiruje? To po prostu pasja do tworzenia – uwielbiam koncentrować się na detalach i tworzyć rzeczy, które są nie tylko funkcjonalne, ale także estetyczne. Praca nad każdym projektem to dla mnie nie tylko praca, ale też ogromna przyjemność. Poza grafiką rozwijam również swoje prywatne projekty, pluginy do Minecrafta czy projektowanie modeli do druku 3D. Dzięki temu jestem w stanie stale rozwijać swoje umiejętności, zarówno w obszarze grafiki, jak i technologii",
        "aboutme-content-4": "Moje podejście do pracy opiera się na precyzyjności, dbałości o detale i efektywności. Zawsze staram się dostarczać projekty w ustalonym terminie, spełniając oczekiwania klientów. W projekcie ważna jest nie tylko jego jakość, ale także dotrzymywanie terminów i zachowanie pełnej poufności. W każdym zleceniu dbam o to, by osoby, które ze mną współpracują, mogły liczyć na rzetelność i pełne zaangażowanie w realizację ich pomysłów",
        "aboutme-contact-1": "Dziękuję za Twoją uwagę!",
        "aboutme-contact-2": "Zachęcam Cię do kontaktu na ",
        "aboutme-contact-3": "DISCORDZIE, ",
        "aboutme-contact-4": "gdzie możemy omówić szczegóły potencjalnej współpracy lub po prostu wymienić się pomysłami. Jestem otwarty na każdą rozmowę i nowe wyzwania",
        "aboutme-open-profile": "Otwórz profil",
        "aboutme-copy-id": "Skopiuj ID profilu",
        "feedback-main-text": "Kontakt & Opinie",
        "verified-opinion-1": "UWAGA! ",
        "verified-opinion-2": "Opinie poniżej są autentyczne i zweryfikowane. W razie wątpliwości zapraszam do kontaktu na Discordzie. Przypominam, że publikowanie fałszywych opinii zgodnie z art. 286 §1 Kodeksu karnego jest nielegalne",
        "3D-model-view-description-1": "UWAGA! ",
        "3D-model-view-description-2": "Aby wyłączyć automatyczne obracanie modelu, kliknij ikonę obok",
        "swiper-opinion-info-1": "Poznaj odczucia klientów!",
        "swiper-opinion-info-2": "Możesz być jednym z nich, skontaktuj się na",
        "swiper-opinion-info-3": " Discordzie!",

        "o-1-author-desc": "Właściciel & Programista • ",
        "o-1-content": "Współpraca z sense, to była czysta przyjemność. Na palcach jednej ręki mogę policzyć liczbę osób, które tak doskonale rozumiały czego od nich oczekiwałem, czasami nawet bardziej ode mnie. Wiedziałem, że to co Mu zlecę zostanie wykonane najlepiej jak potrafi. Grafiki czy to na discorda czy tekstury na serwer zawsze idealnie trafiały w moje gusta - a w dodatku były ⚡ niesamowicie szybko wykonywane. Z moich ubogich opisów potrafił wyczarować niejedno cudo. Z wielką przyjemnością będę wracał do Sense z kolejnymi zleceniami.",
        "o-2-author-desc": "Właściciel • ",
        "o-2-content": "Polecam serdecznie każdemu! Najlepsza złota rączka!",
        "o-3-author-desc": "Klient • Prywatne",
        "o-3-content": "Serdecznie polecam Adriana! Stworzył dla mnie panele na Twitcha, które przerosły moje oczekiwania. Projekt został wykonany szybko, z dużą dbałością o szczegóły i profesjonalizmem. Widać, że Adrian ma talent, świetne wyczucie estetyki i potrafi dopasować się do potrzeb klienta. Efekt końcowy jest idealny, a współpraca przebiegała bezproblemowo 😊",

        "1_description-name": '"Japońskie sny" - MARKA',
        "1_description-details": 'W projekcie zawarty został "Waiting Screen" oraz 4 banery na Twitcha, stworzone w stylu japońskim oraz inspirowane estetyką anime, zgodnie z życzeniem klientki',

        "2_description-name": '"Zaklęte piksele" - GUI',
        "2_description-details": 'W projekcie zostało zawarte o wiele więcej GUI, niż jest tutaj widoczne. Gui zostało stworzone w stylu prostym i zrozumiałym dla graczy, zgodnie z życzeniem klienta',

        "3_description-name": '"Twoi przyjaciele" - KOSMETYKI 3D',
        "3_description-details": 'W projekcie zostało zawarte o wiele więcej modeli, niż jest tutaj widoczne (więcej modeli wraz z pełną garderobą można zobaczyć w projekcie "PIKSELOWY STYL"). Modele zostały wykonane w stylu przyjaznym dla młodych graczy oraz pełnią fukcję "czapek" w serwerowej garderobie',

        "4_description-name": '"Magia kostek" - RENDERY 3D',
        "4_description-details": 'W projekcie zostały zawarte 3 rendery skinów Minecraft stworzone w programie Blender. Stworzone modele pozwoliły mi na realizację projektu "PIĘKNO ROBOTÓW". Zgodnie z oczekiwaniami klienta modele posiadają wypukłe punkty np. włosy, które przy dobrej grze światłem robią świetny efekt',
    
        "5_description-name": '"Piękno robotów" - BOT DISCORD',
        "5_description-details": 'W projekcie zostały zawarte 2 banery, jeden do profilowego baneru bota, drugi znalazł zastosowanie w wiadomościach wysyłanych przez bota jako "Embed Image". Zgodnie z wymaganiami klienta banery są animowane i zawierają kluczowe elementy, takie jak logo serwera lub rendery skinów właścicieli',
    
        "6_description-name": '"STYL WIEDZY" - INFOGRAFIKA',
        "6_description-details": 'W projekcie zostało zawarte o wiele więcej grafik, niż jest tutaj widoczne. Grafiki były tworzone w różnych stylach pasujących do treści ogłoszenia lub informacji, zgodnie z oczekiwaniami klienta',

        "7_description-name": '"ULOTNE WIZJE" - BANERY DISCORD',
        "7_description-details": 'W projekcie zostało zawarte więcej Banerów, niż jest tutaj widoczne. Grafiki były używane jako "banery" serwera Discord. Były tworzone w różnych wariantach ale trzymając się podobnego stylu, zgodnie z wymaganiami klienta',

        "8_description-name": '"PIKSELOWY STYL" - GARDEROBA',
        "8_description-details": 'W projekcie zostały zawarte 3 GUI oraz duża ilość kosmetyków do serwerowej garderoby, którą zapewnia plugin CosmeticsCore. Interfejs garderoby z góry jest narzucony przez plugin, aczkolwiek styl grafiki był dowolny. Wszystkie kosmetyki wewnątrz (oprócz domyślnych) wykonałem samodzielnie przy pomocy programu Blockbench i wstępnych pomysłów klienta',

        "9_description-name": '"KWADRATOWY FILM" - TRAILER',
        "9_description-details": 'W projekcie został pokazany serwer TabMC.pl od najlepszej możliwej strony, zgodnie z wymaganiami klienta zostały tam pokazane wszystkie aktualnie istniejące tryby',

        "10_description-name": '"DAWKA DOPAMINY" - TIKTOK',
        "10_description-details": 'W projekcie zostało zawarte o wiele więcej filmików niż jest tutaj widoczne. TikToki miały na celu zatrzymanie uwagi widza (szczególnie w pierwszych 3 sekundach) oraz były przygotowane zgodnie z wytycznymi klienta, co pokazuje prosty styl montażu oraz płynne ujęcia',

        "11_description-name": '"MOCNA REKLAMA" - WSTAWKA',
        "11_description-details": 'W projekcie zawarte zostały dwie wstawki na streamy (Cały serwer oraz GenCash). Wstawka jest schludna i animowana, nie zawiera zbędnych dodatków, zgodnie z wytycznymi klienta',
    },

    "en": {
        "notification-success": "Success!",
        "notification-error": "An error occurred!",

        "change-language-error": "Hey! You've been trying to change the language to the one you currently have selected for a few times! Try choosing a different one, if you're having trouble with that contact us on Discord ツ",
        "copy-id-content-error": "The text could not be copied, the error occurred: ",
        "copy-id-content-success": "Discord profile ID successfully copied to your clipboard! Now you can paste it in the space for adding a friend or anywhere else you want!",
        "copy-mail-content-error": "The text could not be copied, the error occurred: ",
        "copy-mail-content-success": "My email has been successfully copied to your clipboard! Talk to you soon!",
        "instagram-error-content": "An Instagram account will be available soon",
        "open-client-content-success": "The Discord profile has been opened. If the Discord app didn't launch, copy the ID and add me manually!",
        "open-client-content-error": "The Discord profile could not be opened because you are likely using a mobile device. Please copy the ID and add me manually!",
        "manage-animations-off-content": "Animations have been successfully turned off! However, if you'd like to return to viewing animations, click this icon again!",
        "manage-animations-on-content": "Animations have been successfully turned on! If you experience performance issues or page freezes, please disable animations!",

        "menu": "Menu",
        "home": "Home",
        "skills": "Skills",
        "projects": "Projects",
        "about-me": "About me",
        "contact": "Contact & Feedback",
        "language": "Language",
        "created-by-1": "Website designed and created by",
        "created-by-2": " 0sense",
        "copyright": " • © 2024 Sense - All rights reserved",
        "read-more": "Read more",
        "contact-me": "Get in touch!",
        "content-main-text": "I'm Adrian ツ",
        "content-profession-1": "I'm ",
        "content-profession-2": "2D/3D Designer, Editor",
        "content-profession-3": "and",
        "content-profession-4": "Minecraft Modder",
        "content-description": "Graphics are my passion, and Minecraft is the space where I experiment and create visual wonders. Since 2019, I've been honing my skills in 2D graphics, and since 2023, I've been exploring the world of 3D. My motto? Every detail matters - precision and perfection are the keys to success",
        "skills-main-text": "Skills",
        "skills-skill-category-1": "3D Design",
        "skills-skill-category-2": "2D Design",
        "skills-skill-category-3": "Editing/Animating",
        "skills-skill-category-4": "Programming",
        "skills-card-footer-1": "I'm",
        "skills-card-footer-2": ' "self-taught"',
        "skills-card-footer-3": "which means I acquired all the skills mentioned above through self-study, experience, and hard work",
        "carousel-description-1": "NOTE!",
        "carousel-description-2": " Some graphics have been prepared to specific dimensions provided by the customer! Images may have lower resolution due to adjustment to your screen!",
        "carousel-scaling-1": "Scaling: ",
        "carousel-scaling-2-on": "Enabled",
        "carousel-scaling-2-off": "Disabled",
        "projects-main-text": "Projects",
        "description-usage": "Used technologies: ",
        "description-for": "Created for: ",
        "trust-note-1": "NOTICE! ",
        "trust-note-2": "Not all projects can be showcased here. This is due to confidentiality agreements and the individual preferences of clients who value discretion and the protection of their data. I respect their trust and prioritize privacy, always adapting to their requirements",
        "show-more-projects": "Show more projects",
        "collapse-projects": "Collapse projects",
        "aboutme-main-text": "About me",
        "aboutme-top-1": "Hi, get to know me!",
        "aboutme-top-2": "Welcome to my world",
        "aboutme-content-1": "Hello! My name is Adrian, I'm 17 years old, and for the past 5 years, I've had the opportunity to immerse myself in the world of 2D graphics, and recently, I have also started exploring 3D modeling. While programming is not yet my main passion, I am learning HTML and CSS to be able to create more comprehensive projects. In my daily work, I use the Adobe suite – Photoshop and Illustrator are my primary tools, but when it comes to 3D models, I often turn to Blockbench and Blender",
        "aboutme-content-2": "Throughout my career, I have created a variety of projects that have allowed me to gain experience in different areas. For example, I have designed banners for streaming platforms, managed social media graphics, and created part of the graphic design for Minecraft servers, both on Discord and on the server itself. Of all the projects, my collaboration with TabMC.pl is particularly valuable to me – it was there that I had the opportunity to develop my skills, face difficult challenges, and provide solutions that were highly appreciated",
        "aboutme-content-3": "What inspires me? It's simply my passion for creating – I love focusing on details and crafting things that are not only functional but also aesthetically pleasing. Working on each project is not just work for me, but a great pleasure. Apart from graphic design, I also develop my private projects, such as Minecraft plugins or designing 3D printable models. This allows me to constantly improve my skills, both in the graphic and technological fields",
        "aboutme-content-4": "My approach to work is based on precision, attention to detail, and efficiency. I always strive to deliver projects on time, meeting the client's expectations. In a project, quality is not the only important factor; meeting deadlines and ensuring complete confidentiality are equally essential. With every project, I make sure that those I work with can rely on my professionalism and full commitment to bringing their ideas to life",
        "aboutme-contact-1": "Thank you for your attention!",
        "aboutme-contact-2": "I encourage you to reach out on ",
        "aboutme-contact-3": "DISCORD, ",
        "aboutme-contact-4": "where we can discuss the details of potential collaboration or simply exchange ideas. I am open to any conversation and new challenges",
        "aboutme-open-profile": "Open profile",
        "aboutme-copy-id": "Copy profile ID",
        "feedback-main-text": "Contact & Feedback",
        "verified-opinion-1": "NOTICE! ",
        "verified-opinion-2": "The opinions below are authentic and verified. If you have any doubts, feel free to contact me on Discord. Please note that posting fake reviews is illegal under Article 286 §1 of the Penal Code.",
        "3D-model-view-description-1": "NOTICE! ",
        "3D-model-view-description-2": "To disable automatic model rotation, click the icon next to it",
        "swiper-opinion-info-1": "Discover clients' feedback!",
        "swiper-opinion-info-2": "You could be one of them, get in touch on",
        "swiper-opinion-info-3": " Discord!",

        "o-1-author-desc": "Owner & Developer • ",
        "o-1-content": "Working with Sense was an absolute pleasure. I can count on one hand the number of people who so perfectly understood what I expected from them, sometimes even more than I did. I knew that whatever I assigned to him would be done to the best of his ability. Graphics, whether for Discord or textures for a server, always perfectly matched my tastes - and were ⚡ delivered incredibly quickly. From my vague descriptions, he was able to create true wonders. I will be more than happy to return to Sense with new commissions.",
        "o-2-author-desc": "Owner • ",
        "o-2-content": "I highly recommend him to everyone! The best jack-of-all-trades!",
        "o-3-author-desc": "Client • Private",
        "o-3-content": "I highly recommend Adrian! He created Twitch panels for me that exceeded my expectations. The project was completed quickly, with great attention to detail and professionalism. It’s clear that Adrian has talent, a fantastic sense of aesthetics, and the ability to adapt to the client’s needs. The final result is perfect, and the cooperation was seamless 😊",

        "1_description-name": '"Japanese Dreams" - BRAND',
        "1_description-details": 'The project included a "Waiting Screen" and 4 Twitch banners, designed in a Japanese style and inspired by anime aesthetics, as per the client\'s request.',
    
        "2_description-name": '"Enchanted Pixels" - GUI',
        "2_description-details": 'The project contained many more GUI elements than are visible here. The GUI was designed in a simple and user-friendly style for players, as per the client\'s request.',
    
        "3_description-name": '"Your Friends" - 3D COSMETICS',
        "3_description-details": 'The project included many more models than are visible here (additional models and a full wardrobe can be found in the project "PIXEL STYLE"). The models were created in a style friendly for young players and serve as "hats" in the server\'s wardrobe.',
    
        "4_description-name": '"Magic Cubes" - 3D RENDERS',
        "4_description-details": 'The project included 3 Minecraft skin renders created in Blender. These models enabled the realization of the project "THE BEAUTY OF ROBOTS". As per the client\'s expectations, the models feature raised details like hair, which create a stunning effect with proper lighting.',
    
        "5_description-name": '"The Beauty of Robots" - DISCORD BOT',
        "5_description-details": 'The project included 2 banners: one as a profile banner for the bot, and another used in messages sent by the bot as an "Embed Image". As per the client\'s requirements, the banners are animated and include key elements such as the server logo or renders of the owners\' skins.',
    
        "6_description-name": '"THE STYLE OF KNOWLEDGE" - INFOGRAPHICS',
        "6_description-details": 'The project included many more graphics than are visible here. The graphics were created in various styles matching the content of announcements or information, as per the client\'s expectations.',
    
        "7_description-name": '"FLEETING VISIONS" - DISCORD BANNERS',
        "7_description-details": 'The project included more banners than are visible here. The graphics were used as "banners" for a Discord server. They were created in various versions while maintaining a similar style, as per the client\'s requirements.',
    
        "8_description-name": '"PIXEL STYLE" - WARDROBE',
        "8_description-details": 'The project included 3 GUI elements and a large number of cosmetics for the server\'s wardrobe, powered by the CosmeticsCore plugin. The wardrobe interface is predefined by the plugin, but the graphic style was freely designed. All cosmetics inside (except the defaults) were created by me using Blockbench and the client\'s initial ideas.',
    
        "9_description-name": '"SQUARE MOVIE" - TRAILER',
        "9_description-details": 'The project showcased the TabMC.pl server in the best possible way. As per the client\'s requirements, all currently available game modes were presented.',
    
        "10_description-name": '"DOSE OF DOPAMINE" - TIKTOK',
        "10_description-details": 'The project included many more videos than are visible here. The TikToks aimed to capture the viewer\'s attention (especially in the first 3 seconds) and were prepared according to the client\'s guidelines, featuring a simple editing style and smooth shots.',
    
        "11_description-name": '"STRONG PROMOTION" - STREAM INSERT',
        "11_description-details": 'The project included two inserts for streams (the entire server and GenCash). The insert is neat and animated, without unnecessary elements, as per the client\'s instructions.'
    }
};

$(document).ready(function() {
        // Rok-Miesiac-Dzien
        const startDate = new Date("2023-09"); // Projektowanie 3D
        const startDate2 = new Date("2019-02"); // Projektowanie 2D
        const startDate3 = new Date("2022-06"); // Montaż/Animacje
        const startDate4 = new Date("2023-01"); // Programowanie
        const endDate = new Date(); 
    
        const diffInMs = endDate - startDate;
        const diffInMs2 = endDate - startDate2;
        const diffInMs3 = endDate - startDate3;
        const diffInMs4 = endDate - startDate4;
    
        const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
        const years2 = Math.floor(diffInMs2 / (1000 * 60 * 60 * 24 * 365.25));
        const months2 = Math.floor((diffInMs2 % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
        const years3 = Math.floor(diffInMs3 / (1000 * 60 * 60 * 24 * 365.25));
        const months3 = Math.floor((diffInMs3 % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
        const years4 = Math.floor(diffInMs4 / (1000 * 60 * 60 * 24 * 365.25));
        const months4 = Math.floor((diffInMs4 % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
        resultDate1PL = formatTimePl(years, months);
        resultDate1EN = formatTimeEn(years, months);
        resultDate2PL = formatTimePl(years2, months2);
        resultDate2EN = formatTimeEn(years2, months2);
        resultDate3PL = formatTimePl(years3, months3);
        resultDate3EN = formatTimeEn(years3, months3);
        resultDate4PL = formatTimePl(years4, months4);
        resultDate4EN = formatTimeEn(years4, months4);
    
        updateDateTranslations();
        setLanguageOnLoad();
    
        let errorCount = 0;
        $("svg[data-lang]").on("click", function () {
            const selectedLanguage = $(this).data("lang");
    
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

    if ($('#scaling-info').hasClass('scale-off')) {
        $('#scaling-info').text(getTranslationWithoutLang('carousel-scaling-2-off'));
    } else {
        $('#scaling-info').text(getTranslationWithoutLang('carousel-scaling-2-on'));
    }

    if ($("#projects-container").hasClass("hidden")) {
        $("#show-more").text(getTranslationWithoutLang("collapse-projects"));
    } else {
        $("#show-more").text(getTranslationWithoutLang("show-more-projects"));
    }
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

function formatTimePl(years, months) {
    const yearText = years === 1 ? "rok" : years > 1 && years < 5 ? "lata" : "lat";
    const monthText = months === 1 ? "miesiąc" : months > 1 && months < 5 ? "miesiące" : "miesięcy";
    return `${years} ${yearText}, ${months} ${monthText}`;
}

function formatTimeEn(years, months) {
    const yearText = years === 1 ? "year" : "years";
    const monthText = months === 1 ? "month" : "months";
    return `${years} ${yearText}, ${months} ${monthText}`;
}

function updateDateTranslations() {
    translations["pl"]["skills-skill-since-1"] = "Od 2023 roku (" + resultDate1PL + ")";
    translations["en"]["skills-skill-since-1"] = "Since 2023 (" + resultDate1EN + ")";

    translations["pl"]["skills-skill-since-2"] = "Od 2019 roku (" + resultDate2PL + ")";
    translations["en"]["skills-skill-since-2"] = "Since 2019 (" + resultDate2EN + ")";

    translations["pl"]["skills-skill-since-3"] = "Od 2022 roku (" + resultDate3PL + ")";
    translations["en"]["skills-skill-since-3"] = "Since 2022 (" + resultDate3EN + ")";

    translations["pl"]["skills-skill-since-4"] = "Od 2023 roku (" + resultDate4PL + ")";
    translations["en"]["skills-skill-since-4"] = "Since 2023 (" + resultDate4EN + ")";
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
