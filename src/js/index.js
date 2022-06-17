const previousOperationText = document.querySelector('.previous-operation');
const currentOperationText = document.querySelector('.current-operation');
const buttons = document.querySelectorAll('.buttons-container button');

// Class for the calculator
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  // Method for add digits to the calculator screen
  addDigit(digit) {
    // Check if current operation already has a dot
    if (digit === '.' && this.currentOperationText.innerText.includes('.')) {
      return;
    };

    this.currentOperation = digit;
    this.updateScreen();
  };

  // Process all calculator operations
  processOperation(operation) {
    if(this.currentOperationText.innerText === '' && operation !== 'C') {
      if(this.previousOperationText.innerText !== '') {
        this.changeOperation(operation);
      }
      return;
    }

    let operationValue;
    const previous = +this.previousOperationText.innerText.split(' ')[0];
    const current = +this.currentOperationText.innerText;

    switch(operation) {
      case '+':
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case '-':
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case '*':
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case '/':
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case 'DEL':
        this.processDelOperation();
        break;
      case 'C':
        this.processClearAllOperation();
        break;
      case 'CE':
        this.processClearOperation();
        break;
      case '=':
        this.processEqualsOperation();
        break;
      default:
        return;
    };
  };
  
  // Change value of the calculator screen
  updateScreen(
    operationValue = null, 
    operation = null, 
    current = null, 
    previous = null
  ) {
    if(operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      if(previous === 0) {
        operationValue = current;
      };

      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = '';
    };
  };

  changeOperation(operation) {
    const mathOperation = ['+', '-', '*', '/'];

    if(!mathOperation.includes(operation)) {
      return;
    };

    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + ` ${operation} `;
  };

  processDelOperation() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
  };

  processClearOperation() {
    this.currentOperationText.innerText = '';
  };

  processClearAllOperation() {
    this.previousOperationText.innerText = '';
    this.currentOperationText.innerText = '';
  };

  processEqualsOperation() {
    const operation = previousOperationText.innerText.split(' ')[1];
    this.processOperation(operation);
    this.currentOperationText.innerText = this.previousOperationText.innerText.split(' ')[0];
    this.previousOperationText.innerText = '';
  };
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === '.') {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    };
  });
});