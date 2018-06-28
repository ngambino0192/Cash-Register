// var sanityCheck = 'sanity';
// console.log(sanityCheck);

var registerModule = (function(){

    var cashBalance = 

    //getters
    
    function checkBalance() {
        return cashBalance;
    }

    function withdraw(x) {
        if (x > cashBalance){
            display.innerHTML = 'deposit more funds'
        }else{
        cashBalance = cashBalance - x;
        }
    }

    //setters

    function deposit(x) {
        cashBalance = x + cashBalance;
    }  

    //methods

    return {
        checkBalance: checkBalance,
        deposit: deposit,
        withdraw: withdraw,
    }

}());

//** REGISTER FUNCTIONS **//

// target reg-btns with DOM
var regBtn = document.getElementsByClassName('reg-btns');


// add event to 'check balance' button
var checkBlc = regBtn[0];
checkBlc.addEventListener('click', checkBalance);

function checkBalance(){
    display.innerHTML = registerModule.checkBalance();
    console.log('current balance: ' + registerModule.checkBalance());
};

// add event to 'withdraw' button
var withdrawBtn = regBtn[1];
withdrawBtn.addEventListener('click', withdraw);

function withdraw(){
    console.log('withdraw');
    registerModule.withdraw(calculatorModule.getValue1());

};

// add event to 'deposit' button
var depositBtn = regBtn[2];
depositBtn.addEventListener('click', deposit);

function deposit(){
    console.log('deposit made');
    registerModule.deposit(parseInt(display.innerHTML));
    console.log('current balance: ' + registerModule.checkBalance());

};


//** TOP BUTTONS **/


// clear button
var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearScreen);

function clearScreen(){
    console.log('CLEAR')
    location.reload();


}

var offBtn = document.getElementById('off-btn');
offBtn.addEventListener('click', turnOff);

function turnOff(){
    display.innerHTML = 'OFF';

    oneBtn.removeEventListener('click', loadValue1);
    twoBtn.removeEventListener('click', loadValue1);
    threeBtn.removeEventListener('click', loadValue1);
    fourBtn.removeEventListener('click', loadValue1);
    fiveBtn.removeEventListener('click', loadValue1);
    sixBtn.removeEventListener('click', loadValue1);
    sevenBtn.removeEventListener('click', loadValue1);
    eightBtn.removeEventListener('click', loadValue1);
    nineBtn.removeEventListener('click', loadValue1);
    zeroBtn.removeEventListener('click', loadValue1);
    decmBtn.removeEventListener('click', loadValue1);
    checkBlc.removeEventListener('click', checkBalance);
    withdrawBtn.removeEventListener('click', withdraw);
    depositBtn.removeEventListener('click', deposit);
    addBtn.removeEventListener('click', setAdd);
    subtBtn.removeEventListener('click', setSubt);
    multBtn.removeEventListener('click', setMult);
    divdBtn.removeEventListener('click', setDivd);
    equalBtn.removeEventListener('click', evaluate);
    clearBtn.removeEventListener('click', clearScreen);
}

var onBtn = document.getElementById('on-btn');
onBtn.addEventListener('click', turnOn);

function turnOn(){
    display.innerHTML = 'ON';
    offBtn.removeEventListener('click', offBtn);

    oneBtn.addEventListener('click', loadValue1);
    twoBtn.addEventListener('click', loadValue2);
    threeBtn.addEventListener('click', loadValue3);
    fourBtn.addEventListener('click', loadValue4);
    fiveBtn.addEventListener('click', loadValue5);
    sixBtn.addEventListener('click', loadValue6);
    sevenBtn.addEventListener('click', loadValue7);
    eightBtn.addEventListener('click', loadValue8);
    nineBtn.addEventListener('click', loadValue9);
    zeroBtn.addEventListener('click', loadValue0);
    decmBtn.addEventListener('click', loadValueDecm);
    checkBlc.addEventListener('click', checkBalance);
    withdrawBtn.addEventListener('click', withdraw);
    depositBtn.addEventListener('click', deposit);
    addBtn.addEventListener('click', setAdd);
    subtBtn.addEventListener('click', setSubt);
    multBtn.addEventListener('click', setMult);
    divdBtn.addEventListener('click', setDivd);
    equalBtn.addEventListener('click', evaluate);
    clearBtn.addEventListener('click', clearScreen);
}