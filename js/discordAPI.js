const userId = "744981493159559308";
let lastAvatarHash = null;

async function fetchStatus() {
    try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();
    
    if (data.success) {
            const user = data.data.discord_user;
            const avatarHash = user.avatar;
            const ext = avatarHash.startsWith("a_") ? "gif" : "png";
            const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${avatarHash}.${ext}?size=1024`;

            const img = document.querySelector("#content-card-image img");
            const img2 = document.querySelector("#text-content-main img");
            const img3 = document.querySelector(".profilowe img");
            if (img) {
                img.src = avatarUrl;
            }
            if (img2) {
                img2.src = avatarUrl;
            }

            if (img3) {
                updateCircularAvatar(img3, avatarUrl, avatarHash);
            }


        // Ustawianie statusu, wlaczanie/wylaczanie przycisku
        const status = data.data.discord_status;
        if (status == "offline") {
            effectsElement = document.querySelectorAll('#info-bar-status[value="1"]');
            const infoBarItem = document.querySelector('#info-bar-item[onclick="infoBarAction(\'1\')"]');
            const infoBarStatus = document.querySelector('#info-bar-status[value="1"]');
            
            effectsElement.forEach((el) => {
                el.className = "";
                el.classList.add("offline");
            });
            if (infoBarItem && infoBarStatus && infoBarStatus.classList.contains('offline')) {
                infoBarItem.style.cursor = 'default';
                infoBarItem.style.pointerEvents = 'none';
            }
        } else {
            effectsElement = document.querySelectorAll('#info-bar-status[value="1"]');
            const infoBarItem = document.querySelector('#info-bar-item[onclick="infoBarAction(\'1\')"]');
            const infoBarStatus = document.querySelector('#info-bar-status[value="1"]');
            effectsElement.forEach((el) => {
                el.className = "";
                el.classList.add("enable");
            });
            if (infoBarItem && infoBarStatus && infoBarStatus.classList.contains('enable')) {
                infoBarItem.style.cursor = 'pointer';
                infoBarItem.style.pointerEvents = 'unset';
            }
        }

        const isListeningToSpotify = data.data.listening_to_spotify;

        if (isListeningToSpotify) {

            // Sprawdzanie czy moze sie wyswietlic
            if (document.querySelector('#info-bar-status[value="4"]').classList.contains('disable')) {
                return;
            }
            if (document.querySelector('#projects-project-view-3D').style.display !== "none") {
                return;
            }
            if (document.querySelector('#projects-project-view').style.display !== "none") {
                return;
            }
            if (document.querySelector('#navbar-mid-mobile-menu-table').style.display !== "none") {
                return;
            }

            // Wlaczenie przycisku
            effectsElement = document.querySelectorAll('#info-bar-status[value="4"]');
            effectsElement.forEach((el) => {
                el.className = "";
                el.classList.add("enable");
            });

            document.querySelector("#spotify-info").style.display = "flex";
            
            // Pobranie danych
            const song = data.data.spotify.song;
            let artist = data.data.spotify.artist;
            const albumArtUrl = data.data.spotify.album_art_url;
            const startTimestamp = data.data.spotify.timestamps.start;
            const endTimestamp = data.data.spotify.timestamps.end;
            const backgroundImage = document.querySelector("#spotify-img img");
            backgroundImage.src = albumArtUrl;

            // Animacja ruchomych artystów jeśli wiecej niz 20 znakow
            const spanElement1 = document.querySelector('#spotify-artist-span1');
            const spanElement2 = document.querySelector('#spotify-artist-span2');

            artist = artist.replace(/;/g, ',');

            document.querySelector("#spotify-title").innerHTML = song;
            spanElement1.innerHTML = artist;

            function isWindowReallyActive() {
                return !document.hidden && document.hasFocus() && window.outerHeight > 0 && window.screenY > -10000;
            }

            function updateArtistDisplay() {
                if (isWindowReallyActive() && artist.length > 21) {
                    spanElement2.innerHTML = artist;
                    spanElement1.classList.add('active');
                    spanElement2.classList.add('active');
                    spanElement2.style.display = "block";
                } else {
                    spanElement1.classList.remove('active');
                    spanElement2.classList.remove('active');
                    spanElement2.style.display = "none";
                }
            }

            // Wywołaj na start
            updateArtistDisplay();

            // Aktualizuj przy focusie i blur okna
            $(window).on("focus blur", updateArtistDisplay);

            // Timeline
            const currentTime = Date.now();
            const totalDuration = endTimestamp - startTimestamp;
            const elapsedTime = currentTime - startTimestamp;

            document.querySelector('#spotify-timeline span.elapsedTime').innerHTML = formatTime(elapsedTime);
            document.querySelector('#spotify-timeline span.overTime').innerHTML = formatTime(totalDuration);

            if (elapsedTime < 0) {
                console.log("Utwór jeszcze się nie rozpoczął.");
            } else {
                const progress = Math.min((elapsedTime / totalDuration) * 100, 100);
                document.querySelector("#spotify-timeline span").style.width = `${progress.toFixed(2)}%`;
            }

        } else {
            // Jesli nie slucham spotify'a
            document.querySelector('#spotify-info').style.display = "none";
            effectsElement = document.querySelectorAll('#info-bar-status[value="4"]');
            effectsElement.forEach((el) => {
                el.className = "";
                el.classList.add("offline");
            });
        }

        // Wyłączanie/Włączanie przycisków jeśli nie słucham
        const infoBarItem = document.querySelector('#info-bar-item[onclick="infoBarAction(\'4\')"]');
        const infoBarStatus = document.querySelector('#info-bar-status[value="4"]');
        
        if (infoBarItem && infoBarStatus && infoBarStatus.classList.contains('offline')) {
            infoBarItem.style.cursor = 'default';
            infoBarItem.style.pointerEvents = 'none';
        } else {
            infoBarItem.style.cursor = 'pointer';
            infoBarItem.style.pointerEvents = 'unset';
        }

    // Sprawdzanie ewentualnych bledow
    } else {
        console.error("Błąd podczas pobierania danych");
    }
    } catch (error) {
        console.error("Błąd zapytania: ", error);
    }
}

setInterval(fetchStatus, 500);
fetchStatus();