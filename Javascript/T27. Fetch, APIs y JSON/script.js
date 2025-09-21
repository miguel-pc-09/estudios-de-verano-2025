/*
¿Qué es una API?:
Application Programming Interface, es decir, una interfaz de programación de aplicaciones. Es un conjunto de reglas predeterminadas
que nos van a permitir que se comuniquen dos sistemas diferentes. Esto es muy utilizado cuando, por ejemplo, queremos que un Front consuma un backend,
se comunican entre sí a través de una API o si queremos consumir, por ejemplo, información de un tercero, necesitamos esa comunicación a través de una API.
Como todas trabajan a través de un protocolo, todas se van a entender con estas reglas predeterminadas.
*/

// Primero iremos a la página -> https://jsonplaceholder.typicode.com/
/*
Poniendo: 
  /post     -> 100 posts  Recuperar posteos
  /comments -> 500 comments
  /albums   -> 100 albums
  /photos   -> 5000 photos
  /todos    -> 200 todos
  /user     -> 10 users
También podríamos montar una query, y esta forma sería la más correcta 

let urlBase = 'https://jsonplaceholder.typicode.com '
let query = 'comments?postId=5'
fetch(`${urlBase}/${query}`)                      -> query sobre los post de Id 5
        .then(response => response.json())
        .then(json => console.log(json))

*/

// ---------------- MÉTODO GET: PEDIR INFORMACIÓN ------------------------------------------------- 
fetch('https://jsonplaceholder.typicode.com/post ') // Aquí se ponen. Abrimos la página live server y podemos ver lo siguiente 
  .then(response => response.json())
  .then(json => console.log(json))
 
let requestBody = {
    title: 'Miguel comenta sobre tu foto',
    body: '¡Qué bella foto prima, se te extraña! ',
    userId: 1,
}
// Si dentro de la web sale 200 y verde quiere decir que está correcto. 404 y rojo: algo está mal. 

/*
JSON: 
JavaScript Object Notation, es un formato de intercambio de datos. Sirve para representar datos estructurados como, por ejemplo, objetos y arrays. 
Y tiene una sintaxis muy parecida a los objetos literales de JavaScript, ya que cuenta con dos llaves que lo encierran y adentro hay pares clave-valor 
separados por los dos puntos. Se utiliza para intercambiar información entre servidor y cliente o distintas partes de la aplicación web. 
*/

// ---------------------------- POST: ENVIAR INFORMACIÓN (CUANDO COMENTAMOS) -------------------------------------------
// Necesitaremos una cosa más. El body es una especie de objeto que le vamos a mandar en formato JSON para que haga un post en la base de datos o en la API
// CORS debajo de method: una política de seguridad del navegador. 
// Solo permite que una web haga peticiones fetch/XHR a otro origen (otro esquema/host/puerto) si el servidor de destino lo autoriza.
fetch(`${urlBase}/post`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody)
})                      
        .then(response => response.json())
        .then(json => console.log(json))



// En web debería salirnos el código 201, es decir, fue exitoso. Y en Payload debería salir lo que mandamos. 

// ---------------------------- PUT: EDITAR INFORMACIÓN  EJEMPLO CUANDO EDITAMOS UN COMENTARIO EN FACEBOOK -------------------------------------------
// Aquí añadimos el id
let posteo = 5
let requestBody2 = {
    id: 3,
    title: 'Miguel comenta sobre tu foto',
    body: '¡Qué bella foto prima, se te extraña! ',
    userId: 1,
}

fetch(`${urlBase}/post/${posteo}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody2)
})                      
        .then(response => response.json())
        .then(json => console.log(json))

// --------------------------- PATCH: EDITAR INFORMACIÓN  (SOLO SE EDITA UN ATRIBUTO)------------------------------------------
// EJEMPLO: Si un objeto que estamos mandando tiene 5 atributos y mandamos uno solo para editar se manda el patch y se edita
let post = 10
let modificacion = {
    title : ' Este título ha sido modificado'
}
fetch(`${urlBase}/post/${post}`,{
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(modificacion)
})                      
        .then(response => response.json())
        .then(json => console.log(json))

// --------------------------- DELETE (BORRAR UN ÍTEM) ------------------------------------------
// Eliminar solo el 7 
let elementoAEliminar = 7
fetch(`${urlBase}/posts/${elementoAEliminar}`,{
    method: 'DELETE'
});
