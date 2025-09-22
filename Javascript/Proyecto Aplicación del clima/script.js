let urlBase = 'https://api.openweathermap.org/data/2.5/weather' 
let api_key = '98d4a64be2c3c7a3cbab39a094b41336'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', ( )=> {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    // console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''                                   // Vacía para nueva búsqueda

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion  = data.weather[0].description
    const icono = data.weather[0].icon

    // Crear elementos
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}ºC `

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/10d@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

}



/* Parte 1: prueba de funcionamiento o paso 1.
Con esta parte de código dentro de consola en la parte web, en el apartado del main deberíamos ver lo siguiente: 
let api_key = '98d4a64be2c3c7a3cbab39a094b41336'

let difKelvin = 273.15

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Londres&appid=${api_key}`)
    .then(response => response.json())
    .then(response => console.log(response))

    Consola web: 
    main: 
        feels_like: 285.68
        grnd_level: 1017
        humidity: 53
        pressure: 1021
        sea_level: 1021
        temp: 286.87
        temp_max: 287.69
        temp_min: 285.92
*/
