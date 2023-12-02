let isPrime = (num) => {
    let prime = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            prime = false;
        }
    }

    return prime;
}
let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}
let numsToGen = prompt("Introduce la cantidad de numeros a generar");
let primeNumbers = [];
let fillNumbers = () => {
    for(let i = 0; i < numsToGen; i++){
        let valid = false;
        let num;
        while(!valid){
            num = randomNum(1,100);
            valid = isPrime(num);
        }
        primeNumbers.push(num);
        console.log(num)
    }
}
let findMaxNum = () => {
    let max = primeNumbers[0];
    for(let i = 0; i < numsToGen; i++){
        if(primeNumbers[i] > max){
            max = primeNumbers[i];
        }
    }
    return max;
}

fillNumbers();
alert("El numero primo mas alto es " + findMaxNum());