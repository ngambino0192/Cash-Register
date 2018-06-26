var calculatorModule = (function(){

    // private variables
    
    var value = 0;
    var memory = 0;
    var total = 0;
    var operator = null;

    var equationArr = [];
    var valueStack = [];

    // getters
    
    function getValue1() {
        return value;
    }

    function getMemory() {
        return memory;
    }

    function getOperator() {
        return operator;
    }

    function getEquationArr() {
        return equationArr;
    }

    // parse equationArr, and convert to reverse polish notation: 2+3*4-3 => 234*+3-

    function parseEquationArr() {
        var operatorStack = [];
        var valueStack = [];
        var isOperPushReady = false;

        var finalStack = [];

        // tokenize operators
        var precedence = {
            '*': 2,
            '/': 2,
            '+': 1,
            '-': 1
        }

        // convert to reverse polish notation
        equationArr.forEach(function(element){
            if (typeof element === 'number') { // this is a number
                valueStack.push(element);
                if(isOperPushReady){
                    valueStack = valueStack.concat(operatorStack.reverse());
                    operatorStack = [];
                    isOperPushReady = false;
                  }
            } else{ // this is an operator ** need to debug for '.'
                operatorStack.push(element);
                if (operatorStack.length !== 1 && (precedence[element] >= precedence[operatorStack.slice(-2)[0]])){
                    isOperPushReady = true;
                }
            }  
        });

        valueStack = valueStack.concat(operatorStack);
        console.log(valueStack);

        var resultStack = [];

        for (i=0; i<valueStack.length; i++){
            if (typeof valueStack[i] === 'number'){
                resultStack.push(valueStack[i]);
            }else {
                var num1 = resultStack.pop();
                var num2 = resultStack.pop();
                if (valueStack[i] === '+') {
                    resultStack.push(num1 + num2);
                } else if (valueStack[i] === '-'){
                    resultStack.push(num1 - num2);
                } else if (valueStack[i] === '*'){
                    resultStack.push(num1 * num2);
                } else if (valueStack[i] === '/') {
                    resultStack.push(num1 / num2);
                }
            }
        }
        if (resultStack.length > 1) {
            return 'error';
        } else {
            return resultStack.pop();
        }

    // ** DEBUG ** //

    }

    function getFinalResult(x){
        finalResult = x;
        return finalResult;
    }

    // setters

    function setValue1(x) {
        value = x;
    }

    function setMemory(x) {
        memory = x;
    }

    function setOperator(x) {
        operator = x;
        return operator;
    }

    function setEquationArr(num, op) {
        if (op !== '='){
            equationArr.push(num, op);
        }else{
            equationArr.push(num);
        }
        
    }

    return {
        setValue1: setValue1,
        getValue1: getValue1,
        setMemory: setMemory,
        getMemory: getMemory,
        setOperator: setOperator,
        getOperator: getOperator,
        setEquationArr: setEquationArr,
        getEquationArr: getEquationArr,
        parseEquationArr: parseEquationArr,
        getFinalResult: getFinalResult
    }

}());

// start display at 0
var display = document.getElementById('screen');
display.innerHTML = 0;



//** NUMBER EVENTS **//


// target number buttons
var targetNum = document.getElementsByClassName('num-btns');


// append '1' into display and store in 'value'
var oneBtn = targetNum[0];
oneBtn.addEventListener('click', loadValue1);
var oneBtnValue = parseInt(oneBtn.innerHTML);

