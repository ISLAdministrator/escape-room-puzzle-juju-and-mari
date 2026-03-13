let display = document.getElementById("display");
let message = document.getElementById("message");

let expression = "";
let correctAnswer = 473;

/* START GAME (OVERLAY CLOSE) */
function startGame() {
    document.getElementById("overlay").style.display = "none";
}

/* NUMBER PRESS */
function press(num) {
    expression += num;
    display.innerText = expression;
}

/* OPERATOR PRESS */
function setOperator(op) {
    expression += op;
    display.innerText = expression;
}

/* CALCULATE */
function calculate() {
    try {
        let result = eval(expression);
        display.innerText = result;

        if (result === correctAnswer) {
            message.innerText = 'Correct! Take your reward "I"';
            message.style.color = "green";

            // делаем комнату светлее
            document.body.style.filter = "brightness(120%)";

            // меняем фон
            document.body.style.backgroundImage = "url('end.png')";
        } 
        else {
            message.innerText = "Wrong answer. Try again.";
            message.style.color = "red";
        }

        expression = result.toString();
    } 
    catch {
        message.innerText = "Invalid expression.";
        message.style.color = "red";
    }
}

/* CLEAR */
function clearDisplay() {
    expression = "";
    display.innerText = "0";
}