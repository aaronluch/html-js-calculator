let displayValue = 0;

// updates calculator's display
function updateDisplay() {
    document.getElementById("display").textContent=displayValue;
}

// appends button pressed to display
function appendDisplay(value) {
    if (displayValue === "0") {
        displayValue = "" + value;
    } else {
        displayValue += value;
    }
    overflowDisplay(document.getElementById('display').textContent + value);
    updateDisplay();
}

// clears calculator's display
function clearDisplay() {
    displayValue = "0"; // defaults to a 0 when clearing
    const display = document.getElementById('display');
    display.textContent = '0';
    resetSize();
    updateDisplay();
}

// calculates result by evaluating value as a string
function calculateResult() {
    try {
        displayValue = eval(displayValue.toString());
        updateDisplay();
    } catch(error) {
        displayValue = "ERROR";
    }
    updateDisplay();
}

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
        default:
            break;
    }
}