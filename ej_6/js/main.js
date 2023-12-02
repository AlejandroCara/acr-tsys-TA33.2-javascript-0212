let num;
let valid = false;
let askData = () => {
    while(!valid) {
        num = prompt("Introduce un numero positivo");
        if(num > 0){
            valid = true;
        } else {
            alert("El numero debe ser positivo (mayor que 0)")
        }
    }
}
let countDigits = (num) => {
    let digits = 0;
    while(num > 0) {
        digits++;
        num = Math.floor(num/= 10);
    }
    return digits;
}

askData();
alert(num + " tiene " + countDigits(num) + " digitos");