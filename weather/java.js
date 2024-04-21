const url = "https://api.openweathermap.org/data/2.5/weather?q="
const api = "9fd4ce55338a05ec8e264af71c1a9e3e"
const serach = document.getElementById('search')
const windElement = document.querySelector('.wind')
const humidityElement= document.querySelector('.humidity')
const temp =document.querySelector('.temp')
const city =document.querySelector('.city')


function getWeather(){
    const out = url + serach.value + '&appid=' + api
    console.log(out) 
    fetch(out).then((res) => {
        if(res.status==404){
            alert("avvadhuamma")
        }
        return res.json()
    }).then((data)=>{
        windElement.innerText = data.wind.speed + " m/s"
        console.log(data.wind.speed)
        humidityElement.innerText = data.main.humidity + "%"
        console.log(data.main.humidity)
        temp.innerText = data.main.temp + "°K"
        console.log(data.main.temp)
        city.innerText =data.name
        console.log(data.name)

    })
}