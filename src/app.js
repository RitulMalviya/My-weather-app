const path=require('path')
const express = require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const app = express()
const port=process.env.PORT || 3000
//Define path for expess config
const publicdir=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
//setup handelbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicdir))
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name:'Ritul',
//         age:21
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather-app',
        name:'Ritul Malviya'
    })
})
app.get('/about',(req,res)=>{
res.render('about',{
    title:'About Me',
    name:'Ritul Malviya'
})
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helptext:'this is some helpful text',
        title:'Help',
        name:'Ritul Malviya'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:'please provide an address!'
        })
    }
    geocode(req.query.address, (error,{latitude,longitude,location} = {})=>{
        if(error)
        {
            return res.send({
                error:error
            })
        }
        forecast(latitude, longitude,(error,data1)=>{
            if(error)
            return res.send({
                error:error
            })
            res.send({
                forecast:data1,
                location:location,
                address:req.query.address
        })
    })

})
})
app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:'You must provide a search term'})
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404page',{
        title:'Help article',
        msg:'help article not found',
        name:'Ritul Malviya'
    })
})
app.get('*',(req,res)=>{
    res.render('404page',{
        title:'404',
        msg:'page not found',
name:'Ritul Malviya'
    })
})
app.listen(port, () => {
    console.log('Server is up on port '+port)
})