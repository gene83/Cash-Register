const myCalc = calculator();
(function register() {
    let balance = '0.00'

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
        balance = myCalc.add(balance) + '';
        myCalc.clearDisplay();
    }
    
    getWithdrawButton.addEventListener('click', withdraw);
    function withdraw() {
        balance = myCalc.subtract(balance) + '';
        myCalc.clearDisplay()
    }
})();
