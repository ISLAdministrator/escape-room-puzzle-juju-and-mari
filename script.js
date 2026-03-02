let display = document.getElementById("display");
let message = document.getElementById("message");

let firstNumber = "";
let secondNumber = "";
let operator = "";

let correctAnswer = 327; // change if needed

function press(num) {
    if (operator === "") {
        firstNumber += num;
        display.innerText = firstNumber;
    } else {
        secondNumber += num;
        display.innerText = secondNumber;
    }
}

function setOperator(op) {
    operator = op;
}

function calculate() {
    let result;

    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    }

    display.innerText = result;

    if (result === correctAnswer) {
        message.innerText = " Correct! The room gets brighter!";
        message.style.color = "green";
        document.body.style.filter = "brightness(120%)";
    } else {
        message.innerText = " Wrong answer! Try again.";
        message.style.color = "red";
    }

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function clearDisplay() {
    display.innerText = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}