try {         // Metemos código que puede fallar 
    // LLAMADO AL BACKEND (a través de una API)
    console.log('Llamando al backend ')
    setTimeout(() => {
        console.log('El backend nos responde: ')
        // console.log('Cliente apto para la compra')
        throw('El cliente no está apto para la compra')
    }, 1000);
} catch (error){
    // TOMAMOS EL ERROR y hacemos algo que nos parezca correcto 
    console.log('Algo falló ', error)
}finally{
    // Se ejecuta siempre por más que falle o no falle
    console.log('Se ejecuta siempre')
}
/*
 Ejecutando estas líneas sin fallo 
 try {          
                                                                        Por consola nos saldrá lo siguiente: 
    console.log('Llamando al backend ')                                    - Llamando al backend
} catch {                                                                  - Se ejecuta siempre
                                                                        Como la primera línea no falló, pasó directo al finally 
    console.log('Algo falló ')
}finally{
    
    console.log('Se ejecuta siempre')
}
 */
/* Ejecutando estas líneas para provocar el fallo THROW. Imaginemos que tenemos un cliente que no está apto 
try {         

    console.log('Llamando al backend ')
    throw('Este cliente no está apto para la compra')                 Por consola nos saldrá lo siguiente:
    console.log('Salió todo con éxito')                                    - Llamando al backend
    } catch (error){                                                       - Algo falló                                     
                                                                           - Se ejecuta siempre                               
    console.log('Algo falló ', error)                                 El throw no permite                 
}finally{                                                             
    
    console.log('Se ejecuta siempre')
}
 */

/* Con SETTIMEOUT -> Es un método que nos permite hacer algo asíncrono, significa que permite hacer una acción a destiempo. 
try {          
    
    console.log('Llamando al backend ')
    setTimeout(() => {
        console.log('El backend nos responde: ')
        console.log('Cliente apto para la compra')
    }, 1000);                                      // Son milisegundos.
} catch (error){                                                       Por consola nos saldrá lo siguiente: 
                                                                            - Llamando al backend 
    console.log('Algo falló ', error)                                       - Se ejecuta siempre
}finally{                                                              ** Un segundo después... saltará
                                                                            - El backend nos responde:
    console.log('Se ejecuta siempre')                                       - Cliente apto para la compra
}                                                             Aquí tenemos que tener cuidado con el finally porque saldrá antes, como se puede observar. 
*/
/* CON SETTIMEOUT MÁS UN THROW y sin FINALLY -> El catch no cogió el error porque es asíncrono. Es decir, el try/catch nos servirá si trabajamos con cosas síncronas
try {         

    console.log('Llamando al backend ')
    setTimeout(() => {
        console.log('El backend nos responde: ')
        
        throw('El cliente no está apto para la compra')
    }, 1000);
} catch (error){
     
    console.log('Algo falló ', error)
}

*/

/* SINCRONÍA EN JAVASCRIPT:
La sincronía en JavaScript es la capacidad que tiene este lenguaje de realizar tareas sin bloquear la ejecución del programa principal.
En lugar de esperar a que se complete la primera tarea para seguir con la siguiente, JavaScript permite hacer muchas tareas en simultáneo 
e ir manejando a medida que esté lista la información de las tareas anteriores. Si bien JavaScript está basado en un lenguaje de un solo hilo, 
que ejecuta una tarea a la vez, a través de las funciones asíncronas y los callbacks, JavaScript es capaz de realizar múltiples tareas 
e ir manejando los resultados a medida que estén disponibles.
*/
