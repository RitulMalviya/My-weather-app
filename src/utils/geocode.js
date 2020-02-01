const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoicml0dWxtYWx2aXlhIiwiYSI6ImNrNW80bG5paDAybGMzbHFqanoxNm1qN2wifQ.X5Xm9MlhD5zDPVnIqZemFg&lim=1'
    request({url,json:true},(error,{ body })=>{
        if(error)
        {
          callback('unable to connect to location service',undefined)
        }
        else if(body.features.length===0)
        {
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                longitude:body.features[0].center[0],
                 latitude:body.features[0].center[1],
                 location:body.features[0].place_name            })
        }
    })
}
module.exports=geocode