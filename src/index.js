import {domNodeCreator} from './domNodeCreator'

function construct_url(location, unit){
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=786b74dc8fce162462303a21c3e890c0&units=${unit}`
}
function get_weather_data_for(location, unit){
    let url = construct_url(location, unit)
    fetch(url, {mode: 'cors'})
        .then(function(response) { 
            return response.json()
        })
        .then(function(data){
            console.log('data fetched')
            let temp = data.main.temp
            render_result(temp, location, unit)            
        })
        .catch(function(err) {
            console.log(err)
        });
}

let result = document.getElementById('result')

function render_result(temp, location, unit){
    console.log('rendering result')
    const tempResult = document.createElement('p')
    tempResult.textContent = temp
    const locationResult = document.createElement('p')
    locationResult.textContent = location
    result.appendChild(tempResult)
    result.appendChild(locationResult)
}

document.getElementById('submit').addEventListener('click', (e)=>{
    let location = document.getElementById('location').value
    let unit = document.getElementById('unit').value
    get_weather_data_for(location, unit)
})

