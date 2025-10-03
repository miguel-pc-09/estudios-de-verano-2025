/*

 Promesas en JavaScript son un tipo especial de objeto que nos permiten realizar tareas asíncronas y luego manejar los resultados.
 Una promesa puede fallar o puede ser exitosa, y esto nos va a devolver un valor y lo podremos utilizar en nuestro código. 
 Lo más importante de las promesas es que nos permiten manejar una secuencialidad de acciones. Uno de los motivos más importantes
 y más utilizados de las promesas es para poder consumir APIs que nos van a traer información de un servidor, de terceros o de un backend
 y esto tiene una demora y nosotros necesitamos mantener una secuencialidad en nuestras acciones en el código. 

 */

/*

let promesa = new Promise((response, reject) => {
    
    let resp = 'Esta es la respuesta del servicio '
    response(resp)
    reject('Falló')

})

promesa.then(res => {                 // Consola si todo sale bien "Esta es la respuesta del servicio" 
    console.log(res)                  
}).catch(error => {                   // Response lo comentamos para que salga el fallo y en consola sale Falló; por web sale en rojo. Si ponemos warn cambiará a amarillo
    console.error(error)
})

*/
// -------------- Con OBJETO ------------------------------------
/* 

let promesa = new Promise((response, reject) => {
    
    let resp = {
        response: 200,
        description: 'Esta info es importante '
    }
    response(resp)
    reject('Falló')

})

promesa.then(res => {                 
    console.log(res.description)                  
}).catch(error => {                   
    console.warn(error)
})

*/
// --------- SI DEMORA -------------------------------------------------

let promesa = new Promise((response, reject) => {
    
    setTimeout(() => {
        let resp = {
        response: 200,
        description: 'Esta info es importante '
    }
    response(resp)
    reject('Falló')
    }, 3000);                        // 3000 son tres segundos 

})

promesa.then(res => {                 
    console.log(res.description)                  
}).catch(error => {                   
    console.warn(error)
})

// ----- VARIAS PROMESAS ------------------

let promesa1 = new Promise((response) => {
    
    setTimeout(() => {
        let resp = {
        response: 200,
        description: '1 Esta info es importante '
    }
    response(resp)
    
    }, 3000);                       

})
let promesa2 = new Promise((response) => {
    
    setTimeout(() => {
        let resp = {
        response: 200,
        description: '2 Esta info es importante pero suele demorar mucho '
    }
    response(resp)
    
    }, 5000);                         

})

let promesa3 = new Promise((response) => {
    
    setTimeout(() => {
        let resp = {
        response: 200,
        description: '3 Información rápida  '
    }
    response(resp)
    
    }, 2500);                         

})

promesa1.then(res => {                 
    console.log(res.description)
    promesa2.then(res => {                                  // Pirámide de la perdición 
        console.log(res.description)
        promesa3.then(res => {
            console.log(res)
        }).catch(error => {
        console.warn(error)
    }) 
    }).catch(error => {
        console.warn(error)
    })                  
}).catch(error => {                   
    console.warn(error)
})
