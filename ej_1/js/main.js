let forma = prompt("Elige una forma geometrica (triangulo, cuadrado, circulo)");

let triangulo = (base, altura) => {
    return (base * altura) / 2;
}

let cuadrado = (lado) => {
    return (lado * lado);
}

let circulo = (radio) => {
    return Math.pow(radio, 2) * Math.PI;
}

if (forma == "triangulo") {
    let base = prompt("Introduce base del triangulo");
    let altuta = prompt("Introduce la altura del triangulo");

    alert(triangulo(base, altura));
} else  if (forma == "cuadrado") {
    let lado = prompt("Introduice el lado del cuadrado");

    alert(cuadrado(lado));
} else if (forma == "cuadrado") {
    let radio = prompt("Introduce el radio del circulo");

    alert(circulo(radio));
}

