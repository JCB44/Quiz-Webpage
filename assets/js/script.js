
startTimer()
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");

var question = {
  title: '9+10',
  al: ["19","4","3","21"],
  correctAnswer: 0
}

function showQuestion(q){
  //jquery did not want to work for this
  var titleEl = document.getElementById("title")

  titleEl.textContent = q.title;

  //DO NOT MIX JQUERY WITH VANILA JAVASCRIPT 
  //OH MY GOODNESS THE TIME IVE LOST WITH THESE FEW LINES OF CODE

 var alts = $('.al')//document.querySelectorAll('.al')
 console.log(alts)
 alts.each(function(index){
  console.log(alts)
  this.textContent = q.al[index];
  $(this).click(function(){
    console.log('click')
    if (q.correctAnswer == index){
      console.log("correct")
      $('.result').empty();
      $( ".result" ).append( "<h1>Correct!</h1>" );
    }
    else{
      console.log("incorrect")
      $('.result').empty();
      $( ".result" ).append( "<h1>Incorrect</h1>" );
    }
  });

  
});

 
}
showQuestion(question);

    


function startTimer() {
  // Sets timer
  timerCount = 121
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}