# Lab 11: Javascript Lab
For this project you are making a simple javascript typing game. Download lab7.html and lab7.js and put them in a folder.

## Play the game
Download lab7.html and lab7.js and put them in a folder. Load lab7.html in your browser and try the game. Start typing and see what happens. Refresh the page if you get stuck. Look at the html and js files and try to understand what is happening.

## Add a css file
Create a new file lab7.css
In the head element of your html add a css link: `<link rel="stylesheet" href="lab7.css">`
Add styling (your choice) to userinput, result, level, and goal.
You will need an id selector: `#myid` like so:
```
#userinput {
  background-color : lightgray
}
```
# More challenges
Add more difficulty levels so that there are at least six. You can change any of the goalStrings and difficulties names however you like.

## Add a restart button
Add a new button element to typing.html give it attribute `id="restartButton"`

Define a new function `restart()`

In typing.js:
```
function restart() {
  // In here set i=0
  // find the level, result, and goal elements and reset their textContent
}
```
Add an eventListener
Note `document.querySelector` uses the same selector syntax as your css file.
```
restartButton = document.querySelector("#restartButton")
restartButton.addEventListener('click', restart) // this is your restart func
```
## Add a Next button
Similar to above, after the user successfully completes the level, Show a "Next Challenge button".
This time we will add the button dynamically so that it only appears when the user completes the challenge. Add this code to the keypress listener:
```
next = document.createElement('button')
document.body.appendChild(next)
next.addEventListener('click', nextChallenge)
```
Move the code in the keypress listener that sets up the next challenge into a new function called "nextChallenge". The game should show "You Win!" and a new button when you complete the challenge. Clicking the button should start the next challenge.

## Add a timer mechanism
In javascript `Date.now()` returns a timestamp in milliseconds. To start timing, record the timestamp with a variable:

`start = Date.now()`
To stop timing, get a second timestamp and report the difference:
```
end = Date.now()
diff = (end - start)/1000
timing = document.createElement('p')
timing.textContent = diff
document.body.appendChild(timing)
```
Think about where these lines should go in your typing.js. Make sure timing works correctly with the "restart" and "nextChallenge" buttons.

## Make one more improvement to the game of your choice.
It can be any improvement you like, but should be enough work to show me that you can make substantive changes to the game. Some suggestions:

- Detect and highlight user's typos
- A leaderboard for fastest finishes
- Add random challenges using `Math.random()`
- unique css style changes for each challenge
- Improve html document structure so it's not random h3s and ps in the body

Add comments to your files showing where your improvement is and what it does.
