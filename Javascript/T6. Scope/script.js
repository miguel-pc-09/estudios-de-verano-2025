// SCOPE

let x = 5

{
    let x = 2         // Entre llaves es otro mundo 
    console.log(x)    // En la consola, primero sacará el 2 
}

console.log(x)  
// Seguidamente, después de leer esta línea, sacará el 5. 
// Si borramos el let x = 5 de arriba, no tendría valor, por lo que sacaría el 2 y después un error.

// ------------------------------------------------

// let x = 5     // -> Padre

{
    // Eliminamos la variable                     
    // Entre llaves es otro mundo 
    console.log(x)    
    // En este caso nos sacará un 5 y después otro 5.  
    // SCOPE VA DE AFUERA HACIA ADENTRO -> Hijo
}

console.log(x)      
// Padre. Padre, hijo, padre. Desde fuera hacia adentro.

// ------------------------------------------------

// Eliminamos la variable 
{
    let x = 2         // PRIMER RESULTADO: un 2 
    console.log(x)    // SEGUNDO RESULTADO DE x: un error 
}

console.log(x)

// ------------------------------------------------

// let x = 5
{
	let y = 3
	x = x + y             // Por consola nos saldrá un 8. 
                          // También podemos poner x += y, es lo mismo.
    // x += y   -//-   x *= y   -//-   x -= y 

	console.log(x)   
}
