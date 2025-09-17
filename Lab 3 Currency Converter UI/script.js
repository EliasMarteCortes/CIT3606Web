const firstCurrencyField = document.getElementById("currency-one");
const secondCurrencyField = document.getElementById("currency-two");
const convertButton = document.querySelector("button");

convertButton.addEventListener("click", () => {
    let currencyOneValue = parse(firstCurrencyField.value);
    let currencyTwoValue = parseInt(secondCurrencyField.value);
    secondCurrencyField.value = currencyOneValue * 62.20;
})