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
            currentEmotion = window.getComputedStyle(item).backgroundColor
            colors.forEach(item => {
                item.style.border = ''
            })
            console.log('chosen color', currentEmotion)
            item.style.border = "thick solid #0000FF";
        })


    })

}

function createSnowFlake() {
	// Creating the <i> tag
	const snow_flake = document.createElement('i');
	// Adding the required classes for the FontAwesome icon to show up
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');

	// Randomly generate the width to be between 10 and 20 px
	snow_flake.style.width = Math.random() * 10 + 10 + 'px';

	// Randomly generate the left position to be between 0 and the innerWidth of the screen
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';

	// Randomly generate the animationDuration - between 2 and 5 seconds
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';

	// Randomly add an opacity - between 0 and 1
	snow_flake.style.opacity = Math.random();

	// Add the newly created <i> tag inside the <body> tag
    let body = document.getElementById('body')
	body.appendChild(snow_flake);


	// Set a timeout to remove the snow_flake from the DOM after 5 seconds
	// as we don't want it to overload the page
	setTimeout(() => {
		snow_flake.remove();
	}, 5000);
}

run()
randomColor()
addListener()
setInterval(createSnowFlake,50)

