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