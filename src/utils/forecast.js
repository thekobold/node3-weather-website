const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2f9f8927e5b88c5b1c60eaa8a32b3b2b&query=${latitude},${longitude}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.\n\nHumidity is at ${body.current.humidity}. Visibility is at ${body.current.visibility}.`)
        }
    })
}

module.exports = forecast