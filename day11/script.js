
async function getData() {
    let url = "https://api.weatherapi.com/v1/current.json?key=75f11d524d2749e4beb110806231909&q=India"
    let response =await fetch(url)
    let data =await response.json()
    console.log(data)
}

getData()