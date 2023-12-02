let num = prompt("Introduce la cantidad en euros");
let curr = prompt("Introduce a que moneda cambiar (dolar, yen, libra)");
let conversor = (num, currency) => {
    if(currency == "libra"){
        alert(num + "€ son " + (num * 0.86) + "£");
    } else if (currency == "dolar") {
        alert(num + "€ son " + (num * 1.28611) + "$");
    } else if (currency == "yen") {
        alert(num + "€ son " + (num * 134.91) + "¥");
    } else {
        alert("Moneda seleccionada no válida")
    }
}

conversor(num, curr);