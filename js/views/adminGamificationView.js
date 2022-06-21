var gamification;

function loadGamification() {
    gamification = JSON.parse(localStorage.getItem("xpPerLevel"))
}

function showGamification() {
    for (let i = 1; i <= 5; i++)
        document.getElementById(`level${i}`).value = gamification[i - 1]
}

function saveGamification() {
    const xps = document.getElementsByClassName("levelinput")

    let i = 0
    for (let xp of xps) {
        gamification[i] = xp.value
        i++
    }

    localStorage.setItem("xpPerLevel", JSON.stringify(gamification))
}

loadGamification()
showGamification()

window.saveGamification = saveGamification