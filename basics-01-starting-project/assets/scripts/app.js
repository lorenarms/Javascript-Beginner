const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets and parses user input
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// builds readable equation for display
function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// write the operation to the log
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
    
    if (
      calculationType != "ADD" &&
      calculationType != "SUBTRACT" &&
      calculationType != "MULTIPLY" &&
      calculationType != "DIVIDE"
    ) {
      return;
    }
    
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "x";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }


  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
