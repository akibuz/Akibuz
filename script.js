// script.js
document.getElementById('kontaktu-formularioa').addEventListener('submit', function(event) {
    // Orria berriro kargatzea ekiditen du
    event.preventDefault();

    // Erakutsi eskerrak emateko mezua
    document.getElementById('eskerrik-asko-mezua').style.display = 'block';

    // Hustu formularioaren eremuak
    this.reset();
});