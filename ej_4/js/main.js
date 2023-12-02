let num = prompt("Introduce un numero");
let factorial = (num) => {
    let result = 1;

    for(let i = 0; i <= num+1; i++){
        result *= num;
        num-=1;
    }

    return result;
}

alert(num + "! es " + factorial(num));