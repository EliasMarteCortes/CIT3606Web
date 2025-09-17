const firstCurrencyField = document.getElementById("currency-one");
const secondCurrencyField = document.getElementById("currency-two");
const convertButton = document.querySelector("button");

convertButton.addEventListener("click", () => {
    let currencyOneValue = firstCurrencyField.value;
    let currencyTwoValue = secondCurrencyField.value;
    console.log(currencyOneValue, currencyTwoValue);
    if (currencyTwoValue == "" && currencyOneValue == "") {
        alert("Insert a currency in at least one text field.");
    }
    else if (!(currencyOneValue == "" && currencyTwoValue == "")) {
        alert("Empty at least one of the text fields.");
    }
    else if (currencyOneValue == "") {
        firstCurrencyField.value = (parseInt(currencyTwoValue) * 0.016).toFixed(2);
    }
    else if (currencyTwoValue == "") {
        secondCurrencyField.value = (parseInt(currencyOneValue) * 62.20).toFixed(2);
    }
})