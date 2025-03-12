const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currancy-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currancy-value-to-convert")
    const currencyValueConverted = document.querySelector(".currancy-value")


    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function chengeCurrency(){
    const currancyName = document.getElementById("currancy-name")
    const currancyImg = document.querySelector(".currancy-IMG")

    if(currencySelect.value =="dolar") {
        currancyName.innerHTML = "Dolar Americano"
        currancyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if(currencySelect.value =="euro") {
        currancyName.innerHTML = "Euro"
        currancyImg.src = "./assets/euro.png"

    }
    convertValues()

}


currencySelect.addEventListener("change", chengeCurrency)
convertButton.addEventListener("click", convertValues)

