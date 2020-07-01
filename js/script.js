const amount = document.querySelector(".js-amount");
const selectFrom = document.querySelector(".js-selectFrom");
const selectTo = document.querySelector(".js-selectTo");
const submitButton = document.querySelector(".js-submitButton");
const resetButton = document.querySelector(".js-resetButton");
let resultExchange = document.querySelector(".js-resultExchange");

const ratePLN = 1.0;
const rateUSD = 3.92;
const rateEUR = 4.40;
const rateGBP = 4.83;
let result;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  switch (selectFrom.value) {
    case "PLN":
      result = +amount.value * ratePLN;
      break;
    case "EUR":
      result = +amount.value * rateEUR;
      break;
    case "USD":
      result = +amount.value * rateUSD;
      break;
    case "GBP":
      result = +amount.value * rateGBP;
      break;
  }

  switch (selectTo.value) {
    case "PLN":
      result /= ratePLN;
      break;
    case "EUR":
      result /= rateEUR;
      break;
    case "USD":
      result /= rateUSD;
      break
    case "GBP":
      result /= rateGBP;
      break;
  }

  resultExchange.innerText = result.toFixed(2)
});

