player = {
    name: "Yashodhan",
    chips: 200
}

let cards = []
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let warningEl = document.getElementById("warning-el")

isAlive = false
blackJack = false

function drawCards() {
    drawnCard = Math.ceil( Math.random() * 13 )

    if (drawnCard > 10) {
        return 11
    } else if (drawnCard < 2) {
        return 1
    } else {
        return drawnCard
    }
}


function startGame() {

    warningEl.textContent = ""
    cards = []

    if (isAlive) {
        warningEl.textContent = "Game already started"
    }

    else {

        isAlive = true
        console.log("A new game just started...")
    
        firstCard = drawCards()
        secondCard = drawCards()
    
        cards.push(firstCard)
        cards.push(secondCard)
    
        renderGame()
    }

}

function renderGame() {
    
    let message = ""
    let sum = 0

    playerEl.textContent = player.name + ": $" + player.chips
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }

    sumEl.textContent = "Sum: " + sum

    if (sum > 21) {
        isAlive = false
        message = "Good luck next time, " + player.name + " You lost"
        cards = []

    } else if (sum === 21) {
        message = "BlackJack!!! Amazing, " + player.name
        blackJack = true
    } else {
        message = "Wanna draw another card?"
    }

    messageEl.textContent = message
    

}

function newCard() {

    warningEl.textContent = ""

    if (isAlive && !blackJack){

        newDrawnCard = drawCards()
        cards.push(newDrawnCard)
        renderGame()

    } else if (blackJack) {
        warningEl.textContent = "Play another game"
        isAlive = false
        blackJack = false
    }

    else {
        isAlive = false
        warningEl.textContent = "You lost, Cannot continue"

    }

}