var calculatorModule = (function(){

    // private variables
    
    var value = 0;
    var memory = 0;
    var total = 0;
    var operator = null;

    var equationArr = [];

    // getters
    
    function getValue1() {
        return Number.parseFloat(value).toFixed(2)
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

    function parseEquationArr() {

        // account for daisy chained equations
        for (i=0; i<equationArr.length; i++){
            if (equationArr[i] === 'NaN'){
                result = equationArr[i];
                indexResult = equationArr.indexOf(result);
                equationArr.splice(indexResult, 1);
                return equationArr;
            }
        }
        // multiply
        for (i=0; i<equationArr.length; i++){
            if (equationArr[i] === '*'){
                var num1 = Number.parseFloat(equationArr[i-1]).toFixed(2)
                var num2 = Number.parseFloat(equationArr[i+1]).toFixed(2)
                equationArr[i] = (num1 * num2).toFixed(2);
                result = equationArr[i];
                indexResult = equationArr.indexOf(result);
                equationArr.splice(indexResult -1, 3, result);
                return equationArr;
            }
        }
        // divide
        for (i=0; i<equationArr.length; i++){
            if (equationArr[i] === '/'){
                var num1 = (Number.parseFloat(equationArr[i-1]).toFixed(2))
                var num2 = (Number.parseFloat(equationArr[i+1]).toFixed(2))
                equationArr[i] = (num1 / num2).toFixed(2);
                result = equationArr[i];
                indexResult = equationArr.indexOf(result);
                equationArr.splice(indexResult -1, 3, result);
                return equationArr;
            }
        }
        // add
        for (i=0; i<equationArr.length; i++){
            if (equationArr[i] === '+'){
                var num1 = (Number.parseFloat(equationArr[i-1]))
                var num2 = (Number.parseFloat(equationArr[i+1]))
                equationArr[i] = (num1 += num2).toFixed(2);
                result = equationArr[i];
                indexResult = equationArr.indexOf(result);
                equationArr.splice(indexResult -1, 3, result);
                return equationArr;
            }
        }
        console.log(equationArr);

        // subtract
        for (i=0; i<equationArr.length; i++){
            if (equationArr[i] === '-'){
                var num1 = (Number.parseFloat(equationArr[i-1]).toFixed(2))
                var num2 = (Number.parseFloat(equationArr[i+1]).toFixed(2))
                equationArr[i] = (num1 - num2).toFixed(2);
                result = equationArr[i];
                indexResult = equationArr.indexOf(result);
                equationArr.splice(indexResult -1, 3, result);
                return equationArr;
            }
        }
        console.log(equationArr);
    }

    function getFinalResult(x){
        finalResult = x;
        memory = finalResult;
        console.log(equationArr); // keep track of final result
        return equationArr;
    }

    // setters

    function setValue1(x) {
        value = x;
        return value;
    }

    function daisyChain() {
        value = null;
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
        getFinalResult: getFinalResult,
        daisyChain: daisyChain
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = oneBtnValue;
    } else{
        display.innerHTML += oneBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof input);
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = twoBtnValue;
    } else{
        display.innerHTML += twoBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
        display.innerHTML = 'CLEAR SCREEN';
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = threeBtnValue;
    } else{
        display.innerHTML += threeBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
        display.innerHTML = 'CLEAR SCREEN';
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = fourBtnValue;
    } else{
        display.innerHTML += fourBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = fiveBtnValue;
    } else{
        display.innerHTML += fiveBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = sixBtnValue;
    } else{
        display.innerHTML += sixBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = sevenBtnValue;
    } else{
        display.innerHTML += sevenBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = eightBtnValue;
    } else{
        display.innerHTML += eightBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = nineBtnValue;
    } else{
        display.innerHTML += nineBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof parseInt(input));
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
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
    } else if(display.innerHTML === 'OFF'){
        display.innerHTML = 'OFF';
    } else if(display.innerHTML === registerModule.checkBalance().toString()){
        display.innerHTML = zeroBtnValue;
    } else{
        display.innerHTML += zeroBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof input);
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
    console.log(calculatorModule.getValue1());
}

// append '.' into display and store in 'value 1'
var decmBtn = targetNum[10];
decmBtn.addEventListener('click', loadValueDecm);
var decmBtnValue = decmBtn.innerHTML;

function loadValueDecm(){

    if (display.innerHTML === '0'){
        display.innerHTML += decmBtnValue;
    } else{
        display.innerHTML += decmBtnValue;
    }
    var x = display.innerHTML;
    console.log(x);
    var input = parseInt(Number.parseFloat(x).toFixed(2));
    console.log(typeof input);
    calculatorModule.setValue1(Number.parseFloat(x).toFixed(2));
    console.log(calculatorModule.getValue1());
}

//** OPERATOR EVENTS **//

// target op-btns with DOM
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
    // evaluate calculation, and show in display
    calculatorModule.setOperator('=');
    calculatorModule.setEquationArr(calculatorModule.getValue1(), calculatorModule.getOperator());
    calculatorModule.getEquationArr();
    calculatorModule.parseEquationArr();
    console.log(calculatorModule.getFinalResult(calculatorModule.parseEquationArr()));
    display.innerHTML = calculatorModule.getFinalResult(calculatorModule.parseEquationArr());
    calculatorModule.setMemory(calculatorModule.getFinalResult(calculatorModule.parseEquationArr()));
    calculatorModule.daisyChain();

}