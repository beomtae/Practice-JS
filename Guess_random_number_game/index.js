const form = document.querySelector("#form");
const userNumber = form.querySelector("#userNumber");
const chose = form.querySelector("#chose");
const result = form.querySelector("#result");

function submitNumber(event) {
  event.preventDefault();
  const userNumValue = parseInt(userNumber.value);
  const machineNumber = Math.ceil(Math.random() * userNumValue);
  chose.innerText = `You chose: ${userNumValue}, the machine chose:${machineNumber}`;
  if (machineNumber === userNumValue) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You Lost!";
  }
}

form.addEventListener("submit", submitNumber);
