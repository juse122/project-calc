/*
to-do:
- Operations werden bei anschließender Zifferneingabe fest eingeloggt, andere Rechenzeichen ändern die Operation nicht
- Operations sind gleichzeitig auch immer "=" Buttons, klappt nicht für vorher ausgewählte Operation
*/

let calcResult = document.getElementById("calc-result").innerHTML;
let calcNext = document.getElementById("calc-next").innerHTML;

let calcCurrent = "";
let calcInterim = "";
let calcEquals = "";
let calcValue1 = "";
let calcValue2 = "";
let calcAddition = calcValue1 + calcValue2;
let calcSubtraction = calcValue1 - calcValue2;
let calcMultiplication = calcValue1 * calcValue2;
let calcDivision = calcValue1 / calcValue2;
var operationSign = "";

calcResult = "";
calcNext = "";

const historyScreen = document.getElementById("history-screen");

function inputBackspace() {
    if (calcEquals !== "") {
        document.getElementById("calc-next").innerHTML = "";
    } else if (calcCurrent !== "") {
        calcCurrent = calcCurrent.slice(0, -1);
        if (calcCurrent !== "") {
            document.getElementById("calc-result").innerHTML = calcCurrent;
        } else {
            document.getElementById("calc-result").innerHTML = "0";
        };
    } else {
        document.getElementById("calc-result").innerHTML = "0";
    };
};

function inputClearEntry() {
    calcCurrent = "";
    calcInterim = "";
    calcEquals = "";
    calcValue1 = "";
    calcValue2 = "";
    calcAddition = "";
    calcSubtraction = "";
    calcMultiplication = "";
    calcDivision = "";
    
    document.getElementById("calc-next").innerHTML = "";
    document.getElementById("calc-result").innerHTML = "0";
};

function inputClear() {
    calcCurrent = "";
    calcInterim = "";
    calcEquals = "";
    calcValue1 = "";
    calcValue2 = "";
    calcAddition = "";
    calcSubtraction = "";
    calcMultiplication = "";
    calcDivision = "";
    
    document.getElementById("calc-next").innerHTML = "";
    document.getElementById("calc-result").innerHTML = "0";
};

function inputConversion() {
    if (calcCurrent === "" || calcCurrent === "0") {
        document.getElementById("calc-result").innerHTML = "0";
    } else {
        calcCurrent = calcCurrent * -1;
        calcCurrent = String(calcCurrent);
        document.getElementById("calc-result").innerHTML = calcCurrent;
    };
}

function inputZero() {
    if (calcEquals !== "" && calcValue1 !== "" && calcValue2 !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
        calcValue1 = "";
        document.getElementById("calc-next").innerHTML = "";
    }
    
    else if (calcEquals !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
    };
    
    if (calcCurrent.length < 13) {
        if (calcCurrent !== "" || calcCurrent.includes(".") === true) {
            calcCurrent = calcCurrent + "0";
            document.getElementById("calc-result").innerHTML = calcCurrent;
        } else {
            calcCurrent = "";
            document.getElementById("calc-result").innerHTML = "0";
        };
    };
};

function inputComma() {
    if (calcEquals !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "0.";
        document.getElementById("calc-next").innerHTML = "";
    } else if (calcCurrent === "") {
        calcCurrent = "0.";
    } else if (calcCurrent.length < 12 && calcCurrent.includes(".") === false) {
        calcCurrent = calcCurrent + ".";
    };

    document.getElementById("calc-result").innerHTML = calcCurrent;
};

function inputOne() {    
    if (calcEquals !== "" && calcValue1 !== "" && calcValue2 !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
        calcValue1 = "";
        document.getElementById("calc-next").innerHTML = "";
    }
    
    else if (calcEquals !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
    };
    
    if (calcCurrent.length < 13) {
        calcCurrent = calcCurrent + "1";
    };

    document.getElementById("calc-result").innerHTML = calcCurrent;
};

function inputTwo() {
    if (calcEquals !== "" && calcValue1 !== "" && calcValue2 !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
        calcValue1 = "";
        document.getElementById("calc-next").innerHTML = "";
    }
    
    else if (calcEquals !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
    };
    
    if (calcCurrent.length < 13) {
        calcCurrent = calcCurrent + "2";
    };

    document.getElementById("calc-result").innerHTML = calcCurrent;
};

