const difficulties = ["Easy", "Medium", "Hard"];
const goalString = ["lad fad sad dad",
  "This is not a test.",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?"];

var i = 0;

window.addEventListener("keypress", function (event) {
  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  if (textbox.textContent == goalString[i]) {
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    textbox.textContent = "";
    i = i+1;
    lvl = document.getElementById("level")
    lvl.textContent = difficulties[i]
    goal = document.getElementById("goal")
    goal.textContent = goalString[i]
  }
})
