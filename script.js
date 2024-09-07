if (!sessionStorage.getItem('pageLoaded')) {
    // Set the heading to "Refresh Me" when the page is first opened
    var heading = document.querySelector("h1");
    heading.textContent = "Refresh Me";

    // Mark the page as loaded
    sessionStorage.setItem('pageLoaded', 'true');
} else {

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    }

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    }

    var heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "🚩 PLAYER 1 WINS!"
    }
    if (randomNumber1 < randomNumber2) {
        heading.textContent = "PLAYER 2 WINS! 🚩"
    }
    if (randomNumber1 === randomNumber2) {
        heading.textContent = "ITS A DRAW 📍"
    }
}