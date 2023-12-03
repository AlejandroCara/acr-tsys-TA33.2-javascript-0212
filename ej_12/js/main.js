let numsToGen = prompt("Introduce la cantidad de numeros a generar");
let numbers = [];
let numbersEndedWith = [];
let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}

let askEndWith = () => {
    let valid = false; 
    let input;
    while(!valid){
        input = prompt("Introduce la cantidad de numeros a generar");
        if(!isNaN(input)){
            valid = true;
        }
    }
    return input;
}
let fillNumbers = (array) => {
    for(let i = 0; i < numsToGen; i++){
        array.push(randomNum(1,300));
    }
}
let findEndedWith = (arrayIn, arrayOut, endWith) => {
    for(let i = 0; i < arrayIn.length; i++){
        if(arrayIn[i] % 10 == endWith){
            arrayOut.push(arrayIn[i]);
        }
    }
}
let endWith = askEndWith();

fillNumbers(numbers);
findEndedWith(numbers, numbersEndedWith, endWith);
console.log("Numeros generados: " + numbers);
console.log("Numeros terminados en " + endWith + ": " + numbersEndedWith);