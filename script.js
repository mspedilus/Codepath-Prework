// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var randomInt;
var lives = 2;
var countDown = 15;
var gameTimer;

//Creates Sequence
function createPattern() {
  for (var i = 0; i < 8; i++) {
    randomInt = Math.floor(Math.random() * 6) + 1; //Generates a random number between 1-6
    pattern.push(randomInt); //Adds random number to pattern array
  }
}

function startGame() {
  //initialize game variables
  countDown = 15;
  progress = 0;
  lives = 2;
  pattern = [];
  gamePlaying = true;
  clueHoldTime = 1000;

  //In-game trackers
  document.getElementById("liveCount").innerHTML = "Game lives: " + lives;
  document.getElementById("timer").innerHTML = countDown + " seconds";
  document.getElementById("liveCount").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  createPattern(); //Creates the pattern
  playClueSequence();
  gameTimer = setInterval(myTimer, 1000); //Starts timer
}

function stopGame() {
  //initialize game variable
  gamePlaying = false;
  lives = -1;
  picture();
  clearInterval(gameTimer);

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");

  //Hides in-game trackers
  document.getElementById("liveCount").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 232.1,
  2: 261.6,
  3: 329.6,
  4: 392,
  5: 466.2,
  6: 498,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime -= 110;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        picture();
        progress++;
        countDown = 16;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    lives--;
    document.getElementById("liveCount").innerHTML = "Game lives: " + lives;

    if (lives == -1) {
      //Allows user up to 2 mistakes before calling loseGame()
      //Guess was incorrect
      //GAME OVER: LOSE!
      picture();
      loseGame();
    }
  }
}

//Adds images to the bottom of the screen
function picture() {
  if (lives == -1) {
    //Hides images when gameover
    document.getElementById("1").classList.add("hidden");
    document.getElementById("2").classList.add("hidden");
    document.getElementById("3").classList.add("hidden");
    document.getElementById("4").classList.add("hidden");
    document.getElementById("5").classList.add("hidden");
    document.getElementById("6").classList.add("hidden");
    document.getElementById("7").classList.add("hidden");
    return;
  }

  switch (
    progress //Flips through images as user progress through sequence
  ) {
    case 0:
      document.getElementById("1").classList.remove("hidden");
      break;
    case 1:
      document.getElementById("1").classList.add("hidden");
      document.getElementById("2").classList.remove("hidden");
      break;
    case 2:
      document.getElementById("2").classList.add("hidden");
      document.getElementById("3").classList.remove("hidden");
      break;

    case 3:
      document.getElementById("3").classList.add("hidden");
      document.getElementById("4").classList.remove("hidden");
      break;

    case 4:
      document.getElementById("4").classList.add("hidden");
      document.getElementById("5").classList.remove("hidden");
      break;

    case 5:
      document.getElementById("5").classList.add("hidden");
      document.getElementById("6").classList.remove("hidden");
      break;
    case 6:
      document.getElementById("6").classList.add("hidden");
      document.getElementById("7").classList.remove("hidden");
      break;
  }
}

//Adds the timer
function myTimer() {
  countDown -= 1;
  document.getElementById("timer").innerHTML = countDown + " seconds";
  if (countDown == 0) {
    //If time runs out decrease lives
    if (lives == 0) {
      //If time and lives runs out end game
      clearInterval(gameTimer);
      loseGame();
    }
    lives--;
    document.getElementById("liveCount").innerHTML = "Game lives: " + lives;
    countDown = 16;
  }
}
