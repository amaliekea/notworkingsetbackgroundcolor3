function setBackgroundColor() {
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

let inpColorValue = document.querySelector(".inpColorValue"); //2 felt
let inpColorPicker = document.getElementById("inpColorPicker") //2 felt

let inp = document.querySelector(".inpColor"); //jeg skriver 1 felt
console.log(inp);

let pbCol = document.querySelector(".pbSetColor"); //knap
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);

let increase = document.querySelector(".increaseFont");
console.log(bdy);

increase.addEventListener('click', increasebutton);

pbCol.addEventListener('click', setBackgroundColor);

document.addEventListener('keyup', setBackgroundColor);

inpColorPicker.addEventListener('input', useColorPicker);

const pTags = document.getElementsByTagName('p')
console.log(pTags.valueOf())
const pArray = Array.from(pTags)

function increasebutton () {
    pArray.forEach(increaseFont);
}
function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log(fontSize);
    element.style.fontSize = (parseInt(getComputedStyle(element).fontSize) - 2) + 'px';

}