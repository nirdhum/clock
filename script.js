const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const switchElement = document.querySelector('.switch')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

switchElement.addEventListener('change', function (e) {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }
})

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const clockHours = (hours > 12) ? (hours % 12) : hours
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const date = time.getDate()
    const month = time.getMonth()
    const day = time.getDay()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeElement.innerHTML = `${clockHours < 10 ? `0${clockHours}` : clockHours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`
    dateElement.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000);

setTime()