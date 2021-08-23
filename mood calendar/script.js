console.log('js is loaded')

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const COLORS = ['#FF9A00', '#33CBCB', '#FFBAA8']

let currentEmotion = 'red'

const date = new Date();
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const currentYear = new Date().getFullYear()
let dayHtml = ''
function run() {
    for (let month = 1; month <= 12; month++) {
        let firstDayOfMonth = new Date(currentYear, month - 1, 1);
        let dayOfWeek = firstDayOfMonth.getDay()
        let totalDayOfMonth = new Date(currentYear, month, 0).getDate()
        // console.log('first day', firstDayOfMonth)
        // console.log('days', totalDayOfMonth)
        // console.log('day of week', dayOfWeek)
        dayHtml += ` <div class="month" id="month">
                        <div class="name"> ${MONTHS[month - 1]}</div>
                        <div class="date-title"> Sun</div>
                        <div class="date-title"> Tue</div>
                        <div class="date-title"> Wed</div>
                        <div class="date-title"> Thu</div>
                        <div class="date-title"> Fri</div>
                        <div class="date-title"> Sat</div>
                        <div class="date-title"> Mon</div>`
        for (let j = 0; j < dayOfWeek; j++) {
            dayHtml += `<div class="date"> </div> \n`

        }
        for (let k = 1; k <= totalDayOfMonth; k++) {
            dayHtml += `<div class="date"><span class ="circle">${k}</span> </div> \n`
        }
        dayHtml += ` </div> \n`

    }
    let month = document.getElementById('months')
    month.innerHTML = dayHtml
    // return new Promise((resolve, reject)=>{

    // })
}
function randomColor() {
    let circles = document.querySelectorAll('.circle')
    circles.forEach(item => {
        let index = Math.floor(Math.random() * COLORS.length)
        item.style.backgroundColor = COLORS[index]
        changeEmotion(item)
    })
}
function resetColor() {
    let colors = document.querySelectorAll('.block')
    colors.forEach(item => {
        item.style.border = ''
    })
    let circles = document.querySelectorAll('.circle')
    circles.forEach(item => {
        // let index = Math.floor(Math.random() * COLORS.length)
        item.style.backgroundColor = 'blueviolet'
    })
}
function changeEmotion(day) {
    day.addEventListener('click', (item) => {
        day.style.backgroundColor = currentEmotion
    })
}
function addListener() {
    let resetElement = document.getElementById('reset')
    resetElement.addEventListener('click', (item) => {
        console.log('reset')
        resetColor()
    })
    let colors = document.querySelectorAll('.block')
    colors.forEach(item => {
        item.addEventListener('click', () => {
            currentEmotion = rgb2hex(window.getComputedStyle(item).backgroundColor).toUpperCase()
            colors.forEach(item => {
                item.style.border = ''
            })
            console.log('chosen color', currentEmotion)
            item.style.border = "thick solid #0000FF";
        })


    })

}


var hexDigits = new Array
    ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

run()
randomColor()
addListener()

