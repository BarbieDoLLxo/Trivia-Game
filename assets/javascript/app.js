$(document).ready(function(){
    $(".btn").on("click", function(){ 

start();



    })
    window.onload = function() {
      
      
      

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





$(".btn2").on("click", function(){ 

  submit();
  
  
  
      })


      var submitAnswers=false;
      var correctAnswers;
      
      function submit(){

if (submitAnswers >1 ){

}

      }
























});

  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  









































































































































