 function calculator() {
    // function hello() {
    //     return 'hello';
    // }

    // return {
    //     hello: hello
    // }
    let firstNum = '';
    let operator = ''; 
    let secondNum = '';
    let lastClicked = '';


    const display = document.getElementsByClassName('display')[0];
    const getNumber = document.getElementsByClassName('number')
    const getClearButton = document.getElementsByClassName('clear')[0];
    const getPlusButton = document.getElementsByClassName('plusButton')[0];
    const getEqualsButton = document.getElementsByClassName('equalsButton')[0];

    display.innerHTML = '$0.00';

    for (let i = 0; i < getNumber.length; i++) {
        getNumber[i].addEventListener('click', inputValue)
    }
    function inputValue() {
        if (display.innerHTML === '$0.00' || lastClicked === 'operator') {
            display.innerHTML = '$' + this.innerHTML;
            lastClicked = '';
        } else {
           display.innerHTML = (display.innerHTML + this.innerHTML)
        }
    }

    getClearButton.addEventListener('click', clearDisplay);
    function clearDisplay() {
        display.innerHTML = '$0.00';
    }

    getPlusButton.addEventListener('click', addition);
    function addition() {
        lastClicked = 'operator'
        firstNum = parseFloat(display.innerHTML.replace('$', ''));
        operator = 'add'
        console.log(display.innerHTML)
    }

    getEqualsButton.addEventListener('click', calculate);
    function calculate() {
        secondNum = parseFloat(display.innerHTML.replace('$',''));
        if (operator === 'add') {
            display.innerHTML = firstNum + secondNum;
            console.log(secondNum)
        }
    }

}