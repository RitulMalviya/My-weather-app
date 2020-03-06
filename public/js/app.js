console.log('client side .javascript file is loaded')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
function month(c) {
    if(c==0) 
        return 'Jan'
    if(c==1) 
        return 'Feb'
    if(c==2) 
        return 'Mar'
    if(c==3) 
        return 'Apr'
    if(c==4) 
        return 'May'
    if(c==5) 
        return 'June'
    if(c==6) 
        return 'July'
    if(c==7) 
        return 'Aug'
    if(c==8) 
        return 'Sep'
    if(c==9) 
        return 'Oct'
    if(c==10) 
        return 'Nov'
    if(c==11) 
        return 'Dec'

}
function day(c) {
    if(c==1) 
        return 'Monday'
    if(c==2) 
        return 'Tuesday'
    if(c==3) 
        return 'Wednesday'
    if(c==4) 
        return 'Thrusday'
    if(c==5) 
        return 'Friday'
    if(c==6) 
        return 'Saturday'
    if(c==0) 
        return 'Sunday'
}

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
// const messageOne=document.querySelector('#message-1')
// const messageTwo=document.querySelector('#message-2')
const day1=document.querySelector('#day-1')
const day2=document.querySelector('#day-2')
const day3=document.querySelector('#day-3')
const day4=document.querySelector('#day-4')
const day5=document.querySelector('#day-5')
const day6=document.querySelector('#day-6')
const day7=document.querySelector('#day-7')
const day22=document.querySelector('#day2')
const day33=document.querySelector('#day3')
const day44=document.querySelector('#day4')
const day55=document.querySelector('#day5')
const day66=document.querySelector('#day6')
const day77=document.querySelector('#day7')
const mon=document.querySelector('#mon')
const tue=document.querySelector('#tue')
const wed=document.querySelector('#wed')
const thu=document.querySelector('#thu')
const fri=document.querySelector('#fri')
const sat=document.querySelector('#sat')
const sun=document.querySelector('#sun')
const wind1=document.querySelector('#wind-1')
const loc=document.querySelector('#loc')
const rain=document.querySelector('#rain')
const date=document.querySelector('#date')
const d=new Date()
function setDay() {
    mon.textContent=day(d.getDay())
    tue.textContent=day((d.getDay()+1)%7)
    wed.textContent=day((d.getDay()+2)%7)
    thu.textContent=day((d.getDay()+3)%7)
    fri.textContent=day((d.getDay()+4)%7)
    sat.textContent=day((d.getDay()+5)%7)
    sun.textContent=day((d.getDay()+6)%7)
}
window.onload=(e) =>{
    e.preventDefault()
    const location='bhopal'
// messageOne.textContent='Loading...'
// messageTwo.textContent=''
fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            // messageOne.textContent=data.error
        alert(data.error)
        }
        else{
            // messageOne.textContent=data.location
            // messageTwo.textContent=data.forecast
            setDay();
            rain.textContent=data.rain
            date.textContent=d.getDate()+' '+month(d.getMonth())
            day1.textContent=parseInt(data.temp1)
            wind1.textContent=parseInt(data.wind)
            loc.textContent=data.location
            day2.textContent=parseInt(data.temp2h)
            day22.textContent=parseInt(data.temp2l)
            day3.textContent=parseInt(data.temp3h)
            day33.textContent=parseInt(data.temp3l)
            day4.textContent=parseInt(data.temp4h)
            day44.textContent=parseInt(data.temp4l)
            day5.textContent=parseInt(data.temp5h)
            day55.textContent=parseInt(data.temp5l)
            day6.textContent=parseInt(data.temp6h)
            day66.textContent=parseInt(data.temp6l)
            day7.textContent=parseInt(data.temp7h)
            day77.textContent=parseInt(data.temp7l)
            //console.log(data.location)
            //console.log(data.forecast)
        }
    })
})
}
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
const location=search.value
// messageOne.textContent='Loading...'
// messageTwo.textContent=''
fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            // messageOne.textContent=data.error
        alert(data.error)
        }
        else{
            // messageOne.textContent=data.location
            // messageTwo.textContent=data.forecast
            setDay();
            rain.textContent=data.rain
            date.textContent=d.getDate()+' '+month(d.getMonth())
            day1.textContent=parseInt(data.temp1)
            wind1.textContent=parseInt(data.wind)
            loc.textContent=data.location
            day2.textContent=parseInt(data.temp2h)
            day22.textContent=parseInt(data.temp2l)
            day3.textContent=parseInt(data.temp3h)
            day33.textContent=parseInt(data.temp3l)
            day4.textContent=parseInt(data.temp4h)
            day44.textContent=parseInt(data.temp4l)
            day5.textContent=parseInt(data.temp5h)
            day55.textContent=parseInt(data.temp5l)
            day6.textContent=parseInt(data.temp6h)
            day66.textContent=parseInt(data.temp6l)
            day7.textContent=parseInt(data.temp7h)
            day77.textContent=parseInt(data.temp7l)
            //console.log(data.location)
            //console.log(data.forecast)
        }
    })
})
})
