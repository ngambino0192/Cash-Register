var calculatorModule = (function(){

    // private variables
    
    var value1 = 0;
    var memory = 0;
    var value2 = 0;
    var total = 0;
    var operator = null;

    // getters
    
    function getValue1() {
        return value1;
    }

    function getMemory() {
        return memory;
    }

    function getValue2() {
        return num2;
    }

    function getOperator() {
        return operator;
    }

    function execute() {
        switch (operator){
            case '+':
                total = value1 + memory;
                break;
            case '-':
                total = memory - value1;
                break;
            case '*':
                total = memory * value1;
                break;
            case '/':
                total = memory / value1;
                break;
        }
        return total;
    }

    // setters

    function setValue1(x) {
        value1 = x;
    }

    function setMemory(x) {
        memory = x;
    }

    function setValue2(y) {
        num2 = y;
    }

    function setOperator(z) {
        operator = z; // set new operator
        memory = value1; // set current value1 into memory
        // console.log(memory);
        value1 = 0; // clear value1
        return operator;
    }

    return {
        setValue1: setValue1,
        getValue1: getValue1,
        setMemory: setMemory,
        getMemory: getMemory,
        setValue2: setValue2,
        getValue2: getValue2,
        execute: execute,
        setOperator: setOperator,
        getOperator: getOperator
    }

}());

// set display to 0
var display = document.getElementById('screen');
display.innerHTML = 0;

//** NUMBER EVENTS **//


// target number buttons
var targetNum = document.getElementsByClassName('num-btns');


// append '1' into display and store in 'value1'
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
    } else if (display.innerHTML != value1){
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
    console.log(display.innerHTML);
    calculatorModule.getValue1();
    console.log(calculatorModule.getValue1());
    calculatorModule.setMemory(calculatorModule.getValue1());
    calculatorModule.setOperator('+');
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
}

var equalBtn = opBtn[3];
equalBtn.addEventListener('click', evaluate);
var equalBtnValue = equalBtn.innerHTML;

function evaluate(){
    calculatorModule.getMemory();
    calculatorModule.getOperator();
    calculatorModule.getValue1();
    calculatorModule.execute();
    display.innerHTML = calculatorModule.execute();
    calculatorModule.setMemory(calculatorModule.execute());
    console.log(calculatorModule.getMemory());
    calculatorModule.setValue1(calculatorModule.getMemory());
}


//** MAIN BUTTONS **/


// clear button
var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearScreen);

function clearScreen(){
    display.innerHTML = '0';
}











//     // add functionality    
//     var add = document.getElementById('addBtn');
//     add.addEventListener('click', addition);

//     function addition(){
//         document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
//         memory = parseInt(screenNumber.innerHTML);
//         operator = '+';
//         // console.log(memory);
//         // console.log(operator);
//         equationArr.push(memory, operator);
//         // console.log(equationArr);

//     }



//     // subtract functionality
//     var sub = document.getElementById('subBtn');
//     sub.addEventListener('click', subtract);

//     function subtract(){
//         document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
//         memory = parseInt(screenNumber.innerHTML);
//         operator = '-';
//         // console.log(memory);
//         // console.log(operator);
//         equationArr.push(memory, operator);
//         // console.log(equationArr);
//     }



//     // multiply functionality
//     var mult = document.getElementById('multBtn');
//     mult.addEventListener('click', multiply);

//     function multiply(){
//         document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
//         memory = parseInt(screenNumber.innerHTML);
//         operator = '*';
//         // console.log(memory);
//         // console.log(operator);
//         equationArr.push(memory, operator);
//         // console.log(equationArr);
//     }



//     // divide functionality
//     var divd = document.getElementById('divdBtn');
//     divd.addEventListener('click', divide);

//     function divide(){
//         document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
//         memory = parseInt(screenNumber.innerHTML);
//         operator = '/';
//         // console.log(memory);
//         // console.log(operator);
//         equationArr.push(memory, operator);
//         // console.log(equationArr);
//     }

    
    
//     // execute equation
//     var equals = document.getElementById('equalsBtn');
//     equals.addEventListener('click', finalizeEquation);

//     function finalizeEquation(){
//         document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
//         memory = parseInt(screenNumber.innerHTML);
//         // console.log(memory);
//         equationArr.push(memory);
//         // console.log(equationArr);
//         screenNumber.innerHTML = equationArr.join('');
//         var result = parseInt(equationArr.join(''));
//         console.log(typeof result);
//         return result;
//     }





















    // turn off register
    // var off = document.getElementById('off-btn');
    // off.addEventListener('click', offScreen);

    // function offScreen(){
    //     // console.log('off-btn working');
    //     document.getElementById('screen').innerHTML = 'off';
    // }



    // turn on register
    // var on = document.getElementById('on-btn');
    // on.addEventListener('click', onScreen);

    // function onScreen(){
    //     // console.log('on-btn working');
    //     document.getElementById('screen').innerHTML = 'on';
    // }