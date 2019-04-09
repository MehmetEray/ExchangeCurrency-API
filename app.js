const amountElement = document.querySelector("#amount");
const firstElement = document.querySelector("#firstCurrency");
const secondElement = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstElement,secondElement);

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstElement.onchange = function(){
        currency.changeFirstCurrency(firstElement.options[firstElement.selectedIndex].textContent);
        currency.changeSecondCurrency(secondElement.options[secondElement.selectedIndex].textContent);
        ui.changeFirst();
    };

    secondElement.onchange = function(){
        currency.changeSecondCurrency(secondElement.options[secondElement.selectedIndex].textContent);
        ui.changeSecond();
    };
}
function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}