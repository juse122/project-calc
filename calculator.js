let calcResult = document.getElementById("calc-result").innerHTML;
let calcNext = document.getElementById("calc-next").innerHTML;
let calcNextNumber = "";
let calcResultNumber = "";

calcResult = "";
calcNext = "";

function inputOne() {
    if (calcResult == "") {
        calcResult = calcResult + 1;
    } else {
        calcResult = calcResult + "1";
    };
    document.getElementById("calc-result").innerHTML = calcResult;
};

function inputTwo() {
    if (calcResult == "") {
        calcResult = calcResult + 2;
    } else {
        calcResult = calcResult + "2";
    };
    document.getElementById("calc-result").innerHTML = calcResult;
};

function inputPlus() {    
    if (document.getElementById("calc-result").innerHTML == 0 || calcResult == 0) {
        calcNext = 0 + " +";
    } else if (calcNext != "") {
        calcNextNumber = parseFloat(calcNext);
        calcResultNumber = parseFloat(calcResult);
        calcNext = calcNextNumber + calcResultNumber + " +";
        calcResult = calcNextNumber + calcResultNumber;
        document.getElementById("calc-next").innerHTML = calcNext;
        document.getElementById("calc-result").innerHTML = calcResult;
    } else {
        calcNext = calcResult + " +";
        document.getElementById("calc-next").innerHTML = calcNext;
    }

    calcResult = "";
};

function inputMinus() {    
    if (calcNext != "") {
        calcNextNumber = parseFloat(calcNext);
        calcResultNumber = parseFloat(calcResult);
        calcNext = calcNextNumber - calcResultNumber + " -";
        calcResult = calcNextNumber - calcResultNumber;
        document.getElementById("calc-next").innerHTML = calcNext;
        document.getElementById("calc-result").innerHTML = calcResult;
    } else {
        calcNext = calcResult + " -";
        document.getElementById("calc-next").innerHTML = calcNext;
    }

    calcResult = "";
};

function inputEquals() {
    calcNextNumber = parseFloat(calcNext);
    calcResultNumber = parseFloat(calcResult);
    calcNext = calcNextNumber + " + " + calcResultNumber + " =";
    calcResult = calcNextNumber + calcResultNumber;
    document.getElementById("calc-next").innerHTML = calcNext;
    document.getElementById("calc-result").innerHTML = calcResult;
}