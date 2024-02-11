let displayValue = 0;

// updates calculator's display
function updateDisplay() {
    document.getElementById("display").textContent=displayValue;
}

// appends button pressed to display
function appendDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

// clears calculator's display
function clearDisplay() {
    displayValue = "0"; // defaults to a 0 when clearing
    updateDisplay();
}

function calculateResult() {
    displayValue = eval(displayValue.toString());
    updateDisplay();
}