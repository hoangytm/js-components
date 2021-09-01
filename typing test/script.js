
let userTypingWords = []
const sentences = 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu'
const data = sentences.split(" ")
function genarateText() {
    let frame = document.getElementById('frame')
    let words = ''
    data.forEach((element, index) => {
        words += ` <span id="${'w' + (index + 1)}"> ${element} </span> \n`
    });
    frame.innerHTML = words
}
genarateText()
$('#type-input').on('keyup', function (event) {
    if (event.keyCode == 32 && this.value.length > 1) {
        userTypingWords.push(this.value)
        check(this.value, userTypingWords.length)
        this.value = ''

    }

});

function check(typingWord, index) {
    let compareWord = document.getElementById('w' + index)
    if (compareWord.innerHTML.trim() == typingWord.trim()) {
        compareWord.style.color = 'blue'

    } else {
        compareWord.style.color = 'red'
    }
}
