var rootEl = $('#root');

var question1 =$('#q1')
var question2 =$('#q2')
var question3 =$('#q3')
var question4 =$('#q4')


card1()
function card1() {
  question1.append('1')
  question2.append('2')
  question3.append('3')
  question4.append('4')

  question1.on('click', function (event) {
    console.log('click')
    
    
    clearEl()
    card2()
  })};

function card2() {
  question1.append('ok1')
  question2.append('ok2')
  question3.append('ok3')
  question4.append('ok4')
  
}

function clearEl(){
  question1.empty()
  question2.empty()
  question3.empty()
  question4.empty()
}
