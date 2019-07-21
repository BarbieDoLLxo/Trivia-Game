$(document).ready(function(){
    $(".btn").on("click", function(){ 

start();



    })
    window.onload = function() {
        // $("#stop").on("click", stop);
        // $("#reset").on("click", reset);
        // $("#start").on("click", start);

      


    }


var clockRunning=false;
var time=15;
var intervalId;





    function start() {

        
        if (!clockRunning) {
          intervalId = setInterval(function(){
count();

if (time<1){
clearInterval(intervalId);


}

          } ,1000);
          clockRunning = true;
         
          
              
          }

function stop(){
    if (time< 0);


}



        }
    


$(".center").append("00:00");






var converted = timeConverter(time);

 
  

function count() {

  
  time--;

  
  var converted = timeConverter(time);
  console.log(converted);

  
  $(".center").text(converted);
}
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}





function timeConverter(t) {

  
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}





(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = "input[name=question ${questionNumber}]:checked";
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  


  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "Which of these is a fruit?",
      answers: {
        a: "Avacado",
        b: "Lettuce",
        c: "Tomato"
      },
      correctAnswer: "c"
    },
    {
      question: "What was Waldo wearing?",
      answers: {
        a: "Blue Squares",
        b: "Green Circles",
        c: "Red Stripes"
      },
      correctAnswer: "c"
    },
    {
      question: "Why is it so hot ouside?",
      answers: {
        a: "Global Warming",
        b: "Too Much Exploring the Pacific Ocean",
        c: "I don't Know",
        d: "Hell is on Earth"
      },
      correctAnswer: "d"  
    }
  ];


 






  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
























































































});