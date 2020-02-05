const express = require('express')
const app = express();
const cors = require('cors')

const fakeWeatherData = require('./data.js')

app.use(cors());    

app.get('/weather', (req, res) => {

    let cityName = req.query.city.toLowerCase();

    for(let i = 0; i < fakeWeatherData.length; i++)

    if(!cityName) {
        res.send({"status": "error", "message": "Please enter a city name"})
    } else if (cityName === fakeWeatherData[i].city.toLowerCase()) {
        return res.send(fakeWeatherData[i])
    }

    res.send({"status": "error", "message": "Sorry! This city isn't in the database :{"})

})





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Up and listening on port ${PORT}`)
})