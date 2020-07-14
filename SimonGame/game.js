var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(".btn").click(btnClicked);

$(document).keypress(() => {
  if (!gameStarted) {
    $("h1").text("Level 0");
    nextSequence();
    gameStarted = true;
  }
});

function nextSequence() {
  // Update the level
  level += 1;
  $("h1").text("Level " + level);

  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(50)
    .fadeIn(50);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function btnClicked(event) {
  let btn = event.target;
  let userChosenColour = btn.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  $("#" + userChosenColour).addClass("pressed");
  setTimeout(() => {
    $("#" + userChosenColour).removeClass("pressed");
  }, 100);

  // Check if the game should move to the next level or end
  if (userClickedPattern.every((val, index) => val === gamePattern[index])) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    $(document.body).addClass("game-over");
    setTimeout(() => {
      $(document.body).removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key To Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
