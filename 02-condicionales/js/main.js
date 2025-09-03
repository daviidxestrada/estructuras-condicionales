/*
if(condición){
   bloque de instrucciones
}
*/

/*

let edad=15;

if(edad >= 18){
       console.log("Eres mayor de edad")
}

console.log("fuera del if")

*/


/*



if(condición){
    bloque de instrucciones
}else{
        bloque de instrucciones
        }
*/



/*

let edad=16;
if(edad>=18) {
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}
console.log("fuera del if")

*/
/*
let edad= 100;

if (edad < 13){
    console.log("Eres un niño.");
}else if (edad < 20){
    console.log("Eres un adolescente.")
}else if (edad < 65){
    console.log("Eres un adulto.")
}else{
    console.log("Eres un adulto mayor")
}
*/


console.log("EJERCICIO 1")

let numero=-12;

if(numero < 0){
    console.log("Es un numero negativo")
  }else if (numero > 0){
    console.log("Es un numero positivo")

  }else{
    console.log("Es el número 0")
  }

console.log("EJERCIO 1 ALTERNATIVA")

let num = 0;
let mensajeej1;
if(num > 0){
    mensajeej1 = "El número es positivo"
} else if (num < 0) {
    mensajeej1 = "El número es negativo"
} else { 
    mensajeej1 = "El número es cero"
}

console.log(mensajeej1)


/*

switch(expresión){

    case valor1:
    bloque de instrucciones
    break

    case valor2:
    bloque de instrucciones
    break


    case valor3:
    bloque de instrucciones
    break

    default:
        bloque de instrucciones


}

*/

/*
let dia = 3;

switch (dia){

case 1:
        console.log("Lunes");
        break;

case 2:
        console.log("Martes");
        break;

case 3:
        console.log("Miércoles");
        break;

case 4:
        console.log("Jueves");
        break;

case 5:
        console.log("Viernes");
        break;

case 6:
        console.log("Sábado");
        break;

case 7:
        console.log("Domingo");
        break;

default:
    console.log("Día invalido");
}
*/
/*
let color = "green";

switch(color){
    case "red":
        console.log("red es rojo en inglés");
        //break;

    case "green":
        console.log("green es verde en inglés")
        //break;
        
        case "blue":
        console.log("blue es azul en inglés")
        //break;

    default:
    console.log("el color es desconocido")
}
    */

/*

   (condición) ? caminodelTrue : caminodelFalse

*/

/*
let edad=16;

let mensaje = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad"

console.log(mensaje)
*/

console.log("EJERCICIO 2")

let edad=1;

let mensaje = (edad >= 18) ? "Puede votar" : "No puede votar"

console.log(mensaje)

console.log("EJERCICIO 2 ALTERNATIVA IF")
let edadej2 = 16;
let mensajeej2;

if (edadej2 >= 18){
    mensajeej2 = "Puedes votar"
} else {
    mensajeej2 = "No puedes votar"
}

console.log(mensajeej2)

console.log("EJERICIO 3")

let num1 = 40;
let num2 = 20;

if (num1 > num2) {
    console.log("El mayor es " + num1);
}

else if(num2 > num1){
    console.log("El mayor es " + num2);

}
else{
    console.log("Ambos números son iguales");
}

console.log("EJERCICIO 3 ALTERNATIVA")
let num1ej3 = 15;
let num2ej3 = 3;
let mensajeej3;

if (num1ej3 > num2ej3) {
    // mensajeej3 = num1ej3 + " es mayor que " + num2ej3;
    mensajeej3 = `${num1ej3} es mayor que ${num2ej3}`
} else if (num2ej3 > num1ej3) {
    mensajeej3 = num2ej3 + " es mayor que " + num1ej3;
}else{
    mensajeej3 = "Ambos numeros son iguales";
}

console.log(mensajeej3)

/*







let esCliente = false;
let esAdulto = false;
let mensaje= (esCliente == true)
     ? "Debes pagar 10€"
     : (esAdulto == true)
     ? "Envíe su solicitud"
     : "Debes ser mayor de edad"

     console.log(mensaje)

*/
/*
let esCliente = false;
let mensaje;

(esCliente==true)
  ? (
    (mensaje="debe pagar 10.00€"), 
    console.log(mensaje)
  )
  :(
    (mensaje = "debe pagar 20.00€"),
    console.log(mensaje)
  )
    */

console.log("EJERCICIO 4")
let numeroej4 = 22;
if(numeroej4 % 5 === 0){
    console.log(true);
}else{
    console.log(false);
}

console.log("EJERCICIO 4 Versión Intermedia, la del profesor")
let numej4profe = 11;
let resultadoprofe;

if (numej4profe % 5 == 0) {
    resultadoprofe = true;
} else {
    resultadoprofe = false;
}

console.log(resultadoprofe)

console.log("EJERCICIO 4 Versión mas corta")
let numeroej4v2 = 20;
let resultado = (numeroej4v2 % 5 === 0) ? true : false;
console.log(resultado);

console.log("EJERCICIO 5")
let nota = 8;
if (nota >= 9){
    console.log("Excelente");
}else if(nota >= 7){
    console.log("Buena");
}else if(nota >= 5){
    console.log("Regular")
}else{
    console.log("Insuficiente");
}

console.log("EJERCICIO 5 ALTERNATIVA PROFE")

let notaprofe = 10;
let calificacion;

// if(notaprofe <= 10 && nota >=0 ){



// if (notaprofe >= 9) {
//     calificacion = "excelente"
// } else if (notaprofe >= 7) {
//     calificacion = "buena"
// } else if (nota >=5) {
//     calificacion = "regular"
// } else {
//     calificacion = "insuficiente"
// }

// } else {
//     calificacion = "Nota no válida"
// }

// console.log(calificacion)

//  if(notaprofe <= 10 && nota >=0 ){
     if(notaprofe <= 10 && nota >=0 ){



if (notaprofe < 5) {
    calificacion = "insuficiente"
} else if (notaprofe >= 5 && notaprofe < 7) {
    calificacion = "regular"
} else if (notaprofe >= 7 && notaprofe < 9) {
    calificacion = "buena"
} else {
    calificacion = "excelente"
}

} else {
    calificacion = "Nota no válida"
}

console.log(calificacion)