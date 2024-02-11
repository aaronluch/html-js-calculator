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
    console.log("reset size");
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