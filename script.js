let display = document.getElementById("display");
let message = document.getElementById("message");

let correctAnswer = 327;

function press(num) {
    if (display.innerText === "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function checkAnswer() {
    let answer = Number(display.innerText);

    if (answer === correctAnswer) {
        message.innerText = "✅ Correct! The room gets brighter...";
        message.style.color = "lime";
        document.body.style.background = "#333";
    } else {
        message.innerText = "❌ Wrong answer! Try again.";
        message.style.color = "red";
    }
}