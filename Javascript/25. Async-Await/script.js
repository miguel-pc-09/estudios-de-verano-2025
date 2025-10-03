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

/*
promesa1.then(res => {                 
    console.log(res.description)
    promesa2.then(res => {                                 
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
*/

/*
  Para poder solucionar esto, "Pirámide de la perdición", vamos a utilizar lo que es ASYNC AWAIT. 
  Es una forma de trabajar promesas utilizando las palabras reservadas ASYNC AWAIT, la cual la ASYNC va a ser una función que sepa que es asíncrona y 
  el AWAIT va a ser una palabra que vamos a utilizar para esperar a que las promesas se cumplan. 
*/

async function ejecutarPromesas() {
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1)
    let respuestaProm2 = await promesa2
    console.log(respuestaProm2)
    let respuestaProm3 = await promesa3
    console.log(respuestaProm3)
}

ejecutarPromesas()
/*
Consola respetando el orden y sus tiempos saldrá lo siguiente:  

{ response: 200, description: '1 Esta info es importante ' }
{
  response: 200,
  description: '2 Esta info es importante pero suele demorar mucho '
}
{ response: 200, description: '3 Información rápida  ' }

*/
