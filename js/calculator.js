calculatorModule = (function(){

    // begin screen at 0
    var screenNumber = document.getElementById('screen');
    screenNumber.innerHTML = 0;
    // console.log(screenNumber.innerHTML);

    var memory = 0;
    var operator = null;
    var total = 0;

    var equationArr = [];



    // turn off register
    var off = document.getElementById('off-btn');
    off.addEventListener('click', offScreen);

    function offScreen(){
        console.log('off-btn working');
        document.getElementById('screen').innerHTML = 'off';
    }



    // turn on register
    var on = document.getElementById('on-btn');
    on.addEventListener('click', onScreen);

    function onScreen(){
        console.log('on-btn working');
        document.getElementById('screen').innerHTML = 'on';
    }



    // add functionality    
    var add = document.getElementById('addBtn');
    add.addEventListener('click', addition);

    function addition(){
        document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
        memory = parseInt(screenNumber.innerHTML);
        operator = '+';
        // console.log(memory);
        // console.log(operator);
        equationArr.push(memory, operator);
        console.log(equationArr);

    }



    // subtract functionality
    var sub = document.getElementById('subBtn');
    sub.addEventListener('click', subtract);

    function subtract(){
        document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
        memory = parseInt(screenNumber.innerHTML);
        operator = '-';
        console.log(memory);
        console.log(operator);
        equationArr.push(memory, operator);
        console.log(equationArr);
    }



    // multiply functionality
    var mult = document.getElementById('multBtn');
    mult.addEventListener('click', multiply);

    function multiply(){
        document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
        memory = parseInt(screenNumber.innerHTML);
        operator = '*';
        console.log(memory);
        console.log(operator);
        equationArr.push(memory, operator);
        console.log(equationArr);
    }



    // divide functionality
    var divd = document.getElementById('divdBtn');
    divd.addEventListener('click', divide);

    function divide(){
        document.getElementById('screen').innerHTML = + screenNumber.innerHTML;
        memory = parseInt(screenNumber.innerHTML);
        operator = '/';
        console.log(memory);
        console.log(operator);
        equationArr.push(memory, operator);
        console.log(equationArr);
    }



    var numList = document.getElementsByClassName('mini-btns');
    
    var numListOne = numList[0];
    numListOne.addEventListener('click', appendNum1);

    function appendNum1(){
        console.log(typeof screenNumber.innerHTML);
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListOne.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListOne.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListOne.innerHTML;
        } else{
            screenNumber.innerHTML = numListOne.innerHTML; 
        }
    }



    var numListTwo = numList[1];
    numListTwo.addEventListener('click', appendNum2);

    function appendNum2(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListTwo.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListTwo.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListTwo.innerHTML;
        } else{
            screenNumber.innerHTML = numListTwo.innerHTML;
        }
    }

    var numListThree = numList[2];
    numListThree.addEventListener('click', appendNum3);

    function appendNum3(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListThree.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListThree.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListThree.innerHTML;
        } else{
            screenNumber.innerHTML = numListThree.innerHTML;
        }
    }

    var numListFour = numList[3];
    numListFour.addEventListener('click', appendNum4);

    function appendNum4(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListFour.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListFour.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListFour.innerHTML;
        } else{
            screenNumber.innerHTML = numListFour.innerHTML;
        }
    }

    var numListFive = numList[4];
    numListFive.addEventListener('click', appendNum5);

    function appendNum5(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListFive.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListFive.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListFive.innerHTML;
        } else{
            screenNumber.innerHTML = numListFive.innerHTML;
        }
    }

    var numListSix = numList[5];
    numListSix.addEventListener('click', appendNum6);

    function appendNum6(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListSix.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListSix.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListSix.innerHTML;
        } else{
            screenNumber.innerHTML = numListSix.innerHTML;
        }
    }

    var numListSeven = numList[6];
    numListSeven.addEventListener('click', appendNum7);

    function appendNum7(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListSeven.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListSeven.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListSeven.innerHTML;
        } else{
            screenNumber.innerHTML = numListSeven.innerHTML;
        }
    }

    var numListEight = numList[7];
    numListEight.addEventListener('click', appendNum8);

    function appendNum8(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListEight.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListEight.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListEight.innerHTML;
        } else{
            screenNumber.innerHTML = numListEight.innerHTML;
        }
    }

    var numListNine = numList[8];
    numListNine.addEventListener('click', appendNum9);

    function appendNum9(){
        console.log('appendNum working');
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListNine.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListNine.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListNine.innerHTML;
        } else{
            screenNumber.innerHTML = numListNine.innerHTML;
        }
    }

    var numListZero = numList[9];
    numListZero.addEventListener('click', appendNum0);

    function appendNum0(){
        console.log('appendNum working');
        console.log(numListZero.innerHTML);
        // screenNumber.innerHTML += numListZero.innerHTML;
        if (screenNumber.innerHTML === '0' && operator === null){
            screenNumber.innerHTML = numListZero.innerHTML;
        } else if (operator === null){
            screenNumber.innerHTML += numListZero.innerHTML;
        } else if (screenNumber.innerHTML != memory){
            screenNumber.innerHTML += numListZero.innerHTML;
        } else{
            screenNumber.innerHTML = numListZero.innerHTML;
        }
    }

    var numListDecimal = numList[10];
    numListDecimal.addEventListener('click', appendNumDec);

    function appendNumDec(){
        console.log('appendNum working');
        screenNumber.innerHTML += numListDecimal.innerHTML
    }



    // clear register
    var clear = document.getElementById('clear-btn');
    clear.addEventListener('click', clearScreen);

    function clearScreen(){
        console.log('clearScreen working');
        location.reload();
    }

}());