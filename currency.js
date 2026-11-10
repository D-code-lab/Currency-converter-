
// Get HTML elements
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Practice exchange rates
const rates = {
    USD: 1,
    NGN: 1500,
    EUR: 0.92,
    GBP: 0.79
};

// Convert currency
convertBtn.addEventListener("click", function() {

    let value = Number(amount.value);

    if (amount.value === "" || !Number.isFinite(value) || value <= 0) {
    result.textContent = "Please enter a valid amount";
    return;
}

    let from = fromCurrency.value;
    let to = toCurrency.value;

    let converted = (value / rates[from]) * rates[to];

    result.textContent = "Converted Amount: " +
        converted.toLocaleString("en-US", {
            maximumFractionDigits: 2
        }) + " " + to;

});
