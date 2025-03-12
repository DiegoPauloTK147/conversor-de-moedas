const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currancy-select");
const inputCurrency = document.querySelector(".input-currency");

function formatCurrencyInput(input) {
    let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número
    value = (parseFloat(value) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    input.value = value;
}

inputCurrency.addEventListener("input", function () {
    formatCurrencyInput(this);
});

function convertValues() {
    const currencyValueToConvert = document.querySelector(".currancy-value-to-convert");
    const currencyValueConverted = document.querySelector(".currancy-value");

    // Converte o valor formatado para número
    const inputCurrencyValue = Number(inputCurrency.value.replace(/[^0-9,]/g, "").replace(",", ".")) || 0;

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.54;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function chengeCurrency() {
    const currancyName = document.getElementById("currancy-name");
    const currancyImg = document.querySelector(".currancy-IMG");

    if (currencySelect.value == "dolar") {
        currancyName.innerHTML = "Dólar Americano";
        currancyImg.src = "./assets/estados-unidos (1) 1.png";
    }
    if (currencySelect.value == "euro") {
        currancyName.innerHTML = "Euro";
        currancyImg.src = "./assets/euro.png";
    }
    if (currencySelect.value == "libra") {
        currancyName.innerHTML = "Libra";
        currancyImg.src = "./assets/libra 1.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", chengeCurrency);
convertButton.addEventListener("click", convertValues);
