let num = prompt("Introduce un numero");
let isPrime = (num) => {
    let prime = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            prime = false;
        }
    }

    return prime;
}

if(isPrime(num)){
    alert("El numero " + num + " es primo");
} else {
    alert("El numero " + num + " no es primo");
}
