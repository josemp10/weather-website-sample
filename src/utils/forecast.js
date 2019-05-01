
const request = require ('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/ada6a10db00e58224b8a3bfb88467749/'+
    latitude+','+longitude+'?units=si'

    request({url, json: true}, (error, {body}) =>{
        if (error) {
            callback('Unable to connect!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            callback (undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipitation: body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast