const dob = document.querySelector("#date-of-birth");

const checkNum = document.querySelector("#check-btn");

const luckyNum = document.querySelector("#lucky-num");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your Birthday is Lucky 🎉🥳";
  } else {
    outputBox.innerText = "Your Birthday is not Lucky ☹️";
  }
}

function checkBirthDateLucky() {
  const date = dob.value;
  const sum = calculateSum(date);

  if (sum && date) compareValues(sum, luckyNum.value);
  else outputBox.innerText = "Please enter both the fields 😡";
}

function calculateSum(date) {
  date = date.replaceAll("-", "");
  // console.log(date);

  let sum = 0;

  for (let i = 0; i < date.length; i++) {
    sum = sum + Number(date.charAt(i));
  }

  return sum;
}

checkNum.addEventListener("click", checkBirthDateLucky);
