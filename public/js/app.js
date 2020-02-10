console.log('client side .javascript file is loaded')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

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
const wind1=document.querySelector('#wind-1')
const loc=document.querySelector('#loc')
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
