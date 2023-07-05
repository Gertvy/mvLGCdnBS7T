var axolotlclicker = document.getElementById('axolotlclicker');
var aligner = document.getElementById('aligner');
var storageItem = 'porygonAxolol.axolotlShrine.counter';
var getVal = localStorage.getItem(storageItem);
var counter = (getVal == null) ? 0 : parseInt(getVal);
var counterElement = document.getElementById('counter');
clicker(null);
function clicker(e) {
    if (e != null) {
        e.preventDefault();
        createExpander();
        counter++;
    }
    counterElement.innerHTML = counter;
    localStorage.setItem(storageItem, counter);
}
axolotlclicker.onmousedown = function (e) {
    axolotlclicker.classList.add('down');
    clicker(e);
}
axolotlclicker.onmouseup = function (e) {
    axolotlclicker.classList.remove('down');
}
axolotlclicker.ontouchstart = function (e) {
    axolotlclicker.classList.add('down');
    clicker(e);
}
axolotlclicker.ontouchend = function (e) {
    axolotlclicker.classList.remove('down');
}
axolotlclicker.ontouchcancel = function (e) {
    axolotlclicker.classList.remove('down');
}
axolotlclicker.onmouseleave = function (e) {
    axolotlclicker.classList.remove('down');
}
function createExpander() {
    var div = document.createElement('div');
    div.addEventListener('animationend', () => {
        div.remove();
    });
    div.classList.add('expander');
    aligner.appendChild(div);
}