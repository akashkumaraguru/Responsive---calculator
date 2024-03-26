// Function to display numbers and operators
function display(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clear() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function del() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Function to perform calculation
function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;
    try {
        result = eval(displayValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}
