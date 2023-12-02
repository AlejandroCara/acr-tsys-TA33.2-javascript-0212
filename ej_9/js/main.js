let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}
let numsToGen = prompt("Introduce la cantidad de numeros a generar");
let numbers =  [];
let fillNumbers = () => {
    for(let i = 0; i < numsToGen; i++){
        numbers.push(randomNum(0, 9));
    }
}
let showNumbers = (numbers) => {
    for(let i = 0; i < numsToGen; i++){
        console.log("Index: " + i + " Number: " + numbers[i]);
    }
}
let showSum = (numbers) => {
    let sum = 0;
    for(let i = 0; i < numsToGen; i++){
        sum+=numbers[i];
    }
    console.log("Suma total: " + sum);
}

fillNumbers();
showNumbers(numbers);
showSum(numbers);