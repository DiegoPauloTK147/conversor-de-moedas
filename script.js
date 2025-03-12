const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currancy-value-to-convert")
    const currencyValueConverted = document.querySelector(".currancy-value")

    const dolarToday = 5.2

    const valueConverted = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD"
    }).format(valueConverted)
}

convertButton.addEventListener("click", convertValues)

