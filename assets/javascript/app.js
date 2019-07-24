
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    var timeLeft=25
    var timer=document.getElementById('timer');
    var timerID = setInterval(countdown, 1000);

    
 function countdown(){
    
        if (timeLeft < 0){
            clearTimeout(timerID);
            
            showResults(questions, quizContainer, resultsContainer);
        }else{
            timer.innerHTML = timeLeft + ' ';
            timeLeft--;
        }
        
        }
 function showQuestions(questions, quizContainer){
 var output=[];
 var answers;
 for (var i =0; i<questions.length; i++){
     answers= [];
     for(letter in questions[i].answers){
         answers.push(
             '<label>'+'<input type="radio" name="question'+ i +'"value="'+letter+'">'+ letter + ':'+ questions[i].answers[letter]+'</label>'
         );
     }
     output.push(
        '<div class="question">' + questions[i].question + '</div>'+'<div class="answers">' + answers.join('') +'</div>'
    );
    }
    quizContainer.innerHTML = output.join('');
 }
 
 function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect=0;
    var numIncorrect=0
 
    for(var i=0; i<questions.length; i++){
        userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
            numCorrect++;
        }else {
            numIncorrect++;
        }
    }
    resultsContainer.innerHTML = "Right Answers " + numCorrect + "  Incorrect Answers " + numIncorrect
 }
 
 showQuestions(questions, quizContainer);
 
 submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
 
 }
 }
 var myQuestions = [
    {
        question: "What color was waldo wearing?",

        answers:{
            a: ' Red stripes',
            b: ' Blue circles',
            c: ' Yellow triangles',

        },

        correctAnswer: 'a'
    },


    { question: "Why is it so hot outside?",

      answers:{
            a: 'Global warming', 
            b: 'It is perfect outside',
            c: ' Hell is on Earth',
    },

    correctAnswer: 'c'
    },

    { question: "Which color is classic?",

      answers:{
            a: ' White',
            b: ' Pink',
            c: ' Black',
    },

    correctAnswer: 'c'
    },
    
 ];
 
 var quizContainer = document.getElementById('quiz');
 var resultsContainer = document.getElementById('results');
 var submitButton = document.getElementById('submit');
 generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
 