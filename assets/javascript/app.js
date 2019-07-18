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
var time=30;
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
});