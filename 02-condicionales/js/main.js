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