function inputThree() {
    if (calcEquals !== "" && calcValue1 !== "" && calcValue2 !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
        calcValue1 = "";
        document.getElementById("calc-next").innerHTML = "";
    }
    
    else if (calcEquals !== "") {
        calcInterim = "";
        calcEquals = "";
        calcCurrent = "";
    };
    
    if (calcCurrent.length < 13) {
        calcCurrent = calcCurrent + "3";
    };

    document.getElementById("calc-result").innerHTML = calcCurrent;
};

function inputPlus() {
    if (calcEquals !== "") {
        calcValue1 = calcEquals;
        calcValue2 = "";
        calcCurrent = "";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
    
    if (calcValue1 !== "" && calcCurrent !== "") {
        calcValue2 = calcCurrent;
        calcInterim = eval(calcValue1 + operationSign + calcValue2);
        calcValue1 = calcInterim;
        operationSign = " + ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        document.getElementById("calc-result").innerHTML = calcInterim;
        calcCurrent = "";
    } else if (calcValue1 === "") {
        if (calcCurrent === "") {
            calcValue1 = "0";
        } else {
            calcValue1 = calcCurrent;
        };
        operationSign = " + ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        calcCurrent = "";
    } else {
        operationSign = " + ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
};

function inputMinus() {
    if (calcEquals !== "") {
        calcValue1 = calcEquals;
        calcValue2 = "";
        calcCurrent = "";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
    
    if (calcValue1 !== "" && calcCurrent !== "") {
        calcValue2 = calcCurrent;
        calcInterim = eval(calcValue1 + operationSign + calcValue2);
        calcValue1 = calcInterim;
        operationSign = " - ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        document.getElementById("calc-result").innerHTML = calcInterim;
        calcCurrent = "";
    } else if (calcValue1 === "") {
        if (calcCurrent === "") {
            calcValue1 = "0";
        } else {
            calcValue1 = calcCurrent;
        };
        operationSign = " - ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        calcCurrent = "";
    } else {
        operationSign = " - ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
};

function inputMultiply() {
    if (calcEquals !== "") {
        calcValue1 = calcEquals;
        calcValue2 = "";
        calcCurrent = "";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
    
    if (calcValue1 !== "" && calcCurrent !== "") {
        calcValue2 = calcCurrent;
        calcInterim = eval(calcValue1 + operationSign + calcValue2);
        calcValue1 = calcInterim;
        operationSign = " * ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        document.getElementById("calc-result").innerHTML = calcInterim;
        calcCurrent = "";
    } else if (calcValue1 === "") {
        if (calcCurrent === "") {
            calcValue1 = "0";
        } else {
            calcValue1 = calcCurrent;
        };
        operationSign = " * ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        calcCurrent = "";
    } else {
        operationSign = " * ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
};

function inputDivide() {
    if (calcEquals !== "") {
        calcValue1 = calcEquals;
        calcValue2 = "";
        calcCurrent = "";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
    
    if (calcValue1 !== "" && calcCurrent !== "") {
        calcValue2 = calcCurrent;
        calcInterim = eval(calcValue1 + operationSign + calcValue2);
        calcValue1 = calcInterim;
        operationSign = " / ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        document.getElementById("calc-result").innerHTML = calcInterim;
        calcCurrent = "";
    } else if (calcValue1 === "") {
        if (calcCurrent === "") {
            calcValue1 = "0";
        } else {
            calcValue1 = calcCurrent;
        };
        operationSign = " / ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
        calcCurrent = "";
    } else {
        operationSign = " / ";
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign;
    };
};

function inputEquals() {
    if (calcValue1 === "" && calcValue2 !== "") {
        calcValue1 = calcCurrent;
        calcEquals = eval(calcValue1 + operationSign + calcValue2);
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign + calcValue2 + " =";
        document.getElementById("calc-result").innerHTML = calcEquals;
    }
    
    else if (calcValue1 === "") {
        if (calcCurrent === "") {
            calcEquals = "0";
        } else {
            calcEquals = calcCurrent;
        };
        document.getElementById("calc-next").innerHTML = calcEquals + " =";
    }

    else if (calcValue2 === "") {
        calcValue2 = document.getElementById("calc-result").innerHTML;
        calcEquals = eval(calcValue1 + operationSign + calcValue2);
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign + calcValue2 + " =";
        document.getElementById("calc-result").innerHTML = calcEquals;
    }

    else {
        calcValue1 = calcEquals;
        calcEquals = eval(calcValue1 + operationSign + calcValue2);
        document.getElementById("calc-next").innerHTML = calcValue1 + operationSign + calcValue2 + " =";
        document.getElementById("calc-result").innerHTML = calcEquals;
    };

    if (document.getElementById("history-screen").contains(document.getElementById("history-text"))) {
        document.getElementById("history-screen").removeChild(document.getElementById("history-text"));
    };
};

function createHistoryEntry() {
    var getScreenParent = document.getElementById("history-screen");
    var getFirstScreenChild = getScreenParent.childNodes.length;
    var createEntryElement = document.createElement("div");

    createEntryElement.id = "history-entry-" + getFirstScreenChild;
    createEntryElement.classList.add("history-entry");
    
    function insertChild(parent, newElem, refElem) {
        parent.insertBefore(newElem, refElem);
    };

    insertChild(getScreenParent, createEntryElement, getScreenParent.childNodes[0]);

    function fillHistoryEntry() {
        var getEntryParent = document.getElementById(createEntryElement.id);
        var createFillerNext = document.createElement("p");
        var createFillerResult = document.createElement("p");

        createFillerNext.classList.add("history-next");
        createFillerResult.classList.add("history-result");
        createFillerNext.innerHTML = document.getElementById("calc-next").innerHTML;
        createFillerResult.innerHTML = document.getElementById("calc-result").innerHTML;

        getEntryParent.appendChild(createFillerNext);
        getEntryParent.appendChild(createFillerResult);

        createEntryElement.addEventListener("click", function sendToCurrent() {
            calcNext = createFillerNext.innerHTML;
            calcResult = createFillerResult.innerHTML;
            document.getElementById("calc-next").innerHTML = createFillerNext.innerHTML;
            document.getElementById("calc-result").innerHTML = createFillerResult.innerHTML;
        });
    };

    fillHistoryEntry();
};

function deleteHistory() {
    while (historyScreen.hasChildNodes()) {
        historyScreen.removeChild(historyScreen.lastChild);
    };

    var getScreenParent = document.getElementById("history-screen");
    var createTextElement = document.createElement("p");

    getScreenParent.appendChild(createTextElement);
    createTextElement.id = "history-text";
    createTextElement.classList.add("history-text");
    createTextElement.innerHTML = "Es ist noch kein Verlauf vorhanden.";
};

// Keyboard input //

document.onkeydown = (event) => {
    let keyCode = event.keyCode;

    switch (keyCode) {
        case 49:
        case 97:
            inputOne();
            document.querySelector("#calc-one").classList.add("calc-button-number-active");
            break;
    };
};

document.onkeyup = (event) => {
    let keyCode = event.keyCode;

    switch (keyCode) {
        case 49:
        case 97:
            document.querySelector("#calc-one").classList.remove("calc-button-number-active");
            break;
    };
};


/*
function inputPlus() {
    if (document.getElementById("calc-next").innerHTML.includes("+" || "/" || "*" || "-")) {
        document.getElementById("calc-next").innerHTML = parseFloat(document.getElementById("calc-next").innerHTML) + " +";
    };

    if (calcCurrent === "") {
        document.getElementById("calc-next").innerHTML = "0" + " +";
        calcValue1 = "";
        calcCurrent = "";
    } else if (calcValue1 === "") {
        calcValue1 = calcCurrent;
        document.getElementById("calc-next").innerHTML = calcValue1 + " +";
        calcCurrent = "";
    } else if (calcValue2 === "") {
        calcValue2 = calcCurrent;
        calcAddition = parseFloat(calcValue1) + parseFloat(calcValue2);
        document.getElementById("calc-next").innerHTML = calcAddition + " +";
        document.getElementById("calc-result").innerHTML = calcAddition;
        calcValue1 = calcAddition;
        calcValue2 = calcAddition;
        calcCurrent = "";
    } else {
        calcValue2 = calcCurrent;
        calcAddition = parseFloat(calcValue1) + parseFloat(calcValue2);
        document.getElementById("calc-next").innerHTML = calcAddition + " +";
        document.getElementById("calc-result").innerHTML = calcAddition;
        calcValue1 = calcAddition;
        calcValue2 = calcAddition;
        calcCurrent = "";
    };
};
*/

/*
function inputMinus() {
    if (document.getElementById("calc-next").innerHTML.includes("+" || "/" || "*" || "-")) {
        document.getElementById("calc-next").innerHTML = parseFloat(document.getElementById("calc-next").innerHTML) + " -";
    };

    if (calcCurrent === "") {
        document.getElementById("calc-next").innerHTML = "0" + " -";
        calcValue1 = "";
        calcCurrent = "";
    } else if (calcValue1 === "") {
        calcValue1 = calcCurrent;
        document.getElementById("calc-next").innerHTML = calcValue1 + " -";
        calcCurrent = "";
    } else if (calcValue2 === "") {
        calcValue2 = calcCurrent;
        calcSubtraction = calcValue1 - calcValue2;
        document.getElementById("calc-next").innerHTML = calcSubtraction + " -";
        document.getElementById("calc-result").innerHTML = calcSubtraction;
        calcValue1 = calcSubtraction;
        calcValue2 = calcSubtraction;
        calcCurrent = "";
    } else {
        calcValue2 = calcCurrent;
        calcSubtraction = calcValue1 - calcValue2;
        document.getElementById("calc-next").innerHTML = calcSubtraction + " -";
        document.getElementById("calc-result").innerHTML = calcSubtraction;
        calcValue1 = calcSubtraction;
        calcValue2 = calcSubtraction;
        calcCurrent = "";
    };
};
*/

/*
function inputEquals() {
    if (document.getElementById("calc-next").innerHTML.includes("+")) {
        if (calcCurrent === "" && calcNext === "") {
            document.getElementById("calc-next").innerHTML = "0" + " =";
            document.getElementById("calc-result").innerHTML = "0";
            calcNext = "";
            calcCurrent = "";
        } else if (calcCurrent === "") {
            document.getElementById("calc-next").innerHTML = calcValue1 + " + " + calcValue2 + " =";
            calcAddition = parseFloat(calcValue1) + parseFloat(calcValue2);
            document.getElementById("calc-result").innerHTML = calcAddition;
            calcValue1 = calcAddition;
            calcEquals = calcAddition;
        } else {        
        calcValue2 = calcCurrent;
        calcAddition = parseFloat(calcValue1) + parseFloat(calcValue2);
        document.getElementById("calc-next").innerHTML = calcValue1 + " + " + calcValue2 + " =";
        document.getElementById("calc-result").innerHTML = calcAddition;
        calcValue1 = calcAddition;
        calcEquals = calcAddition;
        calcCurrent = "";
        };

    }
    
    else if (document.getElementById("calc-next").innerHTML.includes("/")) {
        dd
    }    
    
    else if (document.getElementById("calc-next").innerHTML.includes("*")) {
        dd
    }
    
    else if (document.getElementById("calc-next").innerHTML.includes("-")) {
        dd
    }
        
    else if (calcCurrent === "" && calcNext === "") {
        document.getElementById("calc-next").innerHTML = "0" + " =";
        document.getElementById("calc-result").innerHTML = "0";
        calcNext = "";
        calcCurrent = "";
    }

    else {
        document.getElementById("calc-next").innerHTML = calcCurrent + " =";
        calcEquals = calcCurrent;
    };
};
    */
    
    
    /*
    if (calcCurrent.includes("+" || "-" || "*" || "/")) {
        calcCurrentNumber = parseFloat(calcCurrent);
        calcCurrent = calcCurrentNumber + " + ";
        document.getElementById("calc-next").innerHTML = calcCurrent;
    } else {
        calcCurrent = calcCurrent + " + ";
        document.getElementById("calc-next").innerHTML = calcCurrent;
    }
    calcCurrent = 0;
    
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

    calcResult = 0;




function inputMinus() {    
    if (calcCurrent.includes("+" || "-" || "*" || "/")) {
        calcCurrentNumber = parseFloat(calcCurrent);
        calcCurrent = calcCurrentNumber + " - ";
        document.getElementById("calc-next").innerHTML = calcCurrent;
    } else {
        calcCurrent = calcCurrent + " - ";
        document.getElementById("calc-next").innerHTML = calcCurrent;
    }
    calcCurrent = 0;
    
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

*/