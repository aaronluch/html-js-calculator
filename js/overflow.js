/* overflow for text*/
function adjustFontSizeToFit() {
    const display = document.getElementById('display');
    let currentFontSize = parseInt(window.getComputedStyle(display).fontSize);
  
// check if the display's content is overflowing its bounds
while (display.scrollWidth > display.offsetWidth && currentFontSize > 10) {
    // reduce font size
    currentFontSize--;
    display.style.fontSize = `${currentFontSize}px`;
    }
}
  
// initial adjustment
adjustFontSizeToFit();
  
// adjust font size whenever the content of the display changes
function overflowDisplay(newContent) {
    const display = document.getElementById('display');
    display.textContent = newContent;
    adjustFontSizeToFit();
}

// reset text size to initial
function resetSize() {
    const display = document.getElementById('display');
    display.style.fontSize = "55px";
}