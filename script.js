const rValue = document.getElementById('rValue');
const gValue = document.getElementById('gValue');
const bValue = document.getElementById('bValue');

let finalRedValue = Number(rValue.value);
let finalGreenValue = Number(gValue.value);
let finalBlueValue = Number(bValue.value);

let rValues = document.getElementById('rValues');
let gValues = document.getElementById('gValues');
let bValues = document.getElementById('bValues');

rValues.textContent = finalRedValue;
gValues.textContent = finalGreenValue;
bValues.textContent = finalBlueValue;

let rgbValue = document.getElementById('rgbValue');
rgbValue.textContent = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;

let hexValue = document.getElementById('hexValue');

function convertHex(c) {
    return c.toString(16);
}
const finalRGBtoHEX = (r, g, b) => {
    return `#${convertHex(r)}${convertHex(g)}${convertHex(b)}`;
}

document.body.style.backgroundColor = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;
hexValue.textContent = finalRGBtoHEX(finalRedValue, finalGreenValue, finalBlueValue);

let containerTitle = document.getElementById('containerTitle');
containerTitle.style.color = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;

function updateFunction(){
    rgbValue.textContent = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;
    hexValue.textContent = finalRGBtoHEX(finalRedValue, finalGreenValue, finalBlueValue);
    document.body.style.backgroundColor = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;
    copyBtn.style.backgroundColor = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;    
    containerTitle.style.color = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;
}

rValue.oninput = () => {
    finalRedValue = Number(rValue.value);
    rValues.textContent = finalRedValue;
    updateFunction();
}
gValue.oninput = () => {
    finalGreenValue = Number(gValue.value);
    gValues.textContent = finalGreenValue;
    updateFunction();
}
bValue.oninput = () => {
    finalBlueValue = Number(bValue.value);
    bValues.textContent = finalBlueValue;
    updateFunction();
}

let copyBtn = document.getElementById('copyValue');
copyBtn.style.backgroundColor = `rgb(${finalRedValue}, ${finalGreenValue}, ${finalBlueValue})`;

copyBtn.addEventListener('click', function(copy){
    navigator.clipboard.writeText(hexValue.textContent);
    alert(hexValue.textContent + ' Copied!')
});