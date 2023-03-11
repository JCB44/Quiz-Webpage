startTimer()
renderHighScore()
$("#initialInput").hide()
$("#hideEl").hide()
$("#submit").hide()
var initialDiv =$('#initialDiv')
// var scoreDiv =$('#scoreDiv')

function renderHighScore(){
  var Initials = localStorage.getItem('Initials')
  var Score = localStorage.getItem('Score')
  $( "#initialDiv" ).append("<h4>" + Initials +" &nbsp;" + Score)
  // $( "#scoreDiv" ).append(Score)
}
var submit = ('#submit')
var initialInput = $('#initialInput')
console.log(initialInput)
var CorrectCount = 0
var IncorrectCount = 0
var i
var paused = false
var alts = $('.al')//document.querySelectorAll('.al')
var timer;
var timerCount;
// a youtube video showed me this and im not bothering finding a better way
var timerEnd = setInterval(function() {
  if(paused === true) {
    timerCount++;
  }
}, 1000);
var timerElement = document.querySelector(".timer");
var qIndex = 0
var question = [{
  title: '1. Commonly used data types DO NOT include:',
  al: ["strings","booleans","alerts","numbers"],
  correctAnswer: 2
},
{
  title: '2. The condition in an if / else statement is enclosed with _________',
  al: ["quotes","curly brackets","parenthesis","square brackets"],
  correctAnswer: 2
},
{
  title: '3. Arrays in JavaScript can be used to store ________',
  al: ["numbers and strings","other arrays","booleans","all of the above"],
  correctAnswer: 3
},
{
  title: '4. String values must be enclosed within _____ when being assigned to variables',
  al: ["commas","curly brackets","quotes","parenthesis"],
  correctAnswer: 2
},
{
  title: '5. A very useful tool used during development and debugging for printing content to the debugger is:',
  al: ["JavaScript","terminal/bash","for loops","console.log"],
  correctAnswer: 3
},
{
  title: "6. What will the code below output to the console? console.log(1 +  +'2' + '2');",
  al: ["32","122","13","14"],
  correctAnswer: 0,
}
]
function showQuestion(q){
  //jquery did not want to work for this
  var titleEl = document.getElementById("title")
  titleEl.textContent = q[qIndex].title;
  //DO NOT MIX JQUERY WITH VANILA JAVASCRIPT 
  //OH MY GOODNESS THE TIME IVE LOST WITH THESE FEW LINES OF CODE
 alts.each(function(index){
  this.textContent = q[qIndex].al[index];
});
}
// detects click on the 4 question options aswell as having logic for correct or incorect answer
$('.al').click(function(e){
  console.log(qIndex)
  console.log(e.target)
  //  \/ ask me to explaing this one line code and i wont answer
  i=e.target.id
  //--------------------------------------------------------------------------------------------------
  //had to hardcode this as the end becuase i cold not find a better alternative that worked         |
  //if add more questions, update this qIndex == X value to match the last number of question array  |
  // \/ \/ \/ \/ \/ \/--------------------------------------------------------------------------------
  if (qIndex == 5){
    console.log('end')
    questionEnd()
  } 
  if (question[qIndex].correctAnswer == i){
    correct()
    qIndex++
   showQuestion(question)
  }
  else{
    incorrect()
    qIndex++
   showQuestion(question)
  }
});
//these comments keep my sanity in check
function startTimer() {
  // Sets timer -------
  timerCount = 121
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = ('Time: ' + timerCount);
    if (timerCount <= 0) {
      $('.list-group').empty();
      $('#title').empty();
      $('.result').empty();
      $( "#title" ).append( "<h1>You ran out of time!</h1> <br><h2>Your score was: " +  (timerCount) +"</h2> <h3>Refresh the page to try again or check out your high score at the top left!</h3>" );
      // $("#initialInput").show()
      // $("#submit").show()
      clearInterval(timer);
    }
  }, 1000);
}
function correct(){
  console.log("correct")
      CorrectCount += 1
      $('.result').empty();
      $( ".result" ).append( "<h1>Correct!</h1>" );
}
function incorrect(){
  console.log("incorrect")
      IncorrectCount += 1
      timerCount -= 10
      $('.result').empty();
      $( ".result" ).append( "<h1>Incorrect</h1>" );
}
// this looks dumb and thats becuase it is
function questionEnd(){
$('.list-group').empty();
$('#title').empty();
$( "#title" ).append( "<h1>You completed the quiz!</h1> <br><h2>Your score was: " +  (timerCount) +"</h2>" );
$("#initialInput").show()
$("#hideEl").show()
$("#submit").show()
paused = true
localStore()
}
//im pretty sure this is useless and was only used to test a console log in a weird way
function localStore(){
  var initialInput = $('#initialInput')
console.log(initialInput)
return;
}
//the following code is complete and utter spagetti but it works so im not touching it anymore as well as everything else. until later when i cant sleep becuase im paranoid about unrefined code :)
$(submit).click(function(event){
  event.preventDefault();
  // console.log('pllllllllllleeeeeeeeeeeeeeessaaaaaaaassssse work')
  var Initials = $("#initialInput").val();
  event.preventDefault();
  if (Initials === "") {
    console.log('coding make brian hurty')
    alert('You must Enter you initials in the field to save your score!')
  } else {
    console.log('Score Saved')
    localStorage.setItem("Initials", Initials);
    localStorage.setItem("Score", timerCount);
  //   console.log("click?")
  //   console.log(initialInput)
  }
});

showQuestion(question);
