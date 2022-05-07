// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

// Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(`Los lados del triángulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);
// console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo} cm`);

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  let lado1 = document.getElementById('InputTrianguloLado1').value;
  lado1 = Number(lado1);
  let lado2 = document.getElementById('InputTrianguloLado2').value;
  lado2 = Number(lado2);
  let base = document.getElementById('InputTrianguloBase').value;
  base = Number(base);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById('InputTrianguloBase').value;
  const altura = document.getElementById('InputTrianguloAltura').value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById('radio').value;

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById('radio').value;

  const area = areaCirculo(radio);
  alert(area);
}

// Reto: matemáticas con JavaScript

function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  let trianguloGrandeAltura = 0;
  if (trianguloGrandeLadoA == trianguloGrandeLadoB) {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    trianguloGrandeAltura = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
    console.log(`La altura del triángulo es: ${trianguloGrandeAltura.toFixed(2)}`);
  } else {
    console.error(`Los lados a y b no son iguales`);
  }
}