function loadValue1(){

    if (display.innerHTML === '0'){
        display.innerHTML = oneBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = oneBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = oneBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = oneBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = oneBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = oneBtnValue;
    } else{
        display.innerHTML += oneBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '2' into display and store in 'value 1'
var twoBtn = targetNum[1];
twoBtn.addEventListener('click', loadValue2);
var twoBtnValue = parseInt(twoBtn.innerHTML);

function loadValue2(){

    if (display.innerHTML === '0'){
        display.innerHTML = twoBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = twoBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = twoBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = twoBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = twoBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = twoBtnValue;
    } else{
        display.innerHTML += twoBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '3' into display and store in 'value 1'
var threeBtn = targetNum[2];
threeBtn.addEventListener('click', loadValue3);
var threeBtnValue = parseInt(threeBtn.innerHTML);

function loadValue3(){

    if (display.innerHTML === '0'){
        display.innerHTML = threeBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = threeBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = threeBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = threeBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = threeBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = threeBtnValue;
    } else{
        display.innerHTML += threeBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '4' into display and store in 'value 1'
var fourBtn = targetNum[3];
fourBtn.addEventListener('click', loadValue4);
var fourBtnValue = parseInt(fourBtn.innerHTML);

function loadValue4(){

    if (display.innerHTML === '0'){
        display.innerHTML = fourBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = fourBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = fourBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = fourBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = fourBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = fourBtnValue;
    } else{
        display.innerHTML += fourBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '5' into display and store in 'value 1'
var fiveBtn = targetNum[4];
fiveBtn.addEventListener('click', loadValue5);
var fiveBtnValue = parseInt(fiveBtn.innerHTML);

function loadValue5(){

    if (display.innerHTML === '0'){
        display.innerHTML = fiveBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = fiveBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = fiveBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = fiveBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = fiveBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = fiveBtnValue;
    } else{
        display.innerHTML += fiveBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '6' into display and store in 'value 1'
var sixBtn = targetNum[5];
sixBtn.addEventListener('click', loadValue6);
var sixBtnValue = parseInt(sixBtn.innerHTML);

function loadValue6(){

    if (display.innerHTML === '0'){
        display.innerHTML = sixBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = sixBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = sixBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = sixBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = sixBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = sixBtnValue;
    } else{
        display.innerHTML += sixBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '7' into display and store in 'value 1'
var sevenBtn = targetNum[6];
sevenBtn.addEventListener('click', loadValue7);
var sevenBtnValue = parseInt(sevenBtn.innerHTML);

function loadValue7(){

    if (display.innerHTML === '0'){
        display.innerHTML = sevenBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = sevenBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = sevenBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = sevenBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = sevenBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = sevenBtnValue;
    } else{
        display.innerHTML += sevenBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '8' into display and store in 'value 1'
var eightBtn = targetNum[7];
eightBtn.addEventListener('click', loadValue8);
var eightBtnValue = parseInt(eightBtn.innerHTML);

function loadValue8(){

    if (display.innerHTML === '0'){
        display.innerHTML = eightBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = eightBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = eightBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = eightBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = eightBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = eightBtnValue;
    } else{
        display.innerHTML += eightBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '9' into display and store in 'value 1'
var nineBtn = targetNum[8];
nineBtn.addEventListener('click', loadValue9);
var nineBtnValue = parseInt(nineBtn.innerHTML);

function loadValue9(){

    if (display.innerHTML === '0'){
        display.innerHTML = nineBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = nineBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = nineBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = nineBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = nineBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = nineBtnValue;
    } else{
        display.innerHTML += nineBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '0' into display and store in 'value 1'
var zeroBtn = targetNum[9];
zeroBtn.addEventListener('click', loadValue0);
var zeroBtnValue = parseInt(zeroBtn.innerHTML);

function loadValue0(){

    if (display.innerHTML === '0'){
        display.innerHTML = zeroBtnValue;
    } else if(display.innerHTML === '+'){
        display.innerHTML = zeroBtnValue;
    } else if(display.innerHTML === '-'){
        display.innerHTML = zeroBtnValue;
    } else if(display.innerHTML === '*'){
        display.innerHTML = zeroBtnValue;
    } else if(display.innerHTML === '/'){
        display.innerHTML = zeroBtnValue;
    } else if(display.innerHTML === 'ON'){
        display.innerHTML = zeroBtnValue;
    } else{
        display.innerHTML += zeroBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '.' into display and store in 'value 1'
var decmBtn = targetNum[10];
decmBtn.addEventListener('click', loadValueDecm);
var decmBtnValue = decmBtn.innerHTML;

function loadValueDecm(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = decmBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += decmBtnValue;
    } else if (display.innerHTML != value){
        display.innerHTML += decmBtnValue;
    } else{
        display.innerHTMl = decmBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML)); //**NEED TO DEBUG FOR DECIMAL PLACES**//
    console.log(calculatorModule.getValue1());
}


//** OPERATOR EVENTS **//


var opBtn = document.getElementsByClassName('op-btns');


// add event for '+' operator
var addBtn = opBtn[0];
addBtn.addEventListener('click', setAdd);
var addBtnValue = addBtn.innerHTML;

function setAdd(){
    display.innerHTML = addBtnValue;
    calculatorModule.getValue1();
    calculatorModule.setMemory(calculatorModule.getValue1());
    calculatorModule.setOperator('+');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    console.log(calculatorModule.getEquationArr());
}


// add event for '-' operator
var subtBtn = opBtn[1];
subtBtn.addEventListener('click', setSubt);
var subtBtnValue = subtBtn.innerHTML;

function setSubt(){
    display.innerHTML = subtBtnValue;
    calculatorModule.getValue1();
    calculatorModule.setMemory(calculatorModule.getValue1());
    calculatorModule.setOperator('-');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    console.log(calculatorModule.getEquationArr());
}


// add event for '*' operator
var multBtn = opBtn[2];
multBtn.addEventListener('click', setMult);
var multBtnValue = multBtn.innerHTML;

function setMult(){
    display.innerHTML = multBtnValue;
    calculatorModule.getValue1();
    calculatorModule.setMemory(calculatorModule.getValue1());
    calculatorModule.setOperator('*');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    console.log(calculatorModule.getEquationArr());
}


// add event for '/' operator
var divdBtn = opBtn[4];
divdBtn.addEventListener('click', setDivd);
var divdBtnValue = divdBtn.innerHTML;

function setDivd(){
    display.innerHTML = divdBtnValue;
    calculatorModule.getValue1();
    calculatorModule.setMemory(calculatorModule.getValue1());
    calculatorModule.setOperator('/');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    console.log(calculatorModule.getEquationArr());
}


// add event for '=' operator
var equalBtn = opBtn[3];
equalBtn.addEventListener('click', evaluate);
var equalBtnValue = equalBtn.innerHTML;

function evaluate(){
    calculatorModule.setOperator('=');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    calculatorModule.getEquationArr();
    calculatorModule.parseEquationArr();
    console.log(calculatorModule.getFinalResult(calculatorModule.parseEquationArr()));
    display.innerHTML = calculatorModule.getFinalResult(calculatorModule.parseEquationArr());
}


//** MAIN BUTTONS **/


// clear button
var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearScreen);

function clearScreen(){
    display.innerHTML = '0';
    memory = 0;
}

var offBtn = document.getElementById('off-btn');
offBtn.addEventListener('click', turnOff);

function turnOff(){
    display.innerHTML = 'OFF';
    display.style.backgroundColor = 'black';
    display.style.border = 'solid gray 2px'
}

var onBtn = document.getElementById('on-btn');
onBtn.addEventListener('click', turnOn);

function turnOn(){
    display.innerHTML = 'ON';
    display.style.backgroundColor = '#86DE95';
    display.style.border = 'solid black 2px'

}