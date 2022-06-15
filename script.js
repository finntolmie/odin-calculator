const displayInput = document.querySelector(".input-text");
const displayCurrentNum = document.querySelector(".stored-num");
const displayCurrentOperand = document.querySelector(".stored-operand");
const numberButtons = document.querySelectorAll("[data-num]");
const operandButtons = document.querySelectorAll("[data-operand]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
const dotButton = document.getElementById("dot");

numberButtons.forEach((button) => {
  button.onclick = () => append(button.textContent);
});

operandButtons.forEach((button) => {
  button.onclick = () => {
    if (displayCurrentOperand.textContent && displayInput.textContent) {
      evaluate();
      displayCurrentOperand.textContent = button.textContent;
    } else {
      if (displayInput.textContent) {
        displayCurrentNum.textContent = displayInput.textContent;
      }
      displayCurrentOperand.textContent = button.textContent;
      displayInput.textContent = "";
    }
  };
});

clearButton.onclick = () => {
  displayInput.textContent = "";
  displayCurrentNum.textContent = "";
  displayCurrentOperand.textContent = "";
};

deleteButton.onclick = () => {
  if (displayInput.textContent) {
    displayInput.textContent = displayInput.textContent.slice(
      0,
      displayInput.textContent.length - 1
    );
  }
};

dotButton.onclick = () => {
  if (!displayInput.textContent) {
    append(0);
  }
  if (!displayInput.textContent.includes(".")) {
    append(dotButton.textContent);
  }
};

equalsButton.onclick = () => {
  evaluate();
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (num1, num2, operand) => {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operand) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
};

const round = (num) => {
  return Math.round(num * 100) / 100;
};

const evaluate = () => {
  const num1 = displayCurrentNum.textContent;
  const num2 = displayInput.textContent;
  const operand = displayCurrentOperand.textContent;
  if (num1.length > 0 && num2.length > 0) {
    const result = round(operate(num1, num2, operand));

    displayCurrentNum.textContent = result;
    displayInput.textContent = "";
    displayCurrentOperand.textContent = "";
  }
};

const append = (item) => {
  if (displayInput.textContent.length > 9) {
    return;
  }
  displayInput.textContent += item;
};
