/*
Updates Calculator Display
*/
let displayValue = 0;
function updateDisplay() {
    document.getElementById("display").textContent=displayValue;
}

/*
Appends buttom pressed to display
*/
function appendDisplay(value) {
    if (displayValue === "0") {
        displayValue = "" + value;
    } else {
        displayValue += value;
    }
    overflowDisplay(document.getElementById('display').textContent + value);
    updateDisplay();
}

/*
Clears the display
*/
function clearDisplay() {
    displayValue = "0"; // defaults to a 0 when clearing
    const display = document.getElementById('display');
    display.textContent = '0';
    resetSize();
    updateDisplay();
}

/*
Calculates result be evaluating input as a string
Exception case being percentage calculation
*/
function calculateResult() {
    try {
        const calculate = displayValue.replace(/%/g, '/100');

        displayValue = eval(calculate);
        updateDisplay();
    } catch(error) {
        displayValue = "ERROR";
        updateDisplay();
    }
    updateDisplay();
}

/*
Function for allowing users to backspace previous character
*/
function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
    adjustFontSizeToFit();
}

/*
Listener for key-press input
*/
document.addEventListener('keydown', keyPress);

function keyPress(event) {
    const key = event.key;
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            appendDisplay(key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            appendDisplay(key);
            break;
        case 'Enter':
            calculateResult();
            break;
        case 'Escape':
            clearDisplay();
            break;
        case 'Backspace':
            backspace();
            break;
        default:
            break;
    }
}