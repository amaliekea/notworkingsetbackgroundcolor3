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
console.log(inpColorValue);

let inpColorPicker = document.getElementById("inpColorPicker") //2 felt
console.log(inpColorPicker);

let inp = document.querySelector(".inpColor"); //jeg skriver 1 felt
console.log(inp);

let pbCol = document.querySelector(".pbSetColor"); //knap
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);


inpColorPicker.addEventListener('input', useColorPicker);
pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener('keyup', setBackgroundColor);

