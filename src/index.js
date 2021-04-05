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
            return data.main.temp
        })
        .catch(function(err) {
            console.log(err)
        });
}

let result = document.getElementById('result')

function show_result(){
    
}

document.getElementById('submit').addEventListener('click', (e)=>{
    let location = document.getElementById('location').value
    let unit = document.getElementById('unit').value
    let temp = get_weather_data_for(location, unit)
})

