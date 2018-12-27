 function calculator() {
    let firstNum = '';
    let operator = ''; 
    let secondNum = '';
    let lastClicked = '';


    const display = document.getElementsByClassName('display')[0];
    const getNumber = document.getElementsByClassName('number')
    const getClearButton = document.getElementsByClassName('clear')[0];
    const getPlusButton = document.getElementsByClassName('plusButton')[0];
    const getEqualsButton = document.getElementsByClassName('equalsButton')[0];
    const getMinusButton = document.getElementsByClassName('minusButton')[0];
    const getMultiplyButton = document.getElementsByClassName('multiplyButton')[0];
    const getDivideButton = document.getElementsByClassName('divideButton')[0];

    display.innerHTML = '$ 0.00';

    for (let i = 0; i < getNumber.length; i++) {
        getNumber[i].addEventListener('click', inputValue)
    }
    //should start a new value if display is at initial value or last clicked is operator or equals,
    //else it should concatenate the button value to the display
    function inputValue(value) {
        if (this.innerHTML === 'Get Balance') {
            display.innerHTML = '$ ' + value;
        //when starting a new value with '.', display should be '0.'
        } else if ((display.innerHTML === '$ 0.00' || lastClicked === 'operator' || lastClicked === 'equals') && this.innerHTML === '.') {
            display.innerHTML = '$ 0.';
            lastClicked = 'number';
        //when starting a new value the clicked button should replace display
        } else if (display.innerHTML === '$ 0.00' || lastClicked === 'operator' || lastClicked === 'equals') {
            display.innerHTML = '$ ' + this.innerHTML;
            lastClicked = 'number';
        // if the display already includes a decimal, clicking '.' should do nothing
        } else if (display.innerHTML.includes('.') && this.innerHTML === '.') {
            display.innerHTML = display.innerHTML;
        // if it is not the start of a new value, clicked button should be concatenated to display
        } else {
           display.innerHTML = display.innerHTML + this.innerHTML
        }
    }

    getClearButton.addEventListener('click', clearDisplay);
    function clearDisplay() {
        display.innerHTML = '$ 0.00';
        firstNum = '';
        secondNum = '';
        lastClicked = '';
        operator = '';
        getPlusButton.style.border = '1px solid gray';
        getMinusButton.style.border = '1px solid gray';
        getMultiplyButton.style.border = '1px solid gray';
        getDivideButton.style.border = '1px solid gray';
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
    }

    //Operator buttons should change the value of the operator variable to the appropriate value
    //They should calculate and display a value only if ...
    getPlusButton.addEventListener('click', add);
    function add() {
        if (firstNum !== '' && lastClicked !== 'operator' && lastClicked !== 'equals') {
            calculate();
        } else {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'add';
        this.style.border = '3px solid gray';
        getMinusButton.style.border = '1px solid gray';
        getMultiplyButton.style.border = '1px solid gray';
        getDivideButton.style.border = '1px solid gray';
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
    }

    getMinusButton.addEventListener('click', subtract);
    function subtract() {
        if (firstNum !== '' && lastClicked !== 'operator' && lastClicked !== 'equals') {
            calculate();
        } else {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'subtract';
        this.style.border = '3px solid gray';
        getPlusButton.style.border = '1px solid gray';
        getMultiplyButton.style.border = '1px solid gray';
        getDivideButton.style.border = '1px solid gray';
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
     }

    getMultiplyButton.addEventListener('click', multiply);
    function multiply() {
        if (firstNum !== '' && lastClicked !== 'operator' && lastClicked !== 'equals') {
            calculate();
        } else {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'multiply';
        this.style.border = '3px solid gray';
        getPlusButton.style.border = '1px solid gray';
        getMinusButton.style.border = '1px solid gray';
        getDivideButton.style.border = '1px solid gray';
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
     }

    getDivideButton.addEventListener('click', divide);
    function divide() {
        if (firstNum !== '' && lastClicked !== 'operator' && lastClicked !== 'equals') {
            calculate();
        } else {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'divide';
        this.style.border = '3px solid gray';
        getPlusButton.style.border = '1px solid gray';
        getMinusButton.style.border = '1px solid gray';
        getMultiplyButton.style.border = '1px solid gray';
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
    }

    getEqualsButton.addEventListener('click', calculate);
    function calculate() {
        if (lastClicked !== 'equals') {
        secondNum = parseFloat(display.innerHTML.replace('$ ',''));
        }

        if (operator === 'add') {
            display.innerHTML = '$ ' + (firstNum + secondNum);
            getPlusButton.style.border = '1px solid gray';
        } else if (operator === 'subtract'){
            display.innerHTML = '$ ' + (firstNum - secondNum);
            getMinusButton.style.border = '1px solid gray';
        } else if (operator === 'multiply'){
            display.innerHTML = '$ ' + (firstNum * secondNum);
            getMultiplyButton.style.border = '1px solid gray';
        } else 
        if (operator === 'divide'){
            display.innerHTML = '$ ' + (firstNum / secondNum);
            getDivideButton.style.border = '1px solid gray';
        } 

        lastClicked = 'equals';
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        console.log(firstNum);
        console.log(secondNum);
        console.log(lastClicked);
        console.log(operator);
     }

     return{
         inputValue,
         clearDisplay,
         add,
         subtract,
         multiply,
         divide,
         calculate
     }
} 

