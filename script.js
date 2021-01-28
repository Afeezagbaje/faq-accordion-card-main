const questions = document.querySelectorAll(".question")

for(let question of questions){
    question.addEventListener('click',() => {
        if(question.classList.contains("open")){
            question.classList.toggle("open")
        }else{
           for(let question of questions){
                question.classList.remove("open")
           } 
           question.classList.add("open")
        }
    })
}
