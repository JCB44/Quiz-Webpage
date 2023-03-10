var CorrectCount = 0
var IncorrectCount = 0
var i
startTimer()
var alts = $('.al')//document.querySelectorAll('.al')
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");
var qIndex = 0
var question = [{
  title: '9+10',
  al: ["19","4","3","21"],
  correctAnswer: 0
},
{
  title: 'is water wet',
  al: ["yes","no","maybe","kinda"],
  correctAnswer: 1
},
{
  title: 'Question1',
  al: ["1","2","3","4"],
  correctAnswer: 1
},
{
  title: 'Question2',
  al: ["1","2","3","4"],
  correctAnswer: 2
},
{
  title: 'Question3',
  al: ["1","2","3","4"],
  correctAnswer: 3
},
{
  title: 'Question4',
  al: ["1","2","3","4"],
  correctAnswer: 0
}
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
  // current bug:
$(this).click(function(e){
  console.log(e.target)
  
  i=e.target.id
  // this e.target.id will generate a click for every single element on the page
  // as seen by it console logging the elemnt/body of what you click
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
showQuestion(question);

function startTimer() {
  // Sets timer
  timerCount = 21
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = ('Time: ' + timerCount);
    if (timerCount <= 0) {
      $('.list-group').empty();
      $('#title').empty();
      $('.result').empty();
      $( ".result" ).append( "<h1>You ran out of time!</h1> <br><h2>Your score was: " +  (CorrectCount) +"</h2> <h3>Refresh the page to try again or checkout your high score at the top right!</h3>" );
      clearInterval(timer);
    }
    
  }, 1000);
}
function correct(){
  console.log("correct")
      CorrectCount += 1
      $('.result').empty();
      $( ".result" ).append( "<h1>Correct!</h1>" );
      // console.log(CorrectCount)
      // console.log(IncorrectCount)
}
function incorrect(){
  console.log("incorrect")
      IncorrectCount += 1
      timerCount -= 5
      $('.result').empty();
      $( ".result" ).append( "<h1>Incorrect</h1>" );
      // console.log(CorrectCount)
      // console.log(IncorrectCount)
}