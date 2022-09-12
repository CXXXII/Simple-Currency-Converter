const exchangeRate = {
  currency: 'USD',
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
  currenciesList: ['JPY', 'EUR', 'RUB', 'USD', 'GBP'],
};
console.log(`Welcome to Currency Converter!
1 ${exchangeRate.currency} equals ${exchangeRate.USD} USD
1 ${exchangeRate.currency} equals ${exchangeRate.JPY} JPY
1 ${exchangeRate.currency} equals ${exchangeRate.EUR} EUR
1 ${exchangeRate.currency} equals ${exchangeRate.RUB} RUB
1 ${exchangeRate.currency} equals ${exchangeRate.GBP} GBP`);

const input = require('sync-input');

let convertToInput;
let amountInput;
let convertFromInput;

(function () {
  console.log('What do you want to do?');
  do {
    const chosenOption = Number(input('1-Convert currencies 2-Exit program\n'));
    if (chosenOption === 1) {
      convertFrom();
      break;
    } else if (chosenOption === 2) {
      console.log('Have a nice day!');
      break;
    } else {
      console.log('Unknown input');
    }
  } while (true);
}(exchangeRate));

function convertFrom() {
  do {
    console.log('What do you want to convert?');
    convertFromInput = input('From: ').toUpperCase();
    if (!exchangeRate[convertFromInput]) {
      console.log('Unknown currency');
    } else {
      convertTo();
      break;
    }
  } while (true);
}

function convertTo() {
  do {
    console.log('What do you want to convert?');
    convertToInput = input('To: ').toUpperCase();
    if (!exchangeRate[convertToInput]) {
      console.log('Unknown currency');
    } else {
      amount();
      break;
    }
  } while (true);
}

function amount() {
  do {
    amountInput = Number(input('Amount: '));
    if (isNaN(amountInput)) {
      console.log('The amount has to be a number');
    } else if (amountInput < 1) {
      console.log('The amount cannot be less than 1');
    } else {
      calculateResult(convertFromInput, convertToInput, amountInput);
      break;
    }
  } while (true);
}

function calculateResult(from, to, amount) {
  const result = ((amount / exchangeRate[from]) * exchangeRate[to]).toFixed(4);
  printResult(result, from, to, amount);
}

function printResult(result, fromCurrency, targetCurrency, amount) {
  console.log(`Result: ${amount} ${fromCurrency} equals ${result} ${targetCurrency}`);
}
