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
        "info-bar-3": "Ptaszki ćwierkały, że niedługo mocna promocja!",
        "info-bar-4": "Wyłącz/Włącz widoczność informacji o Spotify (Kliknij ponownie)",

        "menu": "Menu",
        "home": "Strona główna",
        "skills": "Umiejętności",
        "projects": "Projekty",
        "about-me": "O mnie",
        "contact": "Kontakt & Opinie",
        "language": "Język",
        "created-by-1": "Strona w całości stworzona i zaprojektowana przez",
        "created-by-2": " sensee",
        "copyright": " • © 2024 Sensee - Wszelkie prawa zastrzeżone",
        "read-more": "Dowiedz się więcej",
        "contact-me": "Skontaktuj się!",
        "content-main-text": "Hejka! To ja! ツ",
        "content-profession-1": " ",
        "content-profession-2": "Projektant 2D/3D, Animator",
        "content-profession-3": "oraz",
        "content-profession-4": "Modyfikator Wizualny Minecraft",
        "content-description": "Grafika to moja pasja, a Minecraft to przestrzeń, w której eksperymentuję i tworzę wizualne cuda. Od 2019 roku rozwijam swoje umiejętności w grafice 2D, a od 2023 roku eksploruję świat 3D. Moje motto? Każdy detal ma znaczenie – precyzja i perfekcja to klucz do sukcesu",
        "skills-main-text": "Umiejętności",
        "skills-skill-category-1": "Projektowanie 3D",
        "skills-skill-category-2": "Projektowanie 2D",
        "skills-skill-category-3": "Animacje",
        "skills-skill-category-4": "MINECRAFT TXT",
        "skills-card-footer-1": "Jestem",
        "skills-card-footer-2": ' "samoukiem"',
        "skills-card-footer-3": "co oznacza, że wszystkie powyższe umiejętności nauczyłem się samodzielnie z doświadczenia, kursów i ciężkiej pracy",
        "carousel-description-1": "UWAGA! ",
        "carousel-description-2": "Niektóre grafiki zostały przygotowane pod konkretne wymiary podane przez klienta! Obrazy mogą mieć słabszą rozdzielczość poprzez dopasowanie do Twojego ekranu!",
        "carousel-scaling-1": "Powiększanie (przy modelu 3D nieaktywne): ",
        "carousel-scaling-2-on": "Włączone",
        "carousel-scaling-2-off": "Wyłączone",
        "projects-main-text": "Projekty",
        "description-usage": "Technologie: ",
        "trust-note-1": "UWAGA! ",
        "trust-note-2": "Nie wszystkie projekty mogą zostać tutaj zaprezentowane. Wynika to z zasad poufności oraz indywidualnych preferencji klientów, którzy cenią sobie dyskrecję i ochronę swoich danych. Szanuję ich zaufanie oraz priorytetowo traktuję kwestie prywatności, dlatego zawsze dostosowuję się do ich wymagań",
        "show-more-projects": "Pokaż więcej projektów",
        "collapse-projects": "Zwiń projekty",
        "aboutme-main-text": "O mnie",
        "aboutme-top-1": "Hej, poznaj mnie!",
        "aboutme-top-2": 'Witaj w moim świecie',
        "aboutme-content-1": "Cześć! Mam 18 lat i od 6 lat mam okazję tworzyć świat grafiki 2D, a od niedawna także wkraczam w tajniki modelowania 3D. Choć programowanie jeszcze nie jest moją główną pasją, zgłębiam HTML i CSS, aby móc jeszcze lepiej tworzyć kompleksowe projekty. W codziennej pracy korzystam z pakietu Adobe – Photoshop i Illustrator to moje podstawowe narzędzia, ale jeśli chodzi o modele 3D, najczęściej sięgam po Blockbench'a i Blender'a",
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
        "swiper-opinion-info-1": `Poznaj odczucia ${liczbaOpini} klientów!`,
        "swiper-opinion-info-2": "Możesz być jednym z nich, skontaktuj się na",
        "swiper-opinion-info-3": " Discordzie!",
        "spotify-track": "Odtwórz na spotify",

        "feedback-o-screen": "Zrzut ekranu wystawionej opinii",

        "o-1-author-desc": "Właściciel & Programista • ",
        "o-1-content": "Współpraca z sense, to była czysta przyjemność. Na palcach jednej ręki mogę policzyć liczbę osób, które tak doskonale rozumiały czego od nich oczekiwałem, czasami nawet bardziej ode mnie. Wiedziałem, że to co Mu zlecę zostanie wykonane najlepiej jak potrafi. Grafiki czy to na discorda czy tekstury na serwer zawsze idealnie trafiały w moje gusta - a w dodatku były ⚡ niesamowicie szybko wykonywane. Z moich ubogich opisów potrafił wyczarować niejedno cudo. Z wielką przyjemnością będę wracał do Sense z kolejnymi zleceniami.",
        "o-2-author-desc": "Właściciel • ",
        "o-2-content": "Polecam serdecznie każdemu! Najlepsza złota rączka!",
        "o-3-author-desc": "Klient • Prywatne",
        "o-3-content": "Serdecznie polecam! Stworzył dla mnie panele na Twitcha, które przerosły moje oczekiwania. Projekt został wykonany szybko, z dużą dbałością o szczegóły i profesjonalizmem. Widać talent, świetne wyczucie estetyki i umiejętność dopasowania się do potrzeb klienta. Efekt końcowy jest idealny, a współpraca przebiegała bezproblemowo 😊",
        "o-4-author-desc": "Klient • Prywatne",
        "o-4-content": "Wszystko legit zajebiste itemki i gui ❤️ Szybko zrealizowane dosłownie 1 dzień oczekiwania polecam",
        "o-5-author-desc": "Klient • Prywatne",
        "o-5-content": "Polecam, szybko i nawet tanio zrobił ❤️",
        "o-6-author-desc": "Klient • Prywatne",
        "o-6-content": "Zajebista robota, szybko, tanio i kurwa przepięknie 😎",
        "o-7-author-desc": "Klient • Prywatne",
        "o-7-content": "Mega fajne modele 3d, polecam. Na pewno będę częstym klientem 🙂",
        "o-8-author-desc": "Klient • Prywatne",
        "o-8-content": "Zajebista robota ❤️ kolega wie co i jak 🙂 Najszybszy czas realizacji mega polecam praca warta swojej ceny",
        "o-9-author-desc": "Klient • Prywatne",
        "o-9-content": "Legit, polecam i to bardzo. Bardzo dobre podejście do klienta i szybki czas wykonania",
        "o-10-author-desc": "Klient • Prywatne",
        "o-10-content": "Szybko ogarniety temat, polecam",
        "o-11-author-desc": "Klient • Prywatne",
        "o-11-content": "Legit. Ładna tekstura polecam",
        "o-12-author-desc": "Klient • Prywatne",
        "o-12-content": "Polecam szybko i piekne",
        "o-13-author-desc": "Klient • Prywatne",
        "o-13-content": "Ekspresowy kontakt, super wykonanie i pełne zrozumienie wizji oraz profesjonalizm. Wszystko poszło sprawnie i bezproblemowo. Zdecydowanie bardzo polecam! 🔥🔥",
        "o-14-author-desc": "Klient • Prywatne",
        "o-14-content": "10/10, Mega",
        "o-15-author-desc": "Klient • Prywatne",
        "o-15-content": "Legit Custom Texturki do itemków, szybko, ładnie i z pomocą ❤️",
        "o-16-author-desc": "Klient • Prywatne",
        "o-16-content": "Polecam serdecznie każdemu! Szybko, tanio i bardzo dokładna robota daje mu 5 gwiazdek! 😊",

        "1_description-name": 'GUI MINECRAFT',
        "1_description-details": 'GUI w Minecraft to po prostu wszystkie graficzne elementy, które pozwalają Ci łatwo korzystać z różnych funkcji gry. To ekwipunek, menu, crafting czy nawet okno handlu z wieśniakami – wszystko, co sprawia, że gra staje się wygodniejsza i bardziej intuicyjna',

        "2_description-name": 'RENDERY 3D SKINÓW MINECRAFT',
        "2_description-details": 'Rendery skinów Minecraft to po prostu graficzne przedstawienie skórki gracza w 3D. Zamiast patrzeć na skórkę tylko w widoku 2D, rendery pokazują ją z różnych kątów, w pełnej trójwymiarowej formie, co daje lepszy wgląd w detale i wygląd całej postaci w grze',

        "3_description-name": 'MODELE 3D MINECRAFT',
        "3_description-details": 'Modele 3D bloków, przedmiotów i kosmetyków w Minecraft to świetne urozmaicenie podstawowego Minecrafta. Zamiast płaskich tekstur, te modele pokazują je w pełnej trójwymiarowej formie, co pozwala na bardziej szczegółowe i realistyczne przedstawienie elementów w grze',
    
        "4_description-name": 'OPRAWA GRAFICZNA DISCORDA',
        "4_description-details": 'Oprawa graficzna Discorda to wszystkie wizualne elementy, które nadają serwerowi unikalny wygląd. To banery, ikony, grafiki do ogłoszeń, czy inne projekty graficzne, które pomagają wyróżnić serwer i nadają mu charakter. Dzięki odpowiedniej oprawie graficznej, serwer staje się bardziej przyjazny i estetyczny',
    
        "5_description-name": 'DODATKI MINECRAFT',
        "5_description-details": 'Dodatki minecraft to nic innego jak wzbogacenia serwerów Minecraft w customowe dzieła. Ikony do rang, customowe itemy, i wiele wiele więcej. Minecraft nie ma ograniczeń jeśli chodzi o grafiki zawarte jako tekst (Font-Images), a to wszystko powstaje dzięki pluginowi ItemsAdder, w którym się specjalizuje',

        "6_description-name": 'INNE PROJEKTY',
        "6_description-details": 'Inne projekty to wszelkie dodatkowe prace graficzne, animacje i inne rzeczy, które nie mieszczą się w podstawowych kategoriach, ale są równie ważne. Mogą to być różne grafiki, banery promujące wydarzenia, reklamy, ilustracje na strony internetowe czy media społecznościowe',
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
        "info-bar-3": "The birds were chirping that a huge sale is coming soon!",
        "info-bar-4": "Enable/Disable visibility of Spotify information (Click again)",

        "menu": "Menu",
        "home": "Home",
        "skills": "Skills",
        "projects": "Projects",
        "about-me": "About me",
        "contact": "Contact & Feedback",
        "language": "Language",
        "created-by-1": "A website entirely created and designed by",
        "created-by-2": " sensee",
        "copyright": " • © 2024 Sensee - All rights reserved",
        "read-more": "Read more",
        "contact-me": "Get in touch!",
        "content-main-text": "Hi! It's me! ツ",
        "content-profession-1": "I'm ",
        "content-profession-2": "2D/3D Designer, Animator",
        "content-profession-3": "and",
        "content-profession-4": "Minecraft Modder",
        "content-description": "Graphics are my passion, and Minecraft is the space where I experiment and create visual wonders. Since 2019, I've been honing my skills in 2D graphics, and since 2023, I've been exploring the world of 3D. My motto? Every detail matters - precision and perfection are the keys to success",
        "skills-main-text": "Skills",
        "skills-skill-category-1": "3D Design",
        "skills-skill-category-2": "2D Design",
        "skills-skill-category-3": "Animating",
        "skills-skill-category-4": "Programming",
        "skills-card-footer-1": "I'm",
        "skills-card-footer-2": ' "self-taught"',
        "skills-card-footer-3": "which means I acquired all the skills mentioned above through self-study, experience, and hard work",
        "carousel-description-1": "NOTE!",
        "carousel-description-2": " Some graphics have been prepared to specific dimensions provided by the customer! Images may have lower resolution due to adjustment to your screen!",
        "carousel-scaling-1": "Zooming (inactive for 3D models): ",
        "carousel-scaling-2-on": "Enabled",
        "carousel-scaling-2-off": "Disabled",
        "projects-main-text": "Projects",
        "description-usage": "Technologies: ",
        "trust-note-1": "NOTICE! ",
        "trust-note-2": "Not all projects can be showcased here. This is due to confidentiality agreements and the individual preferences of clients who value discretion and the protection of their data. I respect their trust and prioritize privacy, always adapting to their requirements",
        "show-more-projects": "Show more projects",
        "collapse-projects": "Collapse projects",
        "aboutme-main-text": "About me",
        "aboutme-top-1": "Hi, get to know me!",
        "aboutme-top-2": "Welcome to my world",
        "aboutme-content-1": "Hello! I'm 18 years old, and for the past 6 years, I've had the opportunity to immerse myself in the world of 2D graphics, and recently, I have also started exploring 3D modeling. While programming is not yet my main passion, I am learning HTML and CSS to be able to create more comprehensive projects. In my daily work, I use the Adobe suite – Photoshop and Illustrator are my primary tools, but when it comes to 3D models, I often turn to Blockbench and Blender",
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
        "swiper-opinion-info-1": `Discover ${liczbaOpini} clients' feedback!`,
        "swiper-opinion-info-2": "You could be one of them, get in touch on",
        "swiper-opinion-info-3": " Discord!",
        "spotify-track": "Listen on spotify",

        "feedback-o-screen": "Screenshot of the posted review",

        "o-1-author-desc": "Owner & Developer • ",
        "o-1-content": "Working with Sense was an absolute pleasure. I can count on one hand the number of people who so perfectly understood what I expected from them, sometimes even more than I did. I knew that whatever I assigned to him would be done to the best of his ability. Graphics, whether for Discord or textures for a server, always perfectly matched my tastes - and were ⚡ delivered incredibly quickly. From my vague descriptions, he was able to create true wonders. I will be more than happy to return to Sense with new commissions.",
        "o-2-author-desc": "Owner • ",
        "o-2-content": "I highly recommend him to everyone! The best jack-of-all-trades!",
        "o-3-author-desc": "Client • Private",
        "o-3-content": "I highly recommend him! He created Twitch panels for me that exceeded my expectations. The project was completed quickly, with great attention to detail and professionalism. It’s clear that he has talent, a fantastic sense of aesthetics, and the ability to adapt to the client’s needs. The final result is perfect, and the cooperation was seamless 😊",
        "o-4-author-desc": "Client • Private",
        "o-4-content": "Everything legit, awesome items and GUI ❤️ Completed super quickly, literally just 1 day of waiting – highly recommend!",
        "o-5-author-desc": "Client • Private",
        "o-5-content": "I recommend it, it was done quickly and even cheaply ❤️",
        "o-6-author-desc": "Client • Private",
        "o-6-content": "Awesome job, fast, cheap, and freaking beautiful 😎",
        "o-7-author-desc": "Client • Private",
        "o-7-content": "Super cool 3D models, highly recommend. I will definitely be a frequent customer 🙂",
        "o-8-author-desc": "Client • Private",
        "o-8-content": "Awesome job ❤️ The guy knows what's what 🙂 Fastest delivery time, highly recommended, work worth every penny!",
        "o-9-author-desc": "Client • Private",
        "o-9-content": "Legit, highly recommend it. Very professional approach to the client and quick turnaround time",
        "o-10-author-desc": "Client • Private",
        "o-10-content": "The topic was covered quickly, I recommend it",
        "o-11-author-desc": "Client • Private",
        "o-11-content": "Legit. Nice texture, highly recommend",
        "o-12-author-desc": "Client • Private",
        "o-12-content": "I recommend, fast and very nice",
        "o-13-author-desc": "Client • Private",
        "o-13-content": "Express contact, great execution and full understanding of the vision and professionalism. Everything went smoothly and without problems. I definitely recommend! 🔥🔥",
        "o-14-author-desc": "Client • Private",
        "o-14-content": "10/10, Mega",
        "o-15-author-desc": "Client • Private",
        "o-15-content": "Legit Custom Textures for items, fast, nice and helpful ❤️",
        "o-16-author-desc": "Client • Private",
        "o-16-content": "I highly recommend him to everyone! Fast, affordable, and very thorough. 5 stars! 😊",

        "1_description-name": "MINECRAFT GUI",
        "1_description-details": "Minecraft GUI is simply all the graphical elements that allow you to easily interact with various game features. It includes the inventory, menu, crafting, or even the trading window with villagers – everything that makes the game more convenient and intuitive",

        "2_description-name": "MINECRAFT SKIN 3D RENDERS",
        "2_description-details": "Minecraft skin renders are simply 3D graphical representations of the player's skin. Instead of viewing the skin only in 2D, renders show it from different angles in full 3D, giving a better insight into the details and the overall look of the character in the game",

        "3_description-name": "MINECRAFT 3D MODELS",
        "3_description-details": "3D models of blocks, items, and cosmetics in Minecraft add a great touch to the base game. Instead of flat textures, these models show them in full 3D, allowing for more detailed and realistic representations of in-game elements",

        "4_description-name": "DISCORD GRAPHIC DESIGN",
        "4_description-details": "Discord graphic design refers to all the visual elements that give a server its unique appearance. This includes banners, icons, graphics for announcements, and other design projects that help distinguish the server and give it character. With the right graphic design, the server becomes more inviting and aesthetically pleasing",

        "5_description-name": "MINECRAFT ADDONS",
        "5_description-details": "Minecraft add-ons are nothing more than custom content for Minecraft servers. Icons for ranks, custom items, and much more. Minecraft has no limits when it comes to graphics included as text (Font-Images), and all of this is created thanks to the ItemsAdder plugin, which specializes in",

        "6_description-name": "OTHER PROJECTS",
        "6_description-details": "Other projects include any additional graphic design work, animations, and other items that don't fit into the core categories but are equally important. These can include various graphics, event banners, advertisements, and illustrations for websites or social media",
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
