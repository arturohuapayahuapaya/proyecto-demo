/*
Generales
    -> Todo linea de codigo o instruccion (bloque) termina ; (punto y coma)
    -> JS tiene funciones integradas -> alert, prompt, confirm
    -> JS tiene librerias integradas -> Math  (Conjunto de funciones matematicas)
    -> JS Usa concepto de programacion Orientada a Objetos (Atributos, Métodos)

Oepradores matematicos

    +   ->  Suma valores numericos -> Concatenacion (Unir cadenas de texto)
    -   ->  Resta
    *   ->  Producto
    /   ->  División
    **  ->  Potencia
    %   ->  Residuo de una division entera
    ()  ->  Parentesis (Agrupar operaciones)

    DIV Decimal -> 10/3 = 3.3333    DIV Entera 10/3 = 3 residuo 1 -> 10%3 = 1


Declarar variables: var / let / const
    El signo = "igual" -> Asignar un valor a una variable
    Las variables se declaran una sola vez


*/



// Mostrar el resultado
/*
alert("El resultado es suma"); // Del resultado es suma
alert("El resultado es " + suma); // El resultado es 398
alert(`El resultado es ${suma}`); // El resultado es 398
alert("El resultado es ${suma}"); // El resultado es ${suma}
alert(suma); // 398
*/
// Reasignar un valor -> NO se vuelven declarar pero se pueden cambiar de valor
/*
num1 = 2560;
num2 = 125;
suma = num1+num2;
*/
//alert("La suma: " + suma);

/* Manejo DOM - Document Object Model
   Para Js la raiz del DOM es el documento HTML
   Documento HTML = Objeto document
   
   Para manipular un elemtno del DOM
   Debemos capturar dicho elemento
   Capturar el elemento <p> cuyo id es resultado1
    -> Utiliza el metodo getElementById del objeto document
    -> getElementById requiere que se indique entre los parentesis el Id del elemento a capturar

*/

const result1 = document.getElementById("resultado1");
const result2 = document.getElementById("resultado2");
const result3 = document.getElementById("resultado3");
const result4 = document.getElementById("resultado4");



/* Funcionalidad al boton btnEnviar*/
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.onclick = function() {
    suma = num1 / num2;
    result1.innerText = "El resultado es suma"; 
    result2.innerText = "El resultado es " + suma; 
    result3.innerText = `El resultado es ${suma}`; 
    result4.innerText = "El resultado es ${suma}"; 
}

let num1 = 145;
let num2 = 240;
let suma = num1 + num2;
