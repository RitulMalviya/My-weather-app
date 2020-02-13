const request=require('request')
const forecast=(longitude,latitude,callback)=>{
const url='https://api.darksky.net/forecast/02eac95088619c8d0172ae40eb9f6046/'+longitude+','+latitude+'?units=si'
request({url,json:true},(error,{ body })=>{
    //const data=JSON.parse(response.body)
    //console.log(response.body.currently)S
    if(error)
    {
        callback('unable to connect weather!',undefined)
    }
    else if(body.error)
    {
        callback('unable to find location!',undefined)
    }
    else{
        callback(undefined,body.daily.data[0].summary+' it is currently '+body.currently.temperature+' degree out there,The temperature high is '+body.daily.data[0].temperatureHigh+',with a low of '+body.daily.data[0].temperatureLow+'. Threre is '+body.currently.precipProbability+'% chance of rain.',body.currently.temperature,body.currently.windSpeed*20,body.currently.precipProbability,body.daily.data[1].temperatureHigh,body.daily.data[1].temperatureLow,body.daily.data[2].temperatureHigh,body.daily.data[2].temperatureLow,body.daily.data[3].temperatureHigh,body.daily.data[3].temperatureLow,body.daily.data[4].temperatureHigh,body.daily.data[4].temperatureLow,body.daily.data[5].temperatureHigh,body.daily.data[5].temperatureLow,body.daily.data[6].temperatureHigh,body.daily.data[6].temperatureLow)
    }
})
}
module.exports=forecast