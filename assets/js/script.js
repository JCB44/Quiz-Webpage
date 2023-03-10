startTimer()
var CorrectCount = 0
var IncorrectCount = 0
var i
var paused = false
var alts = $('.al')//document.querySelectorAll('.al')
var timer;
var timerCount;
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

//function here
// questionEnd
]
function showQuestion(q){
  //jquery did not want to work for this
  var titleEl = document.getElementById("title")

  titleEl.textContent = q[qIndex].title;
  //DO NOT MIX JQUERY WITH VANILA JAVASCRIPT 
  //OH MY GOODNESS THE TIME IVE LOST WITH THESE FEW LINES OF CODE

 
//  console.log(alts)
 alts.each(function(index){
  // console.log(alts)
  this.textContent = q[qIndex].al[index];
  
  

});
}
$('.al').click(function(e){
  console.log(qIndex)
  console.log(e.target)
  i=e.target.id
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
function startTimer() {
  // Sets timer
  timerCount = 121
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = ('Time: ' + timerCount);
    if (timerCount <= 0) {
      $('.list-group').empty();
      $('#title').empty();
      $('.result').empty();
      $( ".result" ).append( "<h1>You ran out of time!</h1> <br><h2>Your score was: " +  (CorrectCount) +"</h2> <h3>Refresh the page to try again or check out your high score at the top left!</h3>" );
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
function questionEnd(){
$('.list-group').empty();
$('#title').empty();
$( "#title" ).append( "<h1>You completed the quiz!</h1> <br><h2>Your score was: " +  (CorrectCount) +"</h2> <h3>Refresh the page to try again or check out your high score at the top left!</h3>" );
paused = true
}

// console.log(lastQuestion)
// if (CorrectCount + IncorrectCount ){
//   questionEnd()
// }
showQuestion(question);
