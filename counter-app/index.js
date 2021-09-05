let count = 0
let countEl = document.getElementById("count-el")
let logEl = document.getElementById("log-el")

console.log(countEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {

    logEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}



