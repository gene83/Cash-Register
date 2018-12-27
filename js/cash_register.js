const myCalc = calculator();

// const getContainer = document.querySelector('#container');

// getContainer.innerHTML = myCalc.hello()

(function register() {
    let balance = document.createElement('div');
    balance.innerHTML = '0.00';

    const getBalanceButton = document.getElementsByClassName('balance')[0];
    const getDepositButton = document.getElementsByClassName('deposit')[0];
    const getWithdrawButton = document.getElementsByClassName('withdraw')[0];

    getBalanceButton.addEventListener('click', getBalance);
    function getBalance() {
        myCalc.clearDisplay();
        myCalc.inputValue(balance);
    }

    getDepositButton.addEventListener('click', deposit)
    function deposit() {
    }
    
})();
