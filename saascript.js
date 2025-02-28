const apiKey = '665ecd56dfc08dbb50feb8b8f5034e28'; 

function haeSaa(city, elementId) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fi&units=metric`)
        .then(response => response.json())
        .then(data => {
            let teksti = `<h2>Sää ${city}</h2>`;
            teksti += `<p>Lämpötila: ${data.main.temp}°C</p>`;
            teksti += `<p>Tuuli: ${data.wind.speed} m/s</p>`;
            teksti += `<p>${data.weather[0].description}</p>`;
            document.getElementById(elementId).innerHTML = teksti;
        })
        .catch(error => {
            document.getElementById(elementId).innerHTML = "<p>Säätietoja ei voitu hakea.</p>";
        });
}

haeSaa('Tampere', 'saaTampere');
haeSaa('Helsinki', 'saaHelsinki');
