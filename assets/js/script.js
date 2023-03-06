startTimer()
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");

var question = {
  title: '9+10',
  al: ["19","4","3","21"],
  correctAnswer: 1
}

function showQuestion(q){
  //jquery did not want to work for this
  var titleEl = document.getElementById("title")

  titleEl.textContent = q.title;

 var alts = $('.al')//document.querySelectorAll('.al')
 console.log(alts)
 alts.forEach(function(element, index){
  element.textContent = q.al[index];
 
});

  // alts.array.forEach(element => {
  //   element.textContent = "a"
  // });

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