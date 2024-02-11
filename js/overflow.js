/*
Adjusts for overflow
*/
function adjustFontSizeToFit() {
    const display = document.getElementById('display');
    let currentFontSize = parseInt(window.getComputedStyle(display).fontSize);
  
/*
Check if display's content is overflowing bounds
*/
while (display.scrollWidth > display.offsetWidth && currentFontSize > 10) {
    // reduce font size
    currentFontSize--;
    display.style.fontSize = `${currentFontSize}px`;
    }
}
  
/*
Adjusts the font's size due to overflow
*/

// initial adjustment
adjustFontSizeToFit();
function overflowDisplay(newContent) {
    const display = document.getElementById('display');
    display.textContent = newContent;
    adjustFontSizeToFit();
}

/*
Resets the display's font-size to default
*/
function resetSize() {
    const display = document.getElementById('display');
    display.style.fontSize = "55px";
}