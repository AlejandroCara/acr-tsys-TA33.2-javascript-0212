let base10Num = prompt("Introduce un numero");
let base10ToBin = (num) => {
    let binNum = "";

    while(num/2 > 0) {
        binNum = (num%2) + binNum;
        num = Math.floor(num/2);
    }
    return binNum;
}

alert(base10ToBin(base10Num));