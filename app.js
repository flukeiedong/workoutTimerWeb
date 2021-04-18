var time_remain = document.getElementById("time_remain");
var title = document.querySelector(".title");
var round_text = document.querySelector(".round");
var input_form = document.querySelector(".input_form");

var lapTime = 40;
var restTime = 15;
var totalTime = 0;
var remainTime = lapTime;
var count = 0;
var round = 0;
var breakMode = false;

var names = ["Pace", "Squat", "Jumping Jacks", "Walking Lunge", "Prank"];

function start(){
  // totalTimer = setInterval(timer, 1000);

  workoutTimer = setInterval(startWorkout, 1000);

}

function timer(){
  totalTime++;
  lapTime--;
  console.log(totalTime);
}

function stopWorkout() {
  // Stop the timer...
  clearInterval(workoutTimer);
}

function startWorkout() {
  // countdown lap time of each exercise
  remainTime--;
  console.log(remainTime);
  time_remain.innerHTML = remainTime;

  // switch to break time 15s
  if (remainTime == 0){

    if (breakMode == false) {
      breakMode = !breakMode;
      remainTime = restTime;
      time_remain.innerHTML = remainTime;
      title.innerHTML = "BREAK...";

      if (count < 4) {count++;}
      else {
        count = 0;
        round++;
        if (round == 3){
          stopWorkout();
          title.innerHTML = "GOOD JOB:)";
        }
      }
    }

    else {
      round_text.innerHTML = "ROUND" + (round+1).toString();
      breakMode = !breakMode;
      remainTime = lapTime
      // remainTime--;
      time_remain.innerHTML = remainTime;
      title.innerHTML = names[count];
    }
  }
}

function setting(){
  if (input_form.style.display == "none"){
    input_form.style.display = "block"
  }
  else {
    input_form.style.display = "none";
  }
}

function save(){
  laptime_input = document.getElementById("laptime_input");
  breaktime_input = document.getElementById("breaktime_input");
  lapTime = parseInt(laptime_input.value);
  restTime = parseInt(breaktime_input.value);
  console.log(lapTime, restTime);
  input_form.style.display = "none";
  alert("SAVED laptime: " + lapTime + ", breaktime: " + restTime);
  remainTime = lapTime;
  time_remain.innerHTML = lapTime;
}
