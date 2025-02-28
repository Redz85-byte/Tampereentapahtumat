fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        tapahtumat(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan </p>" + error;
    });

function tapahtumat(data) {
    var teksti = "";
    teksti += "<h2>Tampereella tapahtuu</h2>";

    data.forEach(event => {
        teksti += `<div class="tapahtuma">`;
        teksti += `<h3>${event.name}</h3>`;
        teksti += `<p>${event.description}</p>`;
        teksti += `<a href="${event.url}" target="_blank">Lue lisää</a>`;
        teksti += `</div>`;
    });

    document.getElementById("vastaus").innerHTML = teksti;
}
