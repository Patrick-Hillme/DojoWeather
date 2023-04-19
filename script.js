function cityAlert(button){
    alert("Loading weather report...")
}


var grandElement = document.querySelector("#bottom-box");
function dismissCookie(){
    grandElement.remove();
}

var unitSelect = document.getElementById("unit-select");
var selectedUnit = unitSelect.value;
var arrHigh = [high1.innerText, high2.innerText, high3.innerText, high4.innerText];
var arrLow = [low1.innerText, low2.innerText, low3.innerText, low4.innerText];
var arrHigh1 = [high1.innerText, high2.innerText, high3.innerText, high4.innerText];
var arrLow1 = [low1.innerText, low2.innerText, low3.innerText, low4.innerText];



function changeTemp(){
    if (unitSelect.value === "fahrenheit") {
        doMathF();
        high1.innerText = arrHigh[0];
        high2.innerText = arrHigh[1];
        high3.innerText = arrHigh[2];
        high4.innerText = arrHigh[3];
        low1.innerText = arrLow[0];
        low2.innerText = arrLow[1];
        low3.innerText = arrLow[2];
        low4.innerText = arrLow[3];
    } 
    if (unitSelect.value === "celcius") {
        high1.innerText = arrHigh1[0];
        high2.innerText = arrHigh1[1];
        high3.innerText = arrHigh1[2];
        high4.innerText = arrHigh1[3];
        low1.innerText = arrLow1[0];
        low2.innerText = arrLow1[1];
        low3.innerText = arrLow1[2];
        low4.innerText = arrLow1[3];
        console.log(arrHigh1)
    }
    arrHigh = [...arrHigh1];
    arrLow = [...arrLow1]
    console.log(arrHigh);
}

function doMathF(){
    for (i = 0; i < arrHigh.length; i++){
        arrHigh[i] = (arrHigh[i] * 9/5) + 32;
        arrHigh[i] = Math.floor(arrHigh[i]);
        arrLow[i] = (arrLow[i] * 9/5) + 32;
        arrLow[i] = Math.floor(arrLow[i]);
    }
}


