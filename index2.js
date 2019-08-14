const numberInputs = document.getElementsByClassName('number-input');
const resultElement = document.getElementsByClassName('result')[0];
const operation = document.getElementsByClassName('operator-input')[0];

function clickHandler() {
  const number1 = Number(numberInputs[0].value);
  const number2 = Number(numberInputs[1].value);

  var result = null;

  switch (operation.value) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;

    case "**":
      result = Math.pow(number1, number2);
      break;
  }

  resultElement.value = result;

}