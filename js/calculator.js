let displayValue = 0;

function updateDisplay() {
    document.getElementById("display").textContent=displayValue;
}

function appendDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}