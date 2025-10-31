/* 
 Profesor : José David Ventura Roldán
 DWC Ejercicio 2- Tema 1
 */

/*Utilizaremos document.write para presentarlo en pantalla aunque esta opción
para imprimir por pantalla la variable no es lo más óptimo, para optimizar
 utilizariamos el desarrollo del ejercicio 3 (DWC-JS03)*/
alert("Este es el ejemplo2");
var nombre = "David \n"; //string
var edad = 50; //Entero
var salario = 10.5;// dato flotante
var estaCalvo = true;//boleano


document.write(nombre); //presentamos en pantalla la variable indicada
document.write(50); //presentamos en pantalla la variable indicada
document.write(10.5); //presentamos en pantalla la variable indicada
document.write(estaCalvo); //presentamos en pantalla la variable indicada



/*La declaración de las variables va en minúscula, ejemplo: nombre.
 Camelcase es cuando el identificador tiene varias palabras juntas la primera 
 va en minúscula y la otra en mayúscula ejemplo:estaCalvo*/

/*Constante*/
/*la declaración de Constantes siempre va en mayúscula ejemplo: PI*/
const PI = 3.14;

/*
 No podemos asignar un valor distinto cuando es una constante, en la consola 
 del navegador sale error PI = 3.15; 
 */


document.write(PI); //presentamos en pantalla la variable indicada