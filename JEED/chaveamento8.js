document.addEventListener('DOMContentLoaded', function () {
    // Recupera os nomes das equipes do localStorage
    const equipes = JSON.parse(localStorage.getItem('equipes')) || [];

    // Embaralha as equipes
    const equipesEmbaralhadas = equipes.sort(() => Math.random() - 0.5);

    // Atribui os nomes às divs correspondentes
    for (let i = 0; i < equipesEmbaralhadas.length; i++) {
        const teamDiv = document.querySelector(`.team${i + 1} .team-name`);
        if (teamDiv) {
            teamDiv.textContent = equipesEmbaralhadas[i] || 'Vazio';
        }
    }
});