    var myQuestions = [
  {
    question: "What food does Michael think of in the car?",
    answers: {
      a: 'Bangers and mash', 
      b: 'Chocolate and sweets', 
      c: 'Pudding and mince pies', 
      d: 'Turkey and ham'
    },
    correctAnswer: 'c'
  },
  {
    question: "Where did Tom hide his sprouts?",
    answers: {
      a: 'His underwear',
      b: 'Tucked away in his socks',
      c: 'He fed the dog',
      d: 'He threw them on the floor'
    },
    correctAnswer: 'b'
  },
    {
    question: "What is Michael's dog's name?",
    answers: {
      a: 'Bonzo',
      b: 'Gonzo',
      c: 'Kermit',
      d: 'Kate'
    },
    correctAnswer: 'a'
  },
  {
    question: "Who threw their sprouts down the toilet?",
    answers: {
      a: 'Kate',
      b: 'Gran',
      c: 'Tom',
      d: 'Michael'
    },
    correctAnswer: 'd'
  },
  {
    question: "Who ate the most sprouts?",
    answers: {
      a: 'Tom',
      b: 'Michael',
      c: 'Bonzo',
      d: 'Stephanie'
    },
    correctAnswer: 'c'
  }
];

var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quiz, results, submitButton);
function generateQuiz(questions, quiz, results, submitButton){
  function showQuestions(questions, quiz){
    var output = [];
    var answers;
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    quiz.innerHTML = output.join('');
  }


  function showResults(questions, quiz, results){
    var answers = quiz.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    for(var i=0; i<questions.length; i++){
      userAnswer = (answers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        answers[i].style.color = 'lightgreen';
      }
      else{
        answers[i].style.color = 'red';
      }
    }
    results.innerHTML = numCorrect + ' out of ' + questions.length;
  }
  showQuestions(questions, quiz);
  submitButton.onclick = function(){
    showResults(questions, quiz, results);
  }

}