let numsToGen = prompt("Introduce la cantidad de numeros a generar");

let numbers = [];
let numbers2 = [];
let numbers3 = [];
let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}
let fillNumbers = () => {
    for(let i = 0; i < numsToGen; i++){
        numbers.push(randomNum(1,10));
    }
}
let fillNumbers2 = () => {
    for(let i = 0; i < numsToGen; i++){
        numbers2.push(randomNum(1,10));
    }
}
let multiplyArrays = () => {
    for(let i = 0; i < numsToGen; i++){
        numbers3.push(numbers2[i]*numbers[i]);
    }
}
let showArrays = () => {
    console.log("Array 1");
    for(let i = 0; i < numsToGen; i++){
        console.log(numbers[i]);
    }
    console.log("\n\n");
    console.log("Array 2");
    for(let i = 0; i < numsToGen; i++){
        console.log(numbers2[i]);
    }
    console.log("\n\n");
    console.log("Array 3");
    for(let i = 0; i < numsToGen; i++){
        console.log(numbers3[i]);
    }
}

fillNumbers();
numbers2 = numbers;
fillNumbers2();
multiplyArrays();
showArrays();
