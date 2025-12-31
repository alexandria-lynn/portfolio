function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var images = document.querySelectorAll("img");
    images[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    images[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    var winningText = document.querySelector("h3");
    if (randomNumber1 > randomNumber2) {
        winningText.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        winningText.innerHTML = "Player 2 Wins! 🚩";
    } else {
        winningText.innerHTML = "It's a Draw!";
    }
}