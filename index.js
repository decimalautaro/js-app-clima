let long
let lat
let temperature = document.querySelector('.temp')
let description = document.querySelector('.description')
let loc = document.querySelector('.location')
let icon = document.querySelector('.icon')



window.addEventListener('load',()=> {
    if(navigator.geolocation){  //navigator es una propiedad a la que puedo acceder y geolocation son las coordenadas del cliente

        navigator.geolocation.getCurrentPosition((position) =>{//getCurrentPosition es un metodo para obtener posicion actual


            console.log(position);
            long = position.coords.longitude
            lat = position.coords.latitude
            

            const API_ID = '321bbdc5b44c6b4249925130623d7a95' //valor de api key para consumir api

            const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_ID}`

            fetch(url_base)
            .then((response)=> {
                console.log('Respuesta json');
                return response.json()
            }) 
            .then((data) =>{
                console.log ('Esta es la data')
                console.log(data);
            })
            
        }
        ) 


    }   

})