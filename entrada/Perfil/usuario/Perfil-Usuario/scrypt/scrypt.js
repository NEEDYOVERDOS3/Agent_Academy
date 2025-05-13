let text = document.getElementById('titulo');
let evelynnfrente = document.getElementById('eveFrente');
let evelynnfundo = document.getElementById('eveFundo');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 0.2 + 'px';
    text.style.transform = 'scale('+ (1 + value * 0.0003) + ')';
    btn.style.marginTop = value * 0.3 + 'px';
    evelynnfrente.style.transform = 'scale('+ (1 + value * 0.0001) + ')';
    evelynnfrente.style.top = value * -0.03 + 'px';
})

/*Substitua os valores em statsData pelos dados reais após uma chamada à API.*/
const statsData = {
    combat: {
        score: 57,
        damagePerMin: 245,
        killParticipation: 69,
        ccScorePerMin: 1.0
    },
    farming: {
        score: 55,
        goldSpentPerMin: 242,
        csPerMin: 0.9,
        xpPerMin: 372
    },
    vision: {
        score: 53,
        visionScorePerMin: 2.3,
        wardsPlaced: 34,
        wardsDestroyed: 4
    }
};

// Função para atualizar os valores dos elementos HTML
function updateStats() {
    // Combate
    document.getElementById('combat-score').innerText = statsData.combat.score;
    document.getElementById('combat-damage').style.width = `${statsData.combat.damagePerMin / 8}%`;
    document.getElementById('combat-kill').style.width = `${statsData.combat.killParticipation}%`;
    document.getElementById('combat-cc').style.width = `${statsData.combat.ccScorePerMin * 30}%`;

    // Farming
    document.getElementById('farming-score').innerText = statsData.farming.score;
    document.getElementById('farming-gold').style.width = `${statsData.farming.goldSpentPerMin / 3}%`;
    document.getElementById('farming-cs').style.width = `${statsData.farming.csPerMin * 10}%`;
    document.getElementById('farming-xp').style.width = `${statsData.farming.xpPerMin / 5}%`;

    // Visão
    document.getElementById('vision-score').innerText = statsData.vision.score;
    document.getElementById('vision-score-per-minute').style.width = `${statsData.vision.visionScorePerMin * 24}%`;
    document.getElementById('vision-wards').style.width = `${statsData.vision.wardsPlaced}%`;
    document.getElementById('vision-wards-destroyed').style.width = `${statsData.vision.wardsDestroyed * 10}%`;
}

// Chama a função ao carregar a página
updateStats();