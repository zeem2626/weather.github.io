const time = document.querySelector(".time span")
const degree = document.querySelector(".degree span")

const URL = "http://api.weatherapi.com/v1/current.json?key=6618d04c643d4cc39c6135432212512&q=Jamshedpur&aqi=no"
const getPost = async (URL)=>{
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

getPost(URL).then(data=>{
    const img = data.current.condition.icon
    const cdegree = data.current.feelslike_c
    const epochTime = data.location.localtime_epoch

    const date = new Date(epochTime*1000)
    const localTime = date.toLocaleTimeString()

    time.textContent = localTime
    degree.textContent = cdegree
})