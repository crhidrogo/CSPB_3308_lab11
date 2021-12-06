const difficulties = ["Easy","Pretty Easy", "Medium", "Medium-ish", "Hard", "Hella Hard"];
const goalString = ["lad fad sad dad",
  "dog tog log bog",
  "This is not a test.",
  "So, I was heading to this place, but I couldn't remember the name..",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?",
  "Grow old along with me! The best is yet to be, the last of life, for which the first was made. Our times are in his hand who saith, 'A whole I planned, youth shows but half; Trust God: See all, nor be afraid!"];

let i = 0;
let flag = false; // flag for existence of Next button

window.addEventListener("keypress", function (event) {
  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  
  if (textbox.textContent == goalString[i]) {
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    textbox.textContent = "";

    //create Next button (if it doesn't already exist)
    if (!flag) {
      let next = document.createElement('button');
      flag = true;
      next.textContent = "Next";
      next.addEventListener('click', nextChallenge);
      document.body.appendChild(next);
    }
  
  } // end of correct user input statement 
  
}); // end of window listening

// create Restart button
restartButton = document.querySelector("#restartButton");
restartButton.addEventListener('click', restart);

function restart() {
  // In here set i=0
  i = 0;
  // find the level, result, and goal elements and reset their textContent
  let lvl = document.getElementById("level");
  lvl.textContent = difficulties[i];
  let goal = document.getElementById("goal");
  goal.textContent = goalString[i];
  result.textContent = "Type the Following text:";
  let textbox = document.getElementById("userinput");
  textbox.textContent = ""; // after reset when user enters space, entire string is set to ""
  document.body.removeChild(next);
  flag = false;

  // timer
  if (typeof start != 'undefined'){
    let start = 0;
    document.body.removeChild(timing);
  }
}

// create Next button functionality
function nextChallenge (){
  i = i+1;
  result.textContent = "Type the Following text:";
  lvl = document.getElementById("level");
  lvl.textContent = difficulties[i];
  goal = document.getElementById("goal");
  goal.textContent = goalString[i];
  textbox = document.getElementById("userinput");
  textbox.textContent = "";

  //timer
  if (typeof start != 'undefined') {
    let end = Date.now();
    let diff = (end - start)/1000;

    let pIncrement = 0;
    let timing = document.createElement('p');
    timing.id = `time${pIncrement}`;
    pIncrement = pIncrement + 1;
    timing.textContent = diff;
    //let timing = document.createTextNode(diff);
    document.getElementById("timers").appendChild(timing);
  }
  
}

// create timer functionality
timerButton = document.querySelector("#timerButton")
timerButton.addEventListener('click', function(){
  start = Date.now();
  console.log(start);
})



