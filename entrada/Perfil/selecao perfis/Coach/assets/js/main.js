/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*================ BARRA DE CONTAGEM ====================*/
const statsData = {
    combat: {
        score: 79,
        damagePerMin: 903,
        killParticipation: 41,
        ccScorePerMin: 11.0
    },
    farming: {
        score: 71,
        goldSpentPerMin: 464,
        csPerMin: 6.5,
        xpPerMin: 521
    },
    vision: {
        score: 55,
        visionScorePerMin: 0.5,
        wardsPlaced: 8,
        wardsDestroyed: 2
    }
};

// Função para atualizar os valores dos elementos HTML
function updateStats() {
    // Combate
    document.getElementById('combat-score').innerText = statsData.combat.score;
    document.getElementById('combat-damage').style.width = `${statsData.combat.damagePerMin / 11}%`;
    document.getElementById('combat-kill').style.width = `${statsData.combat.killParticipation/ 0.99}%`;
    document.getElementById('combat-cc').style.width = `${statsData.combat.ccScorePerMin * 10}%`;

    // Farming
    document.getElementById('farming-score').innerText = statsData.farming.score;
    document.getElementById('farming-gold').style.width = `${statsData.farming.goldSpentPerMin / 3}%`;
    document.getElementById('farming-cs').style.width = `${statsData.farming.csPerMin * 6}%`;
    document.getElementById('farming-xp').style.width = `${statsData.farming.xpPerMin / 5}%`;

    // Visão
    document.getElementById('vision-score').innerText = statsData.vision.score;
    document.getElementById('vision-score-per-minute').style.width = `${statsData.vision.visionScorePerMin * 60}%`;
    document.getElementById('vision-wards').style.width = `${statsData.vision.wardsPlaced / 0.12}%`;
    document.getElementById('vision-wards-destroyed').style.width = `${statsData.vision.wardsDestroyed * 37}%`;
}

// Chama a função ao carregar a página
updateStats();