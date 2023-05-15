const display = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
let currentValue = '';
let previousValue = '';
let currentOperation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.textContent;

        if (content === 'AC') {
            clear();
        } else if (content === '+/-') {
            toggleSign();
        } else if (content === '%') {
            percentage();
        } else if (content === '÷' || content === '×' || content === '-' || content === '+') {
            setOperation(content);
        } else if (content === '=') {
            calculate();
        } else if (content === '.') {
            addDecimal();
        } else {
            addNumber(content);
        }
    });
});

function clear() {
    currentValue = '';
    previousValue = '';
    currentOperation = '';
    updateDisplay(0);
}

function toggleSign() {
    currentValue = parseFloat(currentValue) * -1;
    updateDisplay(currentValue);
}

function percentage() {
    currentValue = parseFloat(currentValue) / 100;
    updateDisplay(currentValue);
}

function setOperation(operation) {
    if (currentValue === '') return;

    if (previousValue !== '') {
        calculate();
    }

    currentOperation = operation;
    previousValue = currentValue;
    currentValue = '';
}

function addNumber(number) {
    if (currentValue.length >= 9) return;
    currentValue += number;
    updateDisplay(currentValue);
}

function addDecimal() {
    if (currentValue.includes('.')) return;
    currentValue += '.';
    updateDisplay(currentValue);
}

function calculate() {
    if (currentValue === '' || previousValue === '') return;

    let result = 0;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperation) {
        case '÷':
            result = num1 / num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
            break;
    }

    currentValue = result;
    currentOperation = '';
    previousValue = '';

    updateDisplay(currentValue);
}

function updateDisplay(value) {
    display.textContent = value;
}