//global variables
let timer = 60;
let score = 0;
let hitRandomNumber = 0;
let startingCountdownVariable = 4;

//starting countdown
function startingCountdownMessage() {
    document.querySelector(".panelBottom").innerHTML = `<h2>Game will start in...</h2>`;
}

let startingCountdown = setInterval(function() {
    startingCountdownVariable--;

    if(startingCountdownVariable < 1) {
        clearInterval(startingCountdown);
    }
    else {
        document.querySelector(".panelBottom").innerHTML = `<h2>${startingCountdownVariable}</h2>`;
    }

}, 1000);

//making bubble
function makeBubble() {
    let bubbles = "";

for (let i = 1; i <= 112; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
}

document.querySelector(".panelBottom").innerHTML = bubbles;
}

//timer countdown function
function timerCountdown() {
    let setIntervalVar = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(setIntervalVar);
            document.querySelector(".panelBottom").innerHTML = `<h2>Times Up!!<br>Your Score: ${score}</h2>`;
        }
        
    },1000)
}

//get new hit
function gettingNewHit() {
    hitRandomNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hitNumber").textContent = hitRandomNumber;
}

//increase score
function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

//getting clicked number
document.querySelector(".panelBottom").addEventListener("click", function(bubbleNumber) {
    let clickedNumber = Number(bubbleNumber.target.textContent);
    if(clickedNumber === hitRandomNumber) {
        increaseScore();
        gettingNewHit();
        makeBubble();
    }
})

startingCountdownMessage();

setTimeout(function() {
    setTimeout(makeBubble, 2000);
    setTimeout(timerCountdown, 3000);
    setTimeout(gettingNewHit, 2000);
}, 3000);



