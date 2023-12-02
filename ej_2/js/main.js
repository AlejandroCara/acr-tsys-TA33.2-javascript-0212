let randomNum = (min, max) => {
    return Number(Math.floor(Math.random() * max)) + Number(min);
}

let numsToGenerate = prompt("Cuandos numeros aleatorios quieres generar?");
let minNum = prompt("Introduce el minimo valor a generar");
let maxNum = prompt("Introduce el maximo valor a generar");

if(minNum >= maxNum){
    alert("Valores min/max no validos");
} else {
    for(let i = 0; i < numsToGenerate; i++){
        console.log(randomNum(minNum, maxNum));
    }
}