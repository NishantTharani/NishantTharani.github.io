// Globals
var currentAudio = null;

// Bind the click event for all the keys
var pianoKeys = document.getElementsByClassName("pianoKey");

// Bind event handler for clicking all the buttons
for (let i = 0; i < pianoKeys.length; i++) {
  pianoKeys[i].addEventListener("click", keyClicked);
}

function keyClicked(event) {
  let btn = event.target;
  console.log("Found: " + btn.id);
  let keyNum = btn.id.slice(3);
  console.log("Playing: " + keyNum);
  playSound(keyNum);
}

// Bind event handler for playing via the keyboard
document.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log("Key pressed: " + key);

  // Tediously assign mp3 files to keys
  switch (key) {
    case "q":
      playSound("C3");
      break;
    case "2":
      playSound("Db3");
      break;
    case "w":
      playSound("D3");
      break;
    case "3":
      playSound("Eb3");
      break;
    case "e":
      playSound("E3");
      break;
    case "r":
      playSound("F3");
      break;
    case "5":
      playSound("Gb3");
      break;
    case "t":
      playSound("G3");
      break;
    case "6":
      playSound("Ab3");
      break;
    case "y":
      playSound("A3");
      break;
    case "7":
      playSound("Bb3");
      break;
    case "u":
      playSound("B3");
      break;
    case "i":
      playSound("C4");
      break;
    case "z":
      playSound("C4");
      break;
    case "s":
      playSound("Db4");
      break;
    case "x":
      playSound("D4");
      break;
    case "d":
      playSound("Eb4");
      break;
    case "c":
      playSound("E4");
      break;
    case "v":
      playSound("F4");
      break;
    case "g":
      playSound("Gb4");
      break;
    case "b":
      playSound("G4");
      break;
    case "h":
      playSound("Ab4");
      break;
    case "n":
      playSound("A4");
      break;
    case "j":
      playSound("Bb4");
      break;
    case "m":
      playSound("B4");
      break;
    case ",":
      playSound("C5");
      break;
    default:
      console.log("Key: " + key + " not recognized");
      break;
  }
});

// document.addEventListener("keyup", (event) => {
//   if (currentAudio !== null) {
//     currentAudio.pause();
//   }
// });

// Play the given mp3 file
function playSound(name) {
  // First stop the old sound
  if (currentAudio !== null) {
    currentAudio.pause();
  }

  // Play the new sound
  currentAudio = new Audio("./sounds/" + name + "-49-96.mp3");
  currentAudio.play();
}
