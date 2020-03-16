let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;

let display = document.getElementById('display')

document.getElementById('button0').onclick = function() {
    display.innerHTML += '0'
}
document.getElementById('button1').onclick = function() {
    display.innerHTML += '1'
}
document.getElementById('button2').onclick = function() {
    display.innerHTML += '2'
}
document.getElementById('button3').onclick = function() {
    display.innerHTML += '3'
}
document.getElementById('button4').onclick = function() {
    display.innerHTML += '4'
}
document.getElementById('button5').onclick = function() {
    display.innerHTML += '5'
}
document.getElementById('button6').onclick = function() {
    display.innerHTML += '6'
}
document.getElementById('button7').onclick = function() {
    display.innerHTML += '7'
}
document.getElementById('button8').onclick = function() {
    display.innerHTML += '8'
}
document.getElementById('button9').onclick = function() {
    display.innerHTML += '9'
}
document.getElementById('buttonPoint').onclick = function() {
    display.innerHTML += '.'
}


document.getElementById('buttonSum').onclick = function() {
    firstNumber = Number(display.innerHTML)
    display.innerHTML = ''
    operator = 'sum'
}
document.getElementById('buttonSubtraction').onclick = function() {
    firstNumber = Number(display.innerHTML)
    display.innerHTML = ''
    operator = 'subtraction'
}
document.getElementById('buttonMultiplication').onclick = function() {
    firstNumber = Number(display.innerHTML)
    display.innerHTML = ''
    operator = 'multiplication'
}
document.getElementById('buttonDivision').onclick = function() {
    firstNumber = Number(display.innerHTML)
    display.innerHTML = ''
    operator = 'division'
}

document.getElementById('buttonEqual').onclick = function() {
    secondNumber = Number(display.innerHTML)
    if (operator === 'sum') {
        display.innerHTML = mathOperations.sum(firstNumber, secondNumber)
    } else if (operator === 'subtraction'){
        display.innerHTML = mathOperations.subtraction(firstNumber, secondNumber)
    } else if (operator === 'multiplication'){
        display.innerHTML = mathOperations.multiplication(firstNumber, secondNumber)
    } else if (operator === 'division'){
        display.innerHTML = mathOperations.division(firstNumber, secondNumber)
    }
    firstNumber = secondNumber;
}

document.getElementById('buttonAC').onclick = function() {
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    display.innerHTML = '';
}
document.getElementById('buttonC').onclick = function() {
    let digitsArray = display.innerHTML.split('')
    digitsArray.splice((digitsArray.length-1),1)
    display.innerHTML = digitsArray.join('')
}

//All mathematical operations inside an object -> methods
let mathOperations = {
    sum: function(a,b) {return a+b},
    subtraction: function(a,b) {return a-b},
    multiplication: function(a,b) {return a*b},
    division: function(a,b) {return ((a*0.1)/(b*0.1))},
}

