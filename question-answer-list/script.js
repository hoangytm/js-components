let parentAnswer = document.getElementById("content")
const data = [
    { id: 1, question: 'Xin cho biết  thế nào được xem  là " Công chức lãnh đạo, quản lý đang trong thời hạn xử lý kỷ luật, đang bị điều tra, truy tố, xét xử" theo Điểm a Khoản 5 Điều 49  Mục 4. BỔ NHIỆM LẠI, KÉO DÀI THỜI GIAN GIỮ CHỨC VỤ LÃNH ĐẠO, QUẢN LÝ cua Nghị định số 138/2020/NĐ-CP ngày 27/11/2020 của Chính  phủ quy định về tuyển dụng, sử sung và qản lý công chức', answer: 'do you have any challenge' },
    { id: 2, question: 'Java là ngôn ngữ lập trình cấp cao, hướng đối tượng, mạnh mẽ, an toàn, độc lập với nền tảng, hiệu suất cao, đa luồng và ngôn ngữ lập trình di động. Nó được phát triển bởi Ja', answer: 'do you have any challenge' },
    { id: 3, question: 'Đơn giản: Java rất dễ học. Cú pháp của Java dựa trên C ++, giúp viết chương trình trong đó dễ dàng hơn.', answer: 'do you have any challenge' },
]
function loadQuestion() {
    let element = document.createElement('div');
    element.classList.add("question-answer");
    data.forEach((item,index) => {
       let child = `
                    <div class="quesition" data-id="${item.id}">
                    Câu ${index+1}: <br>
                        ${item.question}
                    </div>
                   `
                   element.insertAdjacentHTML('beforeend', child);
                   parentAnswer.appendChild(element);
    })
  
    showQuesiton()
}
loadQuestion()
function showQuesiton() {
    let quesitions = document.querySelectorAll(".quesition")
    quesitions.forEach(quesition => {
        quesition.addEventListener("click", () => {
            createAnswer(quesition)
        })
    })
}
function createAnswer(quesition) {
    let answers = document.querySelectorAll(".answer")
    answers.forEach(answer=> answer.remove())
    let answer = data.find(item => item.id == quesition.dataset.id).answer
    console.log('answer', answer)
    let element = document.createElement('div');
    element.classList.add("answer");
    element.innerHTML  = `Trả lời: <br> ${answer}`
    quesition.parentNode.insertBefore(element, quesition.nextSibling);
}

function removeAllAnswers() {
    console.log('show answer')
}