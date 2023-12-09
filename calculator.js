let expression = '';

function appendValue(value) {
    expression += value;
    updateDisplay();

}

function clearDisplay() {
    expression = '';
    updateDisplay();

}

function calculate() {
    try {
        const result = eval(expression);
        expression - result.toString();
        updateDisplay();
    }  catch (error) {
        expression = 'Error';
        updateDisplay();
    } 
}

function updateDisplay() {
    const display = document.getElementById('dispaly');
    display.value = expression;
}

