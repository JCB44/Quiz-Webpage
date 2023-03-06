var a =$('#option1')
var b =$('#option2')
var c =$('#option3')
var d =$('#option4')

const questionEl = $("question")
const answerButtonsEl = $("answer-buttons")

const currentQuestionIndex=('')
function setNextQuestion(){
showQuestion(currentQuestionIndex)
}
function showQuestion(question){

}
function selectAnswer(){

}

const questions =[
{
question: "whats 9+10?",
answers: [
  {text: "4", correct:true},
  {text: "22", correct:false}
]
}

]