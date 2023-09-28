let endDate = localStorage.getItem('endDate');

// Si elle n'est pas stockée, initialiser une nouvelle date de fin (24 jours à partir de maintenant)
if (!endDate) {
    endDate = new Date();
    endDate.setDate(endDate.getDate() + 24);
    localStorage.setItem('endDate', endDate); // Stocker la date de fin en local storage
} else {
    // Si elle est stockée, convertir la chaîne en objet Date
    endDate = new Date(endDate);
}

function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = endDate - currentDate;

    if (timeLeft <= 0) {
        // Le compte à rebours est terminé
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = 'J-' + days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = ':' + hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = ':' + minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = ':' + seconds.toString().padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);


const cookiePopup = document.getElementById('cookie-popup');


const acceptCookiesBtn = document.getElementById('accept-cookies');
const refuseCookiesBtn = document.getElementById('refuse-cookies');


function showCookiePopup() {
    cookiePopup.style.display = 'block';
}


function hideCookiePopup() {
    cookiePopup.style.display = 'none';
}


function acceptCookies() {
    
    hideCookiePopup();
}


function refuseCookies() {
   
    hideCookiePopup();
}

window.addEventListener('load', showCookiePopup);


acceptCookiesBtn.addEventListener('click', acceptCookies);
refuseCookiesBtn.addEventListener('click', refuseCookies);




function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}


document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookie_rgpd", "true", 365); 
    
});