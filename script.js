let display = document.getElementById("display");
let message = document.getElementById("message");

let expression = "";
let correctAnswer = 473;

function press(num){
expression += num;
display.innerText = expression;
}

function setOperator(op){
expression += op;
display.innerText = expression;
}

function calculate(){

try{

let result = eval(expression);

display.innerText = result;

if(result === correctAnswer){

message.innerText = 'Correct! Take your reward "I"';
message.style.color = "green";

document.body.style.backgroundImage = "url('end.png')";

document.getElementById("reward").style.display = "block";

document.getElementById("nextStage").style.display = "block";

}else{

message.innerText = "Wrong answer. Try again.";
message.style.color = "red";

}

expression = result.toString();

}catch{

message.innerText = "Invalid expression.";

}

}

function clearDisplay(){

expression = "";
display.innerText = "0";

}

function goNext(){

window.location.href = "https://isladministrator.github.io/escape-room-puzzle-jekabs-and-william/";

}