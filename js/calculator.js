var calculatorModule = (function(){

    // private variables
    
    var value1 = 0;
    var value2 = 0;
    var total = 0;
    var operator = null;

    // getters
    
    function getValue1() {
        return num1;
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
                total = num1 + num2;
                break;
            case '-':
                total = num1 - num2;
                break;
            case '*':
                total = num1 * num2;
                break;
            case '/':
                total = num1 / num2;
                break;
        }
        return total;
    }

    // setters

    function setValue1(x) {
        num1 = x;
    }

    function setValue2(y) {
        num2 = y;
    }

    function setOperator(z) {
        operator = z;
        return operator;
    }

    return {
        setValue1: setValue1,
        getValue1: getValue1,
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

// target number buttons
var targetNum = document.getElementsByClassName('num-btns');


// append '1' into display and store in 'value1'
var oneBtn = targetNum[0];
oneBtn.addEventListener('click', loadValue1);
var oneBtnValue = parseInt(oneBtn.innerHTML);

function loadValue1(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = oneBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += oneBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += oneBtnValue;
    } else{
        display.innerHTMl = oneBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '2' into display and store in 'value 1'
var twoBtn = targetNum[1];
twoBtn.addEventListener('click', loadValue2);
var twoBtnValue = parseInt(twoBtn.innerHTML);

function loadValue2(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = twoBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += twoBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += twoBtnValue;
    } else{
        display.innerHTMl = twoBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '3' into display and store in 'value 1'
var threeBtn = targetNum[2];
threeBtn.addEventListener('click', loadValue3);
var threeBtnValue = parseInt(threeBtn.innerHTML);

function loadValue3(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = threeBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += threeBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += threeBtnValue;
    } else{
        display.innerHTMl = threeBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '4' into display and store in 'value 1'
var fourBtn = targetNum[3];
fourBtn.addEventListener('click', loadValue4);
var fourBtnValue = parseInt(fourBtn.innerHTML);

function loadValue4(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = fourBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += fourBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += fourBtnValue;
    } else{
        display.innerHTMl = fourBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '5' into display and store in 'value 1'
var fiveBtn = targetNum[4];
fiveBtn.addEventListener('click', loadValue5);
var fiveBtnValue = parseInt(fiveBtn.innerHTML);

function loadValue5(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = fiveBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += fiveBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += fiveBtnValue;
    } else{
        display.innerHTMl = fiveBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '6' into display and store in 'value 1'
var sixBtn = targetNum[5];
sixBtn.addEventListener('click', loadValue6);
var sixBtnValue = parseInt(sixBtn.innerHTML);

function loadValue6(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = sixBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += sixBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += sixBtnValue;
    } else{
        display.innerHTMl = sixBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '7' into display and store in 'value 1'
var sevenBtn = targetNum[6];
sevenBtn.addEventListener('click', loadValue7);
var sevenBtnValue = parseInt(sevenBtn.innerHTML);

function loadValue7(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = sevenBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += sevenBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += sevenBtnValue;
    } else{
        display.innerHTMl = sevenBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '8' into display and store in 'value 1'
var eightBtn = targetNum[7];
eightBtn.addEventListener('click', loadValue8);
var eightBtnValue = parseInt(eightBtn.innerHTML);

function loadValue8(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = eightBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += eightBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += eightBtnValue;
    } else{
        display.innerHTMl = eightBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '9' into display and store in 'value 1'
var nineBtn = targetNum[8];
nineBtn.addEventListener('click', loadValue9);
var nineBtnValue = parseInt(nineBtn.innerHTML);

function loadValue9(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML = nineBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += nineBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += nineBtnValue;
    } else{
        display.innerHTMl = nineBtnValue;
    }
    calculatorModule.setValue1(parseInt(display.innerHTML));
    console.log(calculatorModule.getValue1());
}


// append '0' into display and store in 'value 1'
var zeroBtn = targetNum[9];
zeroBtn.addEventListener('click', loadValue0);
var zeroBtnValue = parseInt(zeroBtn.innerHTML);

function loadValue0(){

    if (display.innerHTML === '0' && calculatorModule.getOperator() === null){
        display.innerHTML += zeroBtnValue;
    } else if(calculatorModule.getOperator() === null){
        display.innerHTML += zeroBtnValue;
    } else if (display.innerHTML != value1){
        display.innerHTML += zeroBtnValue;
    } else{
        display.innerHTMl += zeroBtnValue;
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

// var numListZero = targetNum[9];
// numListZero.addEventListener('click', appendNum0);

// function appendNum0(){
//     // console.log('appendNum working');
//     // console.log(numListZero.innerHTML);
//     // screenNumber.innerHTML += numListZero.innerHTML;
//     if (screenNumber.innerHTML === '0' && operator === null){
//         screenNumber.innerHTML = numListZero.innerHTML;
//     } else if (operator === null){
//         screenNumber.innerHTML += numListZero.innerHTML;
//     } else if (screenNumber.innerHTML != memory){
//         screenNumber.innerHTML += numListZero.innerHTML;
//     } else{
//         screenNumber.innerHTML = numListZero.innerHTML;
//     }
// }







// calculatorModule.setValue1(oneBtnValue);
// console.log(calculatorModule.getValue1());

    // var numListOne = numList[0];
    // numListOne.addEventListener('click', appendNum1);

    // function appendNum1(){
    //     // console.log(typeof screenNumber.innerHTML);
    //     if (screenNumber.innerHTML === '0' && operator === null){
    //         screenNumber.innerHTML = numListOne.innerHTML;
    //     } else if (operator === null){
    //         screenNumber.innerHTML += numListOne.innerHTML;
    //     } else if (screenNumber.innerHTML != memory){
    //         screenNumber.innerHTML += numListOne.innerHTML;
    //     } else{
    //         screenNumber.innerHTML = numListOne.innerHTML; 
    //     }
    // }













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



//     var numList = document.getElementsByClassName('mini-btns');
    
//     var numListOne = numList[0];
//     numListOne.addEventListener('click', appendNum1);

//     function appendNum1(){
//         // console.log(typeof screenNumber.innerHTML);
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListOne.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListOne.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListOne.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListOne.innerHTML; 
//         }
//     }



//     var numListTwo = numList[1];
//     numListTwo.addEventListener('click', appendNum2);

//     function appendNum2(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListTwo.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListTwo.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListTwo.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListTwo.innerHTML;
//         }
//     }

//     var numListThree = numList[2];
//     numListThree.addEventListener('click', appendNum3);

//     function appendNum3(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListThree.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListThree.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListThree.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListThree.innerHTML;
//         }
//     }

//     var numListFour = numList[3];
//     numListFour.addEventListener('click', appendNum4);

//     function appendNum4(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListFour.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListFour.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListFour.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListFour.innerHTML;
//         }
//     }

//     var numListFive = numList[4];
//     numListFive.addEventListener('click', appendNum5);

//     function appendNum5(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListFive.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListFive.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListFive.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListFive.innerHTML;
//         }
//     }

//     var numListSix = numList[5];
//     numListSix.addEventListener('click', appendNum6);

//     function appendNum6(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListSix.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListSix.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListSix.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListSix.innerHTML;
//         }
//     }

//     var numListSeven = numList[6];
//     numListSeven.addEventListener('click', appendNum7);

//     function appendNum7(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListSeven.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListSeven.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListSeven.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListSeven.innerHTML;
//         }
//     }

//     var numListEight = numList[7];
//     numListEight.addEventListener('click', appendNum8);

//     function appendNum8(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListEight.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListEight.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListEight.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListEight.innerHTML;
//         }
//     }

//     var numListNine = numList[8];
//     numListNine.addEventListener('click', appendNum9);

//     function appendNum9(){
//         // console.log('appendNum working');
//         if (screenNumber.innerHTML === '0' && operator === null){
//             screenNumber.innerHTML = numListNine.innerHTML;
//         } else if (operator === null){
//             screenNumber.innerHTML += numListNine.innerHTML;
//         } else if (screenNumber.innerHTML != memory){
//             screenNumber.innerHTML += numListNine.innerHTML;
//         } else{
//             screenNumber.innerHTML = numListNine.innerHTML;
//         }
//     }

    // var numListZero = numList[9];
    // numListZero.addEventListener('click', appendNum0);

    // function appendNum0(){
    //     // console.log('appendNum working');
    //     // console.log(numListZero.innerHTML);
    //     // screenNumber.innerHTML += numListZero.innerHTML;
    //     if (screenNumber.innerHTML === '0' && operator === null){
    //         screenNumber.innerHTML = numListZero.innerHTML;
    //     } else if (operator === null){
    //         screenNumber.innerHTML += numListZero.innerHTML;
    //     } else if (screenNumber.innerHTML != memory){
    //         screenNumber.innerHTML += numListZero.innerHTML;
    //     } else{
    //         screenNumber.innerHTML = numListZero.innerHTML;
    //     }
    // }

//     var numListDecimal = numList[10];
//     numListDecimal.addEventListener('click', appendNumDec);

//     function appendNumDec(){
//         // console.log('appendNum working');
//         screenNumber.innerHTML += numListDecimal.innerHTML
//     }



//     // clear register
//     var clear = document.getElementById('clear-btn');
//     clear.addEventListener('click', clearScreen);

//     function clearScreen(){
//         // console.log('clearScreen working');
//         location.reload();
//     }

// }());

// var display = document.getElementById('screen');
// display.innerHTML = 0;





















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