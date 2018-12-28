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

    // initializing the value of display
    display.innerHTML = '$ 0.00';

    // adding input value funtion to number buttons
    for (let i = 0; i < getNumber.length; i++) {
        getNumber[i].addEventListener('click', inputValue)
    }
    // should start a new value if display is at initial value or last clicked is operator or equals,
    // else it should concatenate the button value to the display
    function inputValue(value) {
        // checks to see if we are updating 'balance'
        if (typeof value === 'string') {
            display.innerHTML = '$ ' + value;
        //when starting a new value with '.', display should be '0.'
        }  else if ((display.innerHTML === '$ 0.00' || lastClicked === 'operator' || lastClicked === 'equals') && this.innerHTML === '.') {
            display.innerHTML = '$ 0.';
            lastClicked = 'number';
        //when starting a new value the clicked button should replace display
        } else if (display.innerHTML === '$ 0.00' || lastClicked === 'operator' || lastClicked === 'equals') {
            display.innerHTML = '$ ' + this.innerHTML;
            lastClicked = 'number';
        // if the display already includes a decimal, clicking '.' should do nothing
        } else if (display.innerHTML.includes('.') && this.innerHTML === '.') {
            display.innerHTML = display.innerHTML;
        // should do nothing if trying to input a value in to the third decimal place
        } else if (display.innerHTML.indexOf('.') > 0 && (display.innerHTML.length - display.innerHTML.indexOf('.') > 2)) {
                display.innerHTML = display.innerHTML;
        // if it is not the start of a new value, clicked button should be concatenated to display
        } else {
           display.innerHTML = display.innerHTML + this.innerHTML
        }
    }

    // resets the entire display
    getClearButton.addEventListener('click', clearDisplay);
    function clearDisplay() {
        display.innerHTML = '$ 0.00';
        firstNum = '';
        secondNum = '';
        lastClicked = '';
        operator = '';
        getPlusButton.style.border = '1px solid darkslategray';
        getMinusButton.style.border = '1px solid darkslategray';
        getMultiplyButton.style.border = '1px solid darkslategray';
        getDivideButton.style.border = '1px solid darkslategray';
    }

    // Operator buttons should change the value of the operator variable to the appropriate value and set the value of firstNum to the display before being pressed
    // They should calculate and display a value only if there is a previous expression to evaluate (firstnum !== '') & a number was clicked last
    // also the border should change to indicate the operator being used
    getPlusButton.addEventListener('click', add);
    function add(value) {
        // check for the case of 'deposit button'
        if(typeof value === 'string') {
            firstNum = parseFloat(value);
            operator = 'add';
            lastClicked = 'operator'
            return calculate();
        // checks if there is a previous expression to evaluate
        } else if (firstNum !== '' && lastClicked === 'number') {
            calculate();
        // updates: lastClicked, operator and the border of operator buttons
        } else {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'add';
        this.style.border = '3px solid darkslategray';
        getMinusButton.style.border = '1px solid darkslategray';
        getMultiplyButton.style.border = '1px solid darkslategray';
        getDivideButton.style.border = '1px solid darkslategray';
    }

    getMinusButton.addEventListener('click', subtract);
    function subtract(value) {
        // checking for the 'withdraw button' case
        if (typeof value === 'string') {
            firstNum = parseFloat(value);
            operator = 'subtract';
            lastClicked = 'operator';
            return calculate();
        // checks if there is a previous expression to evaluate
        } else if (firstNum !== '' && lastClicked === 'number') {
            calculate();
        } else {
        // updates: lastClicked, operator, firstNum and the border of operator buttons
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'subtract';
        this.style.border = '3px solid darkslategray';
        getPlusButton.style.border = '1px solid darkslategray';
        getMultiplyButton.style.border = '1px solid darkslategray';
        getDivideButton.style.border = '1px solid darkslategray';
    }

    getMultiplyButton.addEventListener('click', multiply);
    function multiply() {
        // checks if there is a previous expression to evaluate
        if (firstNum !== '' && lastClicked === 'number') {
            calculate();
        } else {
         // updates: lastClicked, operator, firstNum and the border of operator buttons
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'multiply';
        this.style.border = '3px solid darkslategray';
        getPlusButton.style.border = '1px solid darkslategray';
        getMinusButton.style.border = '1px solid darkslategray';
        getDivideButton.style.border = '1px solid darkslategray';
    }

    getDivideButton.addEventListener('click', divide);
    function divide() {
         // checks if there is a previous expression to evaluate
        if (firstNum !== '' && lastClicked === 'number') {
            calculate();
        } else {
         // updates: lastClicked, operator, firstNum and the border of operator buttons
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        }
        operator = 'divide';
        this.style.border = '3px solid darkslategray';
        getPlusButton.style.border = '1px solid darkslategray';
        getMinusButton.style.border = '1px solid darkslategray';
        getMultiplyButton.style.border = '1px solid darkslategray';
    }

    // should perform the necessary operations based on the value of 'operator' and update the value of the display and return the answer
    // sets the value of firstNum equal to the display when finished for consecutive calculations
    // will be called if an operator is clicked after an operator and number, in that order
    getEqualsButton.addEventListener('click', calculate);
    function calculate() {
        // if the equals sign was the last sign to be clicked, we want the value of secondNum to stay the same, in order to 
        // perform correct calculations: 6 - 1 = 5, -> hitting equals again should return 4 ( - and 1 stay the same)
        // otherwise secondNum will be set to the value in display before the function is run
        let answer = 0;
        if (lastClicked !== 'equals') {
        secondNum = parseFloat(display.innerHTML.replace('$ ',''));
        }
        if (operator === 'add') {
            answer = (firstNum + secondNum).toFixed(2);
            display.innerHTML = '$ ' + answer;
            getPlusButton.style.border = '1px solid darkslategray';
        } else if (operator === 'subtract'){
            answer = (firstNum - secondNum).toFixed(2);
            display.innerHTML = '$ ' + answer;
            getMinusButton.style.border = '1px solid darkslategray';
        } else if (operator === 'multiply'){
            answer = (firstNum * secondNum).toFixed(2);
            display.innerHTML = '$ ' + answer;
            getMultiplyButton.style.border = '1px solid darkslategray';
        } else 
        if (operator === 'divide'){
            answer = (firstNum / secondNum).toFixed(2);
            display.innerHTML = '$ ' + answer;
            getDivideButton.style.border = '1px solid darkslategray';
        } 

        lastClicked = 'equals';
        firstNum = parseFloat(display.innerHTML.replace('$ ', ''));
        return answer;
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

