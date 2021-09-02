//dom
let diceOfPlayerOne = document.getElementById("player-1")
let diceOfPlayerTwo = document.getElementById("player-2")
let resultEl = document.querySelector("h1")
let rollBtn = document.getElementById("roll-btn")


rollBtn.addEventListener("click", function() {

    console.log("clicked")

    let playerOne = Math.ceil( Math.random()*6 )
    let playerTwo = Math.ceil( Math.random()*6 )

    if(playerOne > playerTwo) {
        resultEl.innerText = " 🎉🎇 Player One Wins !!! "
    }else if (playerOne === playerTwo) {
        resultEl.innerText = " Try again, draw 💔!!! "

    } else {
        resultEl.innerText = " Player Two wins 🎉🎇!!! "
    }
    

    diceOfPlayerOne.src = `${playerOne}.png`
    diceOfPlayerTwo.src = `${playerTwo}.png`


})
