const difficulties = ["Easy","Pretty Easy", "Medium", "Medium-ish", "Hard", "Hella Hard"];
const goalString = ["lad fad sad dad",
  "dog tog log bog",
  "This is not a test.",
  "So, I was heading to this place, but I couldn't remember the name..",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?",
  "Grow old along with me! The best is yet to be, the last of life, for which the first was made. Our times are in his hand who saith, 'A whole I planned, youth shows but half; Trust God: See all, nor be afraid!"];

var i = 0;

window.addEventListener("keypress", function (event) {
  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  if (textbox.textContent == goalString[i]) {
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    textbox.textContent = "";

    //create Next button
    next = document.createElement('button')
    document.body.appendChild(next)
    next.textContent = "Next"
    next.addEventListener('click', nextChallenge)

    // create Next button functionality
    function nextChallenge (){
      i = i+1;
      lvl = document.getElementById("level")
      lvl.textContent = difficulties[i]
      goal = document.getElementById("goal")
      goal.textContent = goalString[i]
    }
  
  } // end of if-statement 
  restartButton = document.querySelector("#restartButton")
  restartButton.addEventListener('click', restart)

  // create timer
  
}); // end of window listening



function restart() {
  // In here set i=0
  let i = 0;
  // find the level, result, and goal elements and reset their textContent
  lvl = document.getElementById("level")
  lvl.textContent = difficulties[i];
  goal = document.getElementById("goal")
  goal.textContent = goalString[i];
  result.textContent = "Type the Following text:";
  textbox = document.getElementById("userinput");
  textbox.textContent = ""; // after reset when user enters space, entire string is set to ""??

};



