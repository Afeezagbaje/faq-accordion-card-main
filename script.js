const quetions = document.querySelectorAll(".question")

for(let question of quetions){
    question.addEventListener('click',() => {
        question.classList.toggle("open")
    })